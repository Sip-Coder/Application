import { lazy, Suspense, useState } from "react";
import { resume } from "../data/site";

const ResumePdfViewer = lazy(async () => {
  const mod = await import("./ResumePdfViewer");
  return { default: mod.ResumePdfViewer };
});

export function Resume() {
  const [viewerStatus, setViewerStatus] = useState("Loading…");

  return (
    <section className="resume" id="resume" aria-labelledby="resume-title">
      <p className="kicker">Resume</p>
      <div className="resume__copy">
        <h2 id="resume-title">{resume.title}</h2>
        <p>{resume.summary}</p>
        <p className="resume__actions">
          <a href={resume.href} download={resume.downloadName}>
            Download PDF
          </a>
          <a href={resume.href} target="_blank" rel="noreferrer">
            Open PDF
          </a>
        </p>
      </div>
      <div className="resume-frame" data-resume-preview>
        <div className="resume-frame__bar">
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <a className="resume-frame__url" href={resume.href} target="_blank" rel="noreferrer">
            {resume.fileName}
          </a>
          <span className="resume-frame__meta">{viewerStatus}</span>
        </div>
        <Suspense
          fallback={
            <div className="resume-pdf resume-pdf--message" aria-live="polite">
              <p>Loading resume…</p>
            </div>
          }
        >
          <ResumePdfViewer
            src={resume.href}
            fileName={resume.fileName}
            onStatusChange={setViewerStatus}
          />
        </Suspense>
      </div>
    </section>
  );
}
