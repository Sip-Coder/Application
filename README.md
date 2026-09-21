# Jonathan Yu — Application Portfolio

Personal resume / portfolio one-pager for **Jonathan Yu**, a builder-educator behind [Sip Studies](https://sipstudies.com) and [Sipopedia](https://sipopedia.com).

**Live site:** https://sip-coder.github.io/Application/

This is a Vite + React + TypeScript single-page site. Vite `base` is set to `/Application/` so asset URLs resolve on the project GitHub Pages URL.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints, typically [http://127.0.0.1:5173](http://127.0.0.1:5173). Dev and preview still use `base: /Application/`, so open paths under `/Application/`.

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

1. **Hero** — Jonathan Yu, builder-educator for beverage + AI product, with View resume / Download PDF.
2. **Case studies** — Sipopedia.com, Coffee Index, and Zen Noise, each with a live interactive iframe (browser chrome, click/scroll, no blocking overlay). Frames are 420×320.
3. **Selected work** — Rose Quartz, Biz Bookkeeper, and sunset-in-monaco-rpg as stacked same-origin interactive embeds (480×300), plus the earlier application demo as a layout reference only.
4. **Resume** — in-page PDF viewer and download for the combined V4 resume.
5. **Contact** — [GitHub](https://github.com/Sip-Coder), [sipopedia.com](https://sipopedia.com), [sipstudies.com](https://sipstudies.com).

Public project copy is drawn from live Sipopedia / Sip Studies pages and public Sip-Coder repositories. Those other repos are not modified from this site.

## Case study embeds

The case studies load real sites inside `SiteFrame` iframes — not screenshots or React mock UIs. Chrome URL labels and rust copy links match Daisy’s Figma handoff.

| Case study | Chrome / copy URL | iframe `src` | Notes |
| --- | --- | --- | --- |
| **Sipopedia** | `https://sipopedia.com/#app/starter` | `https://sipopedia.com/#app/starter` | Live product. |
| **Coffee Index** | `/embeds/coffee-index/` | `/Application/embeds/coffee-index/` | Same-origin embed. There is no public Replit host, so the built Vite app from [Sip-Coder/Coffee-Index](https://github.com/Sip-Coder/Coffee-Index) is vendored under `public/embeds/coffee-index/` with asset base `/Application/embeds/coffee-index/`. `embed-overflow-patch.css` clips wide hero type so the iframe does not scroll sideways. |
| **Zen Noise** | `https://zen-noise.replit.app/` | `https://zen-noise.replit.app/` | Live Replit host (confirmed HTTP 200). |

Case-study frames are 420×320 with dark browser chrome (Daisy’s taller live-embed size). Users can click, scroll, and interact inside each iframe (no blocking overlay). If a remote host sends `X-Frame-Options` or a restricting `frame-ancestors` policy, the iframe is tried first, then a fallback with **Open live site** is shown.

Refresh the Coffee Index snapshot after upstream changes:

```bash
npm run vendor:coffee-index
```

## Selected work embeds

Selected Work uses the same `SiteFrame` live-iframe pattern as the case studies. The three featured projects are vendored under `public/embeds/` with Vite/`href` bases under `/Application/embeds/…` so they work on GitHub Pages.

| Project | Chrome URL | iframe `src` | Notes |
| --- | --- | --- | --- |
| **Rose Quartz** | `/embeds/rose-quartz/` | `/Application/embeds/rose-quartz/` | Production Vite multi-page build of [Sip-Coder/Rose-Quartz](https://github.com/Sip-Coder/Rose-Quartz). Vendor script rebases `data-panorama-src` so the 360 room preview requests `/Application/embeds/rose-quartz/panoramas/…` instead of `/panoramas/…`. |
| **Biz Bookkeeper** | `/embeds/biz-bookkeeper/` | `/Application/embeds/biz-bookkeeper/` | `artifacts/mockup-sandbox` has no mockup components. This vendors the **LedgerAI** Vite app from `artifacts/ledger` — dashboard, transactions, accounts, and the rest of the nav. The Replit API + PostgreSQL backend is **not** bundled, so live writes/account data are unavailable; pages still render with the app’s fallback figures and remain clickable. Iframe `src` uses a trailing-slash directory URL so wouter matches `/` (not `/index.html`). |
| **sunset-in-monaco-rpg** | `/embeds/sunset-in-monaco-rpg/` | `/Application/embeds/sunset-in-monaco-rpg/` | Plain HTML/JS/CSS game copied as-is; playable in the iframe. |

Selected-work frames are 480×300 in stacked rows (same site-within-a-site pattern as case studies). Title links still go to the public GitHub repos; rust links open the same-origin embed. Those iframes use `loading="lazy"` so Rose Quartz / LedgerAI / the RPG do not fetch until near the viewport.

Refresh those snapshots after upstream changes:

```bash
npm run vendor:rose-quartz
npm run vendor:biz-bookkeeper
npm run vendor:sunset-rpg
```

## Resume

Jonathan’s combined resume is copied into this repo (no runtime dependency on the demo site):

`public/resume/JONATHAN_YU_SIP_STUDIES_COMBINED_RESUME_V4_CRITICAL_ON_HAND_2026-06-02.pdf`

Source: [jonathan-yu-application-demo](https://github.com/Sip-Coder/jonathan-yu-application-demo/blob/main/public/documents/resume/JONATHAN_YU_SIP_STUDIES_COMBINED_RESUME_V4_CRITICAL_ON_HAND_2026-06-02.pdf). The letter-size sibling in that folder is the same PDF bytes, so only one file is vendored.

The Resume section (and the hero CTAs) provide:

- An in-page PDF iframe so recruiters can read it on the site
- Download PDF / Open PDF links
