# Vision Bikes – Static Site

This repository now contains a simplified, optimized static website (HTML/CSS/JS only). No external images or fonts are used. All UI is built with CSS, gradients, and inline SVGs.

## Structure

- `index.html` – Main page
- `styles.css` – Global styles
- `script.js` – Small enhancements (mobile nav, smooth scroll, header shadow)
- `netlify.toml` – Publishes from repo root with no build step
- `_headers` – Security and caching headers

Optionally add your images to an `images/` folder and reference them from `index.html`.

## Deploying to Netlify

No build is needed. Netlify picks up `netlify.toml`:

- Build command: (empty)
- Publish directory: `.`

Just connect the repo and deploy.