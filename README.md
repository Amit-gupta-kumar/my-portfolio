# Amit Kumar Gupta — Portfolio

A neon, IDE-themed personal portfolio built with React + Vite. Plain CSS, no
component library — every section is its own component with its own
stylesheet, and all resume content lives in one data file so it's easy to
update without touching markup.

## Project structure

```
amit-portfolio/
├── index.html              # Vite entry HTML
├── package.json
├── vite.config.js
├── public/
│   └── profile.jpg          # your photo
└── src/
    ├── main.jsx              # React root
    ├── App.jsx               # assembles all sections
    ├── data/
    │   └── content.js        # ALL resume content (edit this to update text)
    ├── hooks/
    │   ├── useScrollReveal.js   # IntersectionObserver scroll-in animation
    │   └── useTypewriter.js     # typewriter effect for the hero role line
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Avatar.jsx
    │   ├── About.jsx
    │   ├── Experience.jsx
    │   ├── Projects.jsx
    │   ├── Skills.jsx
    │   ├── Education.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    └── styles/
        ├── variables.css     # color/font tokens
        ├── base.css          # reset + scroll-reveal animation classes
        ├── index.css         # imports every stylesheet, loaded once in main.jsx
        └── *.css             # one stylesheet per component, same name
```

## Run it locally

Requires Node.js 18+.

```bash
cd amit-portfolio
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`, which you can deploy to Vercel, Netlify,
GitHub Pages, or any static host.

## Editing content

Everything text-based — name, roles, experience, projects, skills,
education, contact info — lives in `src/data/content.js`. Change it there
and every component picks it up automatically.

## Animations

- **Scroll reveal**: each section and each grid/list uses the
  `useScrollReveal` hook, which adds an `in` class once the element enters
  the viewport. The actual fade/slide animation is defined once in
  `src/styles/base.css` (`.reveal` and `.reveal-stagger`), so it stays
  consistent everywhere.
- **Typewriter**: the hero's role line cycles through job titles using
  `useTypewriter`, also reusable for any future text.
- Both respect `prefers-reduced-motion`.
