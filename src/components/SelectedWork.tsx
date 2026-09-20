import { selectedWork, workAccents } from "../data/site";

export function SelectedWork() {
  return (
    <section className="section wrap" id="selected" aria-labelledby="selected-title">
      <div className="section-head">
        <h2 id="selected-title">Selected work</h2>
      </div>
      <div className="work-grid">
        {selectedWork.map((item, index) => (
          <a
            className="work-card"
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            style={{ borderTopColor: workAccents[index] }}
          >
            <h3>{item.title}</h3>
            <p>{item.note}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
