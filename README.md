# Amit Kumar — Portfolio

A premium, fully responsive personal portfolio for a Java Backend Developer, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- Glassmorphism + animated gradient design system (`#2563EB` / `#06B6D4` / `#8B5CF6` / `#0F172A`)
- Typing animation hero, floating code snippets, particle + blob background
- Animated skill cards & progress bars, animated counters, tilt-on-hover project cards
- Sticky navbar with dark/light mode toggle
- **Recruiter-focused features:**
  - One-click **Download Resume (PDF)**
  - **Resume Preview** in a modal (embedded PDF viewer) before downloading
  - Floating **WhatsApp** button with a pre-filled hiring message
  - One-click **Email Me** button (`mailto:`) with a pre-set subject
  - **Schedule an Interview** CTA (wired for Calendly — just set your link)
  - **Sticky "Download CV"** button that appears once you scroll past the hero
  - GitHub stats & streak cards (via github-readme-stats, no API key needed)
  - FAQ section for common recruiter questions
- Contact form wired to **EmailJS** with a success/error state
- SEO: meta description/keywords, Open Graph + Twitter cards, JSON-LD `Person` schema, `robots.txt`, `sitemap.xml`
- Accessibility: visible focus states, `prefers-reduced-motion` respected, semantic markup, `aria-label`s
- Custom cursor (desktop only), scroll progress bar, back-to-top button, page-load screen

## 🧱 Tech Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · React Router · React Icons / Lucide Icons · EmailJS

## 📁 Project Structure

```
src/
  components/     # All UI sections & widgets (Hero, Skills, Projects, Contact, ...)
  hooks/          # useTypingEffect, useDarkMode, useScrollProgress, useCountUp
  constants/      # data.ts — single source of truth for all portfolio content
  pages/          # (reserved for React Router routes if you add more pages)
  utils/          # (reserved for shared helpers)
  animations/     # (reserved for shared Framer Motion variants)
  styles/         # (reserved for extra stylesheets)
  index.css       # Tailwind entry + design tokens (glass, gradient-text, btn-glow, ...)
public/
  resume.pdf      # ⚠️ Replace with your real resume
  projects/       # Project thumbnail SVGs — replace with real screenshots
  favicon.svg, robots.txt, sitemap.xml
```

## 🚀 Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
```

### Build for production

```bash
npm run build       # outputs to /dist
npm run preview     # preview the production build locally
```

## ⚙️ Configuration

1. **Resume** — `public/resume.pdf` now ships as a complete, real sample resume (summary, skills, experience, projects, certifications, education) generated from the same content in `constants/data.ts`. Replace it with your own PDF when ready (keep the filename, or update `resumeUrl`).
2. **Content** — edit `src/constants/data.ts` to update your name, bio, skills, experience, projects, certifications, and achievements. Everything on the site is driven from this one file.
3. **EmailJS** (contact form) — copy `.env.example` to `.env` and fill in:
   ```
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   ```
   Get these from [emailjs.com](https://www.emailjs.com/) after creating a service + template with `name`, `email`, `subject`, `message` fields.

   **No EmailJS keys yet?** The form still works — if the keys aren't set (or the EmailJS request fails for any reason), it automatically opens the visitor's email app with a pre-filled `mailto:` message to you instead of failing silently.
4. **Schedule an Interview (Calendly)** — set `VITE_CALENDLY_URL` in `.env` to your Calendly link.
5. **WhatsApp / Email / GitHub** — update the values at the top of `src/constants/data.ts` (`personalInfo`).
6. **Project images** — replace the SVG placeholders in `public/projects/` with real screenshots (same filenames, or update `image` paths in `data.ts`).

## 📦 Deployment

### Vercel
```bash
npm i -g vercel
vercel
```
Or connect the GitHub repo at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Vite. Add your `.env` variables under Project Settings → Environment Variables.

### Netlify
```bash
npm run build
```
Drag-and-drop the `dist/` folder at [app.netlify.com/drop](https://app.netlify.com/drop), or connect your repo with:
- Build command: `npm run build`
- Publish directory: `dist`

Add environment variables under Site Settings → Environment Variables.

### GitHub Pages
1. `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://<username>.github.io/<repo>",
   "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d dist" }
   ```
3. Set `base: '/<repo>/'` in `vite.config.ts`.
4. `npm run deploy`

> Note: GitHub Pages doesn't support environment variables at build time via the UI — bake your EmailJS/Calendly values into a `.env.production` file before building instead (don't commit real secrets to a public repo; EmailJS public keys are safe to expose by design).

## ♿ Accessibility & Performance notes

- Respects `prefers-reduced-motion` — all animations are disabled for users who request it.
- Custom cursor only activates on fine-pointer (mouse) devices — untouched on mobile/touch.
- Images use `loading="lazy"`; JS is code-split into `vendor` / `motion` / app chunks for faster first paint.
- Run `npm run build && npx vite preview` and audit with Lighthouse in Chrome DevTools to verify scores in your environment (results vary by network/host).

## 📝 License

Free to use and modify for your own portfolio.
