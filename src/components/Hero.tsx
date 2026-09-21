import { profile, resume } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <p className="kicker">{profile.name}</p>
      <h1 id="hero-title">Builder-educator for beverage + AI product</h1>
      <p>{profile.summary}</p>
      <p className="hero-actions">
        <a className="hero-cta" href="#resume">
          View resume
        </a>
        <a className="hero-cta hero-cta--ghost" href={resume.href} download={resume.downloadName}>
          Download PDF
        </a>
      </p>
    </section>
  );
}
