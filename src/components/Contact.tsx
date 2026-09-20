import { contacts } from "../data/site";

export function Contact() {
  return (
    <section className="wrap" id="contact" aria-labelledby="contact-title">
      <div className="contact">
        <div>
          <h2 id="contact-title">Contact</h2>
        </div>
        <div className="contact-list">
          {contacts.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
