# Jonathan Yu — Application Portfolio

Personal resume / portfolio one-pager for **Jonathan Yu**, a builder-educator behind [Sip Studies](https://sipstudies.com) and [Sipopedia](https://sipopedia.com).

**Live site:** https://sip-coder.github.io/Application/

This is a Vite + React + TypeScript single-page site. Vite `base` is set to `/Application/` so asset URLs resolve on the project GitHub Pages URL.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints, typically [http://127.0.0.1:5173](http://127.0.0.1:5173).

## Build

```bash
npm run build
npm run preview
```

`npm run build` typechecks and writes a static site to `dist/`. `npm run preview` serves that folder locally.

## GitHub Pages

Pushes to `main` run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). The workflow builds the site, uploads `dist` with `actions/upload-pages-artifact`, and publishes it with `actions/deploy-pages`.

In the repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** if it is not already selected.

## What’s on the page

1. **Hero** — Jonathan Yu, builder-educator for beverage + AI product.
2. **Case studies** — Sipopedia.com, Coffee Index, and Zen Noise, each with a live interactive iframe (browser chrome, click/scroll, no blocking overlay).
3. **Selected work** — Rose Quartz, Biz Bookkeeper, sunset-in-monaco-rpg, plus the earlier application demo as a layout reference only.
4. **Contact** — [GitHub](https://github.com/Sip-Coder), [sipopedia.com](https://sipopedia.com), [sipstudies.com](https://sipstudies.com).

Public project copy is drawn from live Sipopedia / Sip Studies pages and public Sip-Coder repositories. Those other repos are not modified from this site.

## Case study embeds

The case studies load real sites inside `SiteFrame` iframes — not screenshots or React mock UIs. Chrome URL labels and rust copy links match Daisy’s Figma handoff.

| Case study | Chrome / copy URL | iframe `src` | Notes |
| --- | --- | --- | --- |
| **Sipopedia** | `https://sipopedia.com/#app/starter` | `https://sipopedia.com/#app/starter` | Live product. |
| **Coffee Index** | `/embeds/coffee-index/` | `/Application/embeds/coffee-index/index.html` | Same-origin embed. There is no public Replit host, so the built Vite app from [Sip-Coder/Coffee-Index](https://github.com/Sip-Coder/Coffee-Index) is vendored under `public/embeds/coffee-index/` with asset base `/Application/embeds/coffee-index/`. |
| **Zen Noise** | `https://zen-noise.replit.app/` | `https://zen-noise.replit.app/` | Live Replit host (confirmed HTTP 200). |

Frames are 320×200 with dark browser chrome. Users can click, scroll, and interact inside each iframe (no blocking overlay). If a remote host sends `X-Frame-Options` or a restricting `frame-ancestors` policy, the iframe is tried first, then a fallback with **Open live site** is shown.

Refresh the Coffee Index snapshot after upstream changes:

```bash
npm run vendor:coffee-index
```
