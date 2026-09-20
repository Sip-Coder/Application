export const profile = {
  name: "Jonathan Yu",
  role: "builder-educator for beverage + AI product",
  github: "https://github.com/Sip-Coder",
  sipstudies: "https://sipstudies.com",
  sipopedia: "https://sipopedia.com",
  positioning: "builder-educator for beverage + AI product.",
  summary:
    "I design and ship learning tools that help people taste, teach, and connect — Sipopedia, Sip Studies, and focused apps like Coffee Index and Zen Noise."
};

export const caseStudies = [
  {
    id: "sipopedia",
    eyebrow: "01",
    title: "Sipopedia.com",
    summary:
      "Learn / Taste / Connect beverage education SPA (Vite/React/TS). Live product for studying, exploring flavor, and community.",
    href: "https://sipopedia.com",
    hrefLabel: "sipopedia.com"
  },
  {
    id: "coffee-index",
    eyebrow: "02",
    title: "Coffee Index",
    summary: "Vite coffee tasting/index app from the Sip Studies build lane.",
    href: "https://github.com/Sip-Coder/Coffee-Index",
    hrefLabel: "github.com/Sip-Coder/Coffee-Index"
  },
  {
    id: "zen-noise",
    eyebrow: "03",
    title: "Zen Noise",
    summary:
      "Ambient focus app with Web Audio layers, curated mixes, and shareable links.",
    href: "https://github.com/Sip-Coder/Zen-Noise",
    hrefLabel: "github.com/Sip-Coder/Zen-Noise"
  }
] as const;

export const selectedWork = [
  {
    title: "Rose Quartz",
    href: "https://github.com/Sip-Coder/Rose-Quartz",
    note: "github.com/Sip-Coder/Rose-Quartz"
  },
  {
    title: "Biz Bookkeeper",
    href: "https://github.com/Sip-Coder/Biz-Bookkeeper",
    note: "github.com/Sip-Coder/Biz-Bookkeeper"
  },
  {
    title: "sunset-in-monaco-rpg",
    href: "https://github.com/Sip-Coder/sunset-in-monaco-rpg",
    note: "github.com/Sip-Coder/sunset-in-monaco-rpg"
  },
  {
    title: "jonathan-yu-application-demo",
    href: "https://github.com/Sip-Coder/jonathan-yu-application-demo",
    note: "Layout reference only"
  }
] as const;

export const contacts = [
  {
    label: "GitHub",
    value: "github.com/Sip-Coder",
    href: "https://github.com/Sip-Coder"
  },
  {
    label: "Sipopedia",
    value: "sipopedia.com",
    href: "https://sipopedia.com"
  },
  {
    label: "Sip Studies",
    value: "sipstudies.com",
    href: "https://sipstudies.com"
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

export const zenLayers = ["rain", "coffee", "fan", "forest", "ocean", "fire"] as const;

export const zenMixLevels: Record<(typeof zenMixes)[number]["id"], Record<(typeof zenLayers)[number], number>> = {
  focus: { rain: 0, coffee: 28, fan: 40, forest: 8, ocean: 0, fire: 0 },
  sleep: { rain: 70, coffee: 0, fan: 0, forest: 0, ocean: 52, fire: 0 },
  storm: { rain: 78, coffee: 0, fan: 16, forest: 0, ocean: 22, fire: 0 },
  forest: { rain: 12, coffee: 0, fan: 0, forest: 72, ocean: 0, fire: 24 }
};

export const workAccents = ["#9fdaf5", "#edd4a8", "#d8e6da", "#817985"] as const;
