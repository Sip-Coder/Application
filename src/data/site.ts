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

const coffeeIndexEmbed = `${import.meta.env.BASE_URL}embeds/coffee-index/index.html`;

export const caseStudies = [
  {
    id: "sipopedia",
    eyebrow: "01",
    title: "Sipopedia.com",
    summary:
      "Learn / Taste / Connect beverage education SPA (Vite/React/TS). Live product for studying, exploring flavor, and community.",
    href: "https://sipopedia.com/#app/starter",
    hrefLabel: "https://sipopedia.com/#app/starter",
    previewSrc: "https://sipopedia.com/#app/starter",
    previewLabel: "https://sipopedia.com/#app/starter"
  },
  {
    id: "coffee-index",
    eyebrow: "02",
    title: "Coffee Index",
    summary: "Vite coffee tasting/index app from the Sip Studies build lane.",
    href: coffeeIndexEmbed,
    hrefLabel: "/embeds/coffee-index/",
    previewSrc: coffeeIndexEmbed,
    previewLabel: "/embeds/coffee-index/"
  },
  {
    id: "zen-noise",
    eyebrow: "03",
    title: "Zen Noise",
    summary:
      "Ambient focus app with Web Audio layers, curated mixes, and shareable links.",
    href: "https://zen-noise.replit.app/",
    hrefLabel: "https://zen-noise.replit.app/",
    previewSrc: "https://zen-noise.replit.app/",
    previewLabel: "https://zen-noise.replit.app/"
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

export const workAccents = ["#9fdaf5", "#edd4a8", "#d8e6da", "#817985"] as const;
