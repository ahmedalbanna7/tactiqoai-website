# TactiqoAI Website

Production-ready corporate website for TactiqoAI, an AI engineering company that builds complete intelligent systems. The site is a static Next.js application with a reusable 3D intelligence core, agent orchestration visuals, progressive enhancement, accessible motion, and no backend dependency.

## Technology

- Next.js App Router, React, and strict TypeScript
- Tailwind CSS plus a project-level visual system
- Three.js, React Three Fiber, and Drei for the intelligence core
- GSAP ScrollTrigger, Framer Motion, and Lenis for interaction
- Lucide React icons
- Vitest and React Testing Library

## Local development

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

The static production output is generated in `out/`.

## Vercel deployment

### Connect the GitHub repository

1. Create a GitHub repository and push this project.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Vercel detects Next.js automatically.
5. Keep the default build command: `npm run build`.
6. Keep the install command: `npm install`.
7. No output override is required. Vercel recognizes the static Next.js export.
8. Deploy the project.

The first version requires no environment variables. If a contact service is connected later, add its configuration in Vercel Project Settings and keep local values in a non-committed `.env.local`.

### Preview and production deployments

Every branch and pull request can produce a Preview Deployment. Merging the selected production branch creates the Production Deployment. Review layout, links, form behavior, and WebGL fallback in the preview before promoting changes.

### Custom domain: TactiqoAI.com

1. In Vercel, open the project and choose **Settings → Domains**.
2. Add `TactiqoAI.com` and `www.TactiqoAI.com`.
3. Follow the DNS values shown by Vercel. Common configurations use an apex A record and a `www` CNAME, but use the exact values Vercel provides.
4. Choose the preferred canonical domain and redirect the other hostname to it.
5. Wait for DNS propagation and confirm that Vercel reports a valid certificate.

## Project structure

```text
src/
  app/             metadata, page, sitemap, robots, global visual system
  components/
    layout/        navigation, experience shell, footer
    sections/      every marketing section
    three/         WebGL intelligence core and fallbacks
    ui/            brand, buttons, headings, reveal primitives
  data/            site configuration and content collections
  hooks/           reduced-motion preference
  test/            component and interaction tests
public/            social preview and static assets
```

## 3D architecture and performance

The hero imports the Three.js scene only in the browser. Geometry and materials are intentionally lightweight, pixel density is capped, and the particle count is limited. Text and navigation never depend on WebGL. An error boundary and a CSS fallback preserve the visual story if a device cannot initialize the scene.

For low-powered deployments, reduce `Sparkles` count and canvas `dpr` in `src/components/three/IntelligenceCore.tsx`. To disable the main 3D effect completely, replace the dynamic `IntelligenceCore` import in `HeroSection.tsx` with the existing CSS fallback.

Mobile layouts simplify depth, remove expensive hover assumptions, stack dense sections, and reduce visible 3D area. `prefers-reduced-motion` disables smooth scrolling, animated reveals, looping effects, and scene motion.

## Content and configuration

Central brand, domain, navigation, contact, product route, and social placeholders live in `src/data/site-config.ts`. Solution, agent, process, application, and trust content lives in `src/data/content.ts`.

To update a product, edit `ProductsSection.tsx` and its route in `site-config.ts`. To update applications, edit the `applications` collection in `content.ts`; the searchable grid updates automatically.

The contact form validates in the browser and then opens the visitor's email application. It does not claim a server submission. To add a contact API later, set `contactEndpoint` in `site-config.ts`, add a secure external form service or API route, and replace the mailto handoff only after the endpoint is available.

## Accessibility

The site uses semantic landmarks, keyboard-accessible controls, visible focus states, descriptive labels, high contrast, reduced-motion support, touch-friendly navigation, and non-essential decorative canvases hidden from assistive technology.

## Browser support

Current stable versions of Chrome, Edge, Firefox, and Safari are supported. The content remains usable without WebGL and with motion disabled.
