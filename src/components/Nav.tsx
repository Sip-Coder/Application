import { profile } from "../data/site";

const links = [
  { href: "#work", label: "Case studies" },
  { href: "#selected", label: "Selected" },
  { href: "#contact", label: "Contact" },
  { href: profile.linkedin, label: "LinkedIn", external: true }
];

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a className="brand" href="#top">
          <img src={profile.portrait} alt="" width={40} height={40} />
          <div>
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </div>
        </a>
        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noreferrer" }
                : undefined)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
