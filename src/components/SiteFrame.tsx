import { useRef, useState } from "react";

type SiteFrameProps = {
  urlLabel: string;
  src: string;
  title: string;
  openHref: string;
  openLabel?: string;
};

type FrameStatus = "loading" | "ready" | "blocked";

function isBlankFrame(frame: HTMLIFrameElement) {
  try {
    const href = frame.contentWindow?.location.href ?? "";
    return href === "" || href === "about:blank";
  } catch {
    // Cross-origin access throws when the remote document actually loaded.
    return false;
  }
}

export function SiteFrame({
  urlLabel,
  src,
  title,
  openHref,
  openLabel = "Open live site"
}: SiteFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [status, setStatus] = useState<FrameStatus>("loading");

  async function toggleFullscreen() {
    const node = frameRef.current;
    if (!node) return;

    if (document.fullscreenElement === node) {
      await document.exitFullscreen();
      return;
    }

    if (node.requestFullscreen) {
      await node.requestFullscreen();
    }
  }

  function markReadyOrBlocked() {
    const frame = iframeRef.current;
    if (!frame) return;
    setStatus(isBlankFrame(frame) ? "blocked" : "ready");
  }

  return (
    <div className="site-frame" ref={frameRef} data-website-preview>
      <div className="site-frame__bar">
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <strong title={urlLabel}>{urlLabel}</strong>
        <a href={openHref} target="_blank" rel="noreferrer">
          {openLabel}
        </a>
        <button type="button" onClick={() => void toggleFullscreen()}>
          Fullscreen
        </button>
      </div>
      <div className="site-frame__viewport">
        {status !== "blocked" ? (
          <iframe
            ref={iframeRef}
            title={title}
            src={src}
            loading={src.startsWith("http") ? "lazy" : "eager"}
            referrerPolicy="no-referrer-when-downgrade"
            allow="autoplay; clipboard-write; fullscreen"
            allowFullScreen
            onLoad={() => {
              window.setTimeout(markReadyOrBlocked, 300);
            }}
            onError={() => setStatus("blocked")}
          />
        ) : null}
        {status === "blocked" ? (
          <div className="site-frame__fallback" role="status">
            <p>
              This live site refused to load in an embedded frame (likely{" "}
              <code>X-Frame-Options</code> or <code>frame-ancestors</code>).
            </p>
            <a href={openHref} target="_blank" rel="noreferrer">
              {openLabel}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
