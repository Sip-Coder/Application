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
2. **Case studies** — Sipopedia.com, Coffee Index, and Zen Noise, with sites-within-a-site previews.
3. **Selected work** — Rose Quartz, Biz Bookkeeper, sunset-in-monaco-rpg, plus the earlier application demo as a layout reference only.
4. **Contact** — [GitHub](https://github.com/Sip-Coder), [sipopedia.com](https://sipopedia.com), [sipstudies.com](https://sipstudies.com).

Public project copy is drawn from live Sipopedia / Sip Studies pages and public Sip-Coder repositories. Those other repos are not modified from this site.
