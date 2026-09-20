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
        <h2 id="work-title">Case studies</h2>
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
            <p>{study.summary}</p>
            <div className="case__actions">
              <a className="btn btn--primary" href={study.href} target="_blank" rel="noreferrer">
                {study.hrefLabel}
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
