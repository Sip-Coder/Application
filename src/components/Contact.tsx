import { contacts } from "../data/site";

export function Contact() {
  const github = contacts[0];
  const sites = contacts.slice(1);

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <p className="kicker" id="contact-title">
        Contact
      </p>
      <p className="contact-line">
        GitHub:{" "}
        <a href={github.href} target="_blank" rel="noreferrer">
          {github.value}
        </a>
        {"  ·  "}
        Sites:{" "}
        {sites.map((item, index) => (
          <span key={item.href}>
            {index > 0 ? "  ·  " : null}
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.value}
            </a>
          </span>
        ))}
      </p>
    </section>
  );
}
