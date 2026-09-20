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
    <section className="cases" id="work" aria-label="Case studies">
      {caseStudies.map((study) => (
        <article className="case" key={study.id}>
          {previews[study.id]}
          <div className="case__copy">
            <h3>{study.title}</h3>
            <p>{study.summary}</p>
            <a href={study.href} target="_blank" rel="noreferrer">
              {study.hrefLabel}
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}
