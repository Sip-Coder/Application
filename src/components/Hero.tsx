import { profile } from "../data/site";
import { BrandMark } from "./BrandMark";

export function Hero() {
  return (
    <section className="hero wrap" id="top" aria-labelledby="hero-title">
      <div>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="lede">
          {profile.name} — {profile.positioning}
        </p>
        <p className="summary">{profile.summary}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">
            Contact
          </a>
          <a
            className="btn btn--ghost"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <aside className="portrait-card">
        <BrandMark />
      </aside>
    </section>
  );
}
