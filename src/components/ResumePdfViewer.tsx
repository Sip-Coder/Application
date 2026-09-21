import { useEffect, useRef, useState } from "react";
import {
  getDocument,
  GlobalWorkerOptions,
  RenderingCancelledException
} from "pdfjs-dist";
import type { PDFDocumentProxy, RenderTask } from "pdfjs-dist";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

GlobalWorkerOptions.workerSrc = workerSrc;

const MAX_DEVICE_PIXEL_RATIO = 2;
const RESIZE_DEBOUNCE_MS = 150;

type ViewerStatus = "loading" | "ready" | "error";

type ResumePdfViewerProps = {
  src: string;
  fileName: string;
  onStatusChange?: (label: string) => void;
};

export function ResumePdfViewer({ src, fileName, onStatusChange }: ResumePdfViewerProps) {
  const pdfRef = useRef<PDFDocumentProxy | null>(null);
  const canvasRefs = useRef<Array<HTMLCanvasElement | null>>([]);
  const renderTasksRef = useRef<RenderTask[]>([]);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const pagesRef = useRef<HTMLDivElement | null>(null);
  const widthRef = useRef(0);

  const [status, setStatus] = useState<ViewerStatus>("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (status === "loading") {
      onStatusChange?.("Loading…");
      return;
    }
    if (status === "error") {
      onStatusChange?.("Unavailable");
      return;
    }
    if (pageCount > 0) {
      onStatusChange?.(`${currentPage} / ${pageCount}`);
    }
  }, [currentPage, onStatusChange, pageCount, status]);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setErrorMessage(null);
    setPageCount(0);
    setCurrentPage(1);
    setWidth(0);
    widthRef.current = 0;

    const loadingTask = getDocument({
      url: src,
      useWasm: false
    });

    loadingTask.promise
      .then((pdf) => {
        if (cancelled) {
          void pdf.cleanup();
          return;
        }
        pdfRef.current = pdf;
        setPageCount(pdf.numPages);
        setStatus("ready");
      })
      .catch((err: unknown) => {
        if (cancelled) {
          return;
        }
        setErrorMessage(err instanceof Error ? err.message : "The resume PDF could not be opened.");
        setStatus("error");
      });

    return () => {
      cancelled = true;
      for (const task of renderTasksRef.current) {
        task?.cancel();
      }
      renderTasksRef.current = [];
      pdfRef.current = null;
      void loadingTask.destroy();
    };
  }, [src]);

  useEffect(() => {
    if (status !== "ready" || pageCount === 0) {
      return;
    }

    const el = pagesRef.current;
    if (!el) {
      return;
    }

    const applyWidth = (next: number) => {
      const rounded = Math.floor(next);
      if (rounded <= 0 || rounded === widthRef.current) {
        return;
      }
      widthRef.current = rounded;
      setWidth(rounded);
    };

    applyWidth(el.clientWidth);

    let timeoutId = 0;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) {
        return;
      }
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        applyWidth(entry.contentRect.width);
      }, RESIZE_DEBOUNCE_MS);
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
    };
  }, [pageCount, status]);

  useEffect(() => {
    const pdf = pdfRef.current;
    if (!pdf || !width || status !== "ready") {
      return;
    }

    let cancelled = false;
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DEVICE_PIXEL_RATIO);

    const paint = async () => {
      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
        if (cancelled) {
          return;
        }

        const page = await pdf.getPage(pageNumber);
        if (cancelled) {
          return;
        }

        const unscaled = page.getViewport({ scale: 1 });
        const cssScale = width / unscaled.width;
        const viewport = page.getViewport({ scale: cssScale * dpr });
        const canvas = canvasRefs.current[pageNumber - 1];
        if (!canvas) {
          continue;
        }

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${unscaled.height * cssScale}px`;

        const task = page.render({
          canvas,
          viewport,
          background: "#ffffff"
        });
        renderTasksRef.current[pageNumber - 1] = task;

        try {
          await task.promise;
        } catch (err: unknown) {
          if (err instanceof RenderingCancelledException || cancelled) {
            return;
          }
          throw err;
        }
      }
    };

    void paint().catch((err: unknown) => {
      if (cancelled || err instanceof RenderingCancelledException) {
        return;
      }
      setErrorMessage(err instanceof Error ? err.message : "The resume pages could not be drawn.");
      setStatus("error");
    });

    return () => {
      cancelled = true;
      for (const task of renderTasksRef.current) {
        task?.cancel();
      }
      renderTasksRef.current = [];
    };
  }, [pageCount, status, width]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || status !== "ready") {
      return;
    }

    const updateCurrentPage = () => {
      const canvases = canvasRefs.current;
      const scrollerTop = scroller.getBoundingClientRect().top;
      const marker = Math.min(48, scroller.clientHeight * 0.12);
      let page = 1;
      for (let i = 0; i < canvases.length; i += 1) {
        const canvas = canvases[i];
        if (!canvas) {
          continue;
        }
        if (canvas.getBoundingClientRect().top - scrollerTop <= marker) {
          page = i + 1;
        }
      }
      setCurrentPage(page);
    };

    updateCurrentPage();
    scroller.addEventListener("scroll", updateCurrentPage, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", updateCurrentPage);
    };
  }, [pageCount, status, width]);

  if (status === "error") {
    return (
      <div className="resume-pdf resume-pdf--message">
        <p>
          The resume preview could not be shown.
          {errorMessage ? ` ${errorMessage}` : ""}{" "}
          <a href={src} target="_blank" rel="noreferrer">
            Open {fileName}
          </a>
        </p>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="resume-pdf resume-pdf--message" aria-live="polite">
        <p>Loading resume…</p>
      </div>
    );
  }

  return (
    <div className="resume-pdf" ref={scrollerRef} tabIndex={0} aria-label={`${fileName} pages`}>
      <div className="resume-pdf__pages" ref={pagesRef}>
        {Array.from({ length: pageCount }, (_, index) => (
          <canvas
            key={index}
            ref={(node) => {
              canvasRefs.current[index] = node;
            }}
            className="resume-pdf__page"
            role="img"
            aria-label={`Resume page ${index + 1} of ${pageCount}`}
          />
        ))}
      </div>
    </div>
  );
}
