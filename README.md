# Yu-Hsiang Lin — Embedded Systems Portfolio

Professional single-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Tech Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS v4** + shadcn/ui components
- **Framer Motion** for scroll & entrance animations
- **next-themes** dark/light toggle (default: dark, slate + teal accent)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # layout, page, globals.css
├── components/
│   ├── ui/           # shadcn-style primitives
│   ├── sections/     # Hero, About, Experience, Skills, Projects, Education, Contact
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── theme-*.tsx
└── lib/
    ├── constants.ts  # All portfolio content & links
    └── utils.ts
```

## Customize Content

Edit `src/lib/constants.ts` for copy, experience, projects, and social links.

- Replace `CONTACT.formspreeEndpoint` with your Formspree form ID
- Add CV PDF to `public/yu_hsiang_lin_cv.pdf`
- Replace placeholder images in `public/` or update `PROJECTS` image paths

## Deploy to Vercel

```bash
npm run build
```

Push to GitHub and import the repo in [Vercel](https://vercel.com). No extra config required.

## Sections

1. Navbar — fixed, smooth scroll, theme toggle
2. Hero — name, title, CV & contact CTAs
3. About — story + stats
4. Experience — timeline
5. Skills — categorized grid
6. Projects — image gallery (left) + description (right)
7. Education — NCKU Master's
8. Contact — Formspree + mailto + social links
