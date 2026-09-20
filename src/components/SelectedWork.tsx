import { selectedWork } from "../data/site";

export function SelectedWork() {
  return (
    <section className="section wrap" id="selected" aria-labelledby="selected-title">
      <div className="section-head">
        <p className="eyebrow">More public work</p>
        <h2 id="selected-title">Selected repos.</h2>
        <p>
          Smaller cards for breadth. Each one opens the public GitHub repository.
        </p>
      </div>
      <div className="work-grid">
        {selectedWork.map((item) => (
          <a
            className="work-card"
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.blurb}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
