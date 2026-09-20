import { credentials, profile } from "../data/site";
import { BrandMark } from "./BrandMark";

export function Hero() {
  return (
    <section className="hero wrap" id="top" aria-labelledby="hero-title">
      <div>
        <p className="eyebrow">Sip Studies · Las Vegas</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="lede">{profile.positioning}</p>
        <p className="summary">{profile.summary}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">
            Get in touch
          </a>
          <a
            className="btn btn--ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
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
        <div className="chips" aria-label="Credentials">
          {credentials.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <aside className="portrait-card">
        <BrandMark />
        <footer>
          <strong>{profile.location}</strong>
          <span>{profile.sipstudies.replace("https://", "")}</span>
        </footer>
      </aside>
    </section>
  );
}
