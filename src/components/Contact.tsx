import { profile } from "../data/site";

const contacts = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "jon-yu-sipopedia", href: profile.linkedin },
  { label: "GitHub", value: "Sip-Coder", href: profile.github },
  { label: "Sip Studies", value: "sipstudies.com", href: profile.sipstudies },
  { label: "Channels", value: "bio.site/SipStudies", href: profile.bioSite }
];

export function Contact() {
  return (
    <section className="wrap" id="contact" aria-labelledby="contact-title">
      <div className="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let’s talk education, product, and the next build.</h2>
          <p>
            Best reached by email or LinkedIn. Happy to walk a hiring team through
            Sipopedia, the tasting tools, or how AI-assisted, repo-driven work
            actually ships.
          </p>
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            Email Jonathan
          </a>
        </div>
        <div className="contact-list">
          {contacts.map((item) => (
            <a key={item.label} href={item.href} target={item.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
