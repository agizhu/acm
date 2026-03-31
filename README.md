# ACM — ACME Cognitive Mind

> Engineering the architecture of autonomous intelligence.

A sci-fi themed static website for **ACME Cognitive Mind (ACM)** — a cognitive intelligence infrastructure platform.

## Structure

```
public/
├── index.html                  # Main landing page
├── favicon.svg                 # SVG favicon
├── privacy.html                # Privacy Policy
├── terms.html                  # Terms of Service
├── security.html               # Security Program
├── css/
│   ├── main.css                # Core styles
│   ├── animations.css          # Animation effects
│   └── legal.css               # Legal & research page styles
├── js/
│   └── main.js                 # Neural canvas + interactions
└── research/
    ├── causal-world-models.html
    ├── constitutional-alignment.html
    └── emergent-cooperation.html
netlify.toml                    # Netlify deploy config
```

## Deploy to Netlify

### Option 1 — Drag & Drop
1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag the `public/` folder onto the deploy area

### Option 2 — CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=public
```

### Option 3 — Connect GitHub
Link this repo in Netlify dashboard. Set **publish directory** to `public`.

## Contact

z@openingo.org
