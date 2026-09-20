# Application

Jonathan Yu resume portfolio application site.

**Live site:** https://sip-coder.github.io/Application/

This is a Vite + React portfolio deployed with GitHub Pages. Vite `base` is set to `/Application/` so asset URLs resolve on the project Pages URL.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages

Pushes to `main` run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). The workflow builds the site, uploads `dist` with `actions/upload-pages-artifact`, and publishes it with `actions/deploy-pages`.

In the repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** if it is not already selected.
