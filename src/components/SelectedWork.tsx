import { selectedWork } from "../data/site";
import { SiteFrame } from "./SiteFrame";

const featured = selectedWork.filter((item) => item.note !== "Layout reference only");
const reference = selectedWork.find((item) => item.note === "Layout reference only");

export function SelectedWork() {
  return (
    <section id="selected" aria-label="Selected work">
      <div className="work-grid">
        {featured.map((item) => (
          <article className="work-card" key={item.title}>
            <SiteFrame
              variant="work"
              urlLabel={item.previewLabel}
              src={item.previewSrc}
              title={`${item.title} live preview`}
              openHref={item.previewSrc}
            />
            <h3>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </h3>
          </article>
        ))}
      </div>
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
