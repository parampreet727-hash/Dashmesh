# Dashmesh Industry - Fixed React Project

This project is fixed for local development/building. No Vercel deployment configuration was added.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Main fixes
- Added the missing Tailwind CSS v4 dependencies and Vite plugin.
- Added `vite.config.js` for Tailwind CSS v4.
- Fixed the malformed `bg-linear-to-brrom...` Tailwind class.
- Fixed internal About-page links to use React Router.
- Added accessible labels to slider controls.
- Added a fallback 404 route.
- Removed the stale lockfile so `npm install` can create a correct lockfile for the updated dependencies.

No Vercel deployment was performed.
