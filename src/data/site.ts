export const profile = {
  name: "Jonathan Yu",
  role: "Builder-educator",
  location: "Las Vegas, NV",
  email: "JonYu3@gmail.com",
  linkedin: "https://www.linkedin.com/in/jon-yu-sipopedia",
  github: "https://github.com/Sip-Coder",
  sipstudies: "https://sipstudies.com",
  sipopedia: "https://sipopedia.com",
  bioSite: "https://bio.site/SipStudies",
  portrait: "/jonathan-yu.png",
  positioning:
    "I turn beverage craft, classroom teaching, and AI-assisted building into learning products people can actually use.",
  summary:
    "Founder of Sip Studies and Sipopedia. Certified Wine Educator and Court of Master Sommeliers Certified Sommelier. Ten-plus years in wine and spirits sales, curriculum, and live education — now shipping Vite + React tools across Learn, Taste, and Connect."
};

export const credentials = [
  "CWE · Society of Wine Educators",
  "CMS Certified Sommelier",
  "WSET Level 3 Wine",
  "MIT AI Strategy",
  "Architecture B.S., Wentworth"
];

export const caseStudies = [
  {
    id: "sipopedia",
    eyebrow: "01 · Flagship",
    title: "Sipopedia.com",
    kicker: "Beverage education hub",
    liveUrl: "https://sipopedia.com",
    liveLabel: "sipopedia.com",
    repoUrl: "https://sipstudies.com",
    repoLabel: "sipstudies.com",
    status: "Live product",
    summary:
      "The public front door for Sip Studies: Sip Academy learning, Sippy GPTs, a flavor blog, community, and a water-access mission. Built as a Vite + React + TypeScript SPA with Learn / Taste / Connect product lanes.",
    story:
      "A deep beverage domain needed to become a usable learning product instead of scattered lessons, posts, and one-off classes. Jonathan mapped curriculum, terminology, tasting practice, and community into inspectable software.",
    proof: [
      "Learn · Taste · Connect product areas",
      "Sip Studies / Sippy GPTs for studying and service",
      "Flavor blog + water-access mission",
      "20,000-row terminology pipeline with citations"
    ]
  },
  {
    id: "coffee-index",
    eyebrow: "02 · Sip Studies lane",
    title: "Coffee Index",
    kicker: "Tasting / market-index app",
    liveUrl: "https://github.com/Sip-Coder/Coffee-Index",
    liveLabel: "github.com/Sip-Coder/Coffee-Index",
    repoUrl: "https://github.com/Sip-Coder/Coffee-Index",
    repoLabel: "Source on GitHub",
    status: "Public Vite app",
    summary:
      "A local-first Vite dashboard that models what a solo espresso costs across U.S. cities, ranked against a national baseline. Fast data storytelling from the Sip Studies tasting lane.",
    story:
      "The same tasting instinct as wine education, applied to coffee economics: city rankings, regional averages, and a transparent methodology that works instantly on localhost.",
    proof: [
      "City-by-city espresso cost model",
      "Regional averages and index of 100",
      "Methodology narrative, not a black box"
    ]
  },
  {
    id: "zen-noise",
    eyebrow: "03 · Focus product",
    title: "Zen Noise",
    kicker: "Ambient focus app",
    liveUrl: "https://zen-noise.replit.app/",
    liveLabel: "zen-noise.replit.app",
    repoUrl: "https://github.com/Sip-Coder/Zen-Noise",
    repoLabel: "Source on GitHub",
    extraUrl: "https://replit.com/@SipStudies/Zen-Noise",
    extraLabel: "Replit origin",
    status: "Web Audio · shareable mixes",
    summary:
      "A Replit-origin ambient mixer: brown noise, recorded layers, layer modulation, a focus timer, curated presets, shuffle, saved local mixes, and shareable mix links. No data collection.",
    story:
      "A focus-noise idea became a durable, user-controlled workflow — local persistence, linkable states, and inspectable production behavior instead of a one-off prototype.",
    proof: [
      "Web Audio layers + brown noise",
      "Curated mixes, shuffle, and shareable links",
      "Saved on-device mixes · no data collection"
    ]
  }
] as const;

export const selectedWork = [
  {
    title: "Biz-Bookkeeper",
    tag: "TypeScript ledger",
    href: "https://github.com/Sip-Coder/Biz-Bookkeeper",
    blurb:
      "Small-business bookkeeping workspace: dashboard, transactions, P&L, tax insights, goals, and companies. Replit-origin TypeScript monorepo."
  },
  {
    title: "Rose Quartz",
    tag: "Client site",
    href: "https://github.com/Sip-Coder/Rose-Quartz",
    blurb:
      "Las Vegas therapeutic massage launch site — services, body-map intake, care standards, and a 36-article journal."
  },
  {
    title: "Sunset in Monaco",
    tag: "Narrative RPG",
    href: "https://github.com/Sip-Coder/sunset-in-monaco-rpg",
    blurb:
      "Point-and-click murder mystery. Inspect five hotspots at a fashion afterparty, then accuse a suspect before the night closes."
  },
  {
    title: "Application demo",
    tag: "Layout reference",
    href: "https://github.com/Sip-Coder/jonathan-yu-application-demo",
    blurb:
      "Earlier recruiter walkthrough that pioneered the websites-within-a-website preview pattern this page continues. Not a primary case study."
  }
] as const;

export const coffeeMarkets = [
  { city: "San Francisco", region: "West", price: 4.65 },
  { city: "New York", region: "Northeast", price: 4.5 },
  { city: "Seattle", region: "West", price: 4.35 },
  { city: "Los Angeles", region: "West", price: 4.3 },
  { city: "Boston", region: "Northeast", price: 4.15 },
  { city: "Denver", region: "Mountain", price: 3.95 },
  { city: "Chicago", region: "Midwest", price: 3.85 },
  { city: "Austin", region: "South", price: 3.75 },
  { city: "Phoenix", region: "Southwest", price: 3.6 },
  { city: "Nashville", region: "South", price: 3.45 },
  { city: "Detroit", region: "Midwest", price: 3.25 },
  { city: "Omaha", region: "Midwest", price: 3.05 }
] as const;

export const zenMixes = [
  { id: "focus", label: "Focus", layers: "Coffee · Fan · City" },
  { id: "sleep", label: "Sleep", layers: "Rain · Ocean · Purr" },
  { id: "storm", label: "Storm", layers: "Rain · Thunder · Fall" },
  { id: "forest", label: "Forest", layers: "Birds · Stream · Wind" }
] as const;

export const zenLayers = [
  { id: "rain", label: "Rain", level: 62 },
  { id: "coffee", label: "Café", level: 28 },
  { id: "fan", label: "Fan", level: 40 },
  { id: "forest", label: "Forest", level: 18 },
  { id: "ocean", label: "Ocean", level: 0 },
  { id: "fire", label: "Fire", level: 0 }
] as const;
