import { caseStudies } from "../data/site";
import { SiteFrame } from "./SiteFrame";

export function CaseStudies() {
  return (
    <section className="cases" id="work" aria-label="Case studies">
      {caseStudies.map((study) => (
        <article className="case" key={study.id}>
          <SiteFrame
            urlLabel={study.previewLabel}
            src={study.previewSrc}
            title={`${study.title} live preview`}
            openHref={study.openHref}
            openLabel={study.openLabel}
          />
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
