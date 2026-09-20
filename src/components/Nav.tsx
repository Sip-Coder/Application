import { profile } from "../data/site";
import { BrandMark } from "./BrandMark";

const links = [
  { href: "#work", label: "Case studies" },
  { href: "#selected", label: "Selected work" },
  { href: "#contact", label: "Contact" },
  { href: profile.github, label: "GitHub", external: true }
];

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a className="brand" href="#top">
          <BrandMark compact />
          <div>
            <strong>{profile.name}</strong>
            <span>builder-educator</span>
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
