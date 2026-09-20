import { selectedWork } from "../data/site";

const featured = selectedWork.filter((item) => item.note !== "Layout reference only");
const reference = selectedWork.find((item) => item.note === "Layout reference only");

export function SelectedWork() {
  return (
    <section id="selected" aria-label="Selected work">
      <div className="work-grid">
        {featured.map((item) => (
          <a className="work-card" key={item.title} href={item.href} target="_blank" rel="noreferrer">
            <div className="work-thumb" aria-hidden="true" />
            <h3>{item.title}</h3>
          </a>
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
