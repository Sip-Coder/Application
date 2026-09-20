import {
  certifications,
  education,
  experience,
  metrics,
  profile,
  projects,
  skills,
} from './data.js'

const nav = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="mark" href="#top">
          <span aria-hidden="true">JY</span>
          <strong>Jonathan Yu</strong>
        </a>
        <nav aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <p className="eyebrow">Resume portfolio · Sip-Coder / Application</p>
          <h1>{profile.headline}</h1>
          <p className="lede">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button" href="https://sipstudies.com">
              Visit Sip Studies
            </a>
            <a className="button ghost" href={`mailto:${profile.email}`}>
              Email Jonathan
            </a>
          </div>
          <dl className="metrics">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="work">
          <div className="section-head">
            <h2>Selected work</h2>
            <p>Shipped product surfaces and public repos that reviewers can open, inspect, and click through.</p>
          </div>
          <ul className="project-grid">
            {projects.map((project) => (
              <li key={project.name}>
                <article className="card">
                  <p className="tag">{project.tag}</p>
                  <h3>
                    <a href={project.href} rel="noreferrer" target="_blank">
                      {project.name}
                    </a>
                  </h3>
                  <p>{project.description}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience">
          <div className="section-head">
            <h2>Experience</h2>
            <p>Founder-builder work, live-event production, and a decade of wine and spirits enablement.</p>
          </div>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={`${job.company}-${job.dates}`}>
                <p className="dates">{job.dates}</p>
                <h3>{job.role}</h3>
                <p className="company">{job.company}</p>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="credentials">
          <div className="section-head">
            <h2>Credentials</h2>
            <p>{education}</p>
          </div>
          <div className="split">
            <div>
              <h3>Certifications</h3>
              <ul className="chip-list">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Skills</h3>
              <ul className="plain-list">
                {skills.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="section-head">
            <h2>Contact</h2>
            <p>
              {profile.location} · {profile.phone}
            </p>
          </div>
          <div className="hero-actions">
            <a className="button" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            {profile.links.map((link) => (
              <a key={link.href} className="button ghost" href={link.href} rel="noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>
          Live at{' '}
          <a href="https://sip-coder.github.io/Application/">https://sip-coder.github.io/Application/</a>
        </p>
      </footer>
    </>
  )
}
