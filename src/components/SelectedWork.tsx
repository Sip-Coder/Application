import { selectedWork } from "../data/site";
import { SiteFrame } from "./SiteFrame";

const featured = selectedWork.filter((item) => item.note !== "Layout reference only");
const reference = selectedWork.find((item) => item.note === "Layout reference only");

export function SelectedWork() {
  return (
    <section className="cases" id="selected" aria-label="Selected work">
      {featured.map((item) => (
        <article className="case" key={item.title}>
          <SiteFrame
            variant="work"
            urlLabel={item.previewLabel}
            src={item.previewSrc}
            title={`${item.title} live preview`}
            openHref={item.previewSrc}
          />
          <div className="case__copy">
            <h3>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </h3>
            <p>Interactive embed — click and scroll the live build in-page.</p>
            <a href={item.previewSrc} target="_blank" rel="noreferrer">
              {item.previewLabel}
            </a>
          </div>
        </article>
      ))}
      {reference ? (
        <p className="work-note">
          Layout reference only:{" "}
          <a href={reference.href} target="_blank" rel="noreferrer">
            {reference.title}
          </a>
        </p>
      ) : null}
    </section>
  );
}
