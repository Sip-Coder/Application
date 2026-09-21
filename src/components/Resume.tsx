import { resume } from "../data/site";

export function Resume() {
  const viewerSrc = `${resume.href}#view=FitH`;

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
        </div>
        <iframe title="Jonathan Yu combined resume" src={viewerSrc} loading="lazy" />
      </div>
    </section>
  );
}
