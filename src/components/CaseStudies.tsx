import { caseStudies } from "../data/site";
import { CoffeeIndexPreview } from "./CoffeeIndexPreview";
import { SipopediaPreview } from "./SipopediaPreview";
import { ZenNoisePreview } from "./ZenNoisePreview";

const previews = {
  sipopedia: <SipopediaPreview />,
  "coffee-index": <CoffeeIndexPreview />,
  "zen-noise": <ZenNoisePreview />
} as const;

export function CaseStudies() {
  return (
    <section className="section wrap" id="work" aria-labelledby="work-title">
      <div className="section-head">
        <p className="eyebrow">Featured case studies</p>
        <h2 id="work-title">Websites inside the website.</h2>
        <p>
          Three shipped surfaces, previewed in-place the way a hiring walkthrough
          should work: inspect the product, then open the live link or source.
        </p>
      </div>
      {caseStudies.map((study, index) => (
        <article
          className={index % 2 === 1 ? "case case--flip" : "case"}
          key={study.id}
        >
          {previews[study.id]}
          <div className="case__copy">
            <p className="eyebrow">{study.eyebrow}</p>
            <h3>{study.title}</h3>
            <p className="kicker">{study.kicker}</p>
            <div className="status">{study.status}</div>
            <p>{study.summary}</p>
            <p>{study.story}</p>
            <ul>
              {study.proof.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="case__actions">
              <a className="btn btn--primary" href={study.liveUrl} target="_blank" rel="noreferrer">
                Open live
              </a>
              <a className="btn btn--ghost" href={study.repoUrl} target="_blank" rel="noreferrer">
                {study.repoLabel}
              </a>
              {"extraUrl" in study && study.extraUrl ? (
                <a className="btn btn--ghost" href={study.extraUrl} target="_blank" rel="noreferrer">
                  {study.extraLabel}
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
