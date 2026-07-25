<div align="center">

# SoftAcademy

**A Georgian-language cybersecurity academy — public marketing site plus a complete admin panel.**

Front-end demo: no backend, no database, no network calls. Every screen runs on typed mock data,
so you can clone it and click through the entire product in under a minute.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
![Mode](https://img.shields.io/badge/mode-demo%20(mock%20data)-F59E0B)

</div>

![SoftAcademy home page](docs/screenshots/home-hero.png)

---

## Contents

- [About](#about) · [Screenshots](#screenshots) · [Features](#features) · [Routes](#routes)
- [Tech stack](#tech-stack) · [Getting started](#getting-started) · [Project structure](#project-structure)
- [How demo mode works](#how-demo-mode-works) · [Known gaps](#known-gaps) · [Wiring up a real backend](#wiring-up-a-real-backend)

---

## About

SoftAcademy sells one thing well: a live, instructor-led cybersecurity course delivered over Google
Meet. The repository contains two products sharing one design system:

- **A public site** that sells the course — hero, a six-module curriculum breakdown, a blog, and a
  contact form.
- **An admin panel** that runs the business — courses, categories, articles, orders, promocodes,
  students, reviews, and an email/SMS broadcast tool.

The entire UI is in Georgian (`ka`), prices are in lari (₾), and dates are formatted with the
`date-fns` Georgian locale. Everything is client-rendered against `src/lib/mockData.ts`, which makes
this useful as a design reference, a stakeholder demo, or the front-end half of a real build.

---

## Screenshots

### Public site

The landing page opens on a dark hero with the featured course, then moves into the curriculum —
six modules rendered as a bento grid with per-module topic chips.

| Home — hero | Curriculum — "what you'll learn" |
| :---: | :---: |
| <img src="docs/screenshots/home-hero.png" alt="Hero section with featured course card" width="100%"> | <img src="docs/screenshots/home-curriculum.png" alt="Six-module curriculum grid" width="100%"> |

<details>
<summary><b>More of the home page</b> — value props and closing CTA</summary>

<br>

| Why us | Closing CTA |
| :---: | :---: |
| <img src="docs/screenshots/home-features.png" alt="Feature list beside a statistics grid" width="100%"> | <img src="docs/screenshots/home-cta.png" alt="Blue call-to-action band with guarantees" width="100%"> |

</details>

#### Blog

A featured-post banner, a card grid, a newsletter capture, and full article pages with author,
read time, view count, and tags.

| Article index | Article page |
| :---: | :---: |
| <img src="docs/screenshots/blog.png" alt="Blog index with featured post and card grid" width="100%"> | <img src="docs/screenshots/blog-post.png" alt="Full blog article page" width="100%"> |

#### Contact and authentication

| Contact | Sign in |
| :---: | :---: |
| <img src="docs/screenshots/contact.png" alt="Contact page with form and contact details" width="100%"> | <img src="docs/screenshots/login.png" alt="Split-screen login page" width="100%"> |

<details>
<summary><b>Registration page</b></summary>

<br>

<img src="docs/screenshots/register.png" alt="Registration page" width="100%">

</details>

### Admin panel

A dark grouped sidebar, a sticky search bar, four gradient KPI cards, a recent-orders table, and
quick actions.

![Admin dashboard](docs/screenshots/admin-dashboard.png)

| Courses — publish toggles, per-course stats | Orders — filter and inline status changes |
| :---: | :---: |
| <img src="docs/screenshots/admin-courses.png" alt="Course management table" width="100%"> | <img src="docs/screenshots/admin-orders.png" alt="Orders table with status dropdowns" width="100%"> |
| **Blog — search, filter, publish, feature** | **Reviews — approve or delete pending ratings** |
| <img src="docs/screenshots/admin-blog.png" alt="Blog post management" width="100%"> | <img src="docs/screenshots/admin-reviews.png" alt="Review moderation queue" width="100%"> |
| **Promocodes — percentage or fixed discounts** | **Messages — email/SMS broadcast to buyers** |
| <img src="docs/screenshots/admin-promocodes.png" alt="Promocode list with active toggles" width="100%"> | <img src="docs/screenshots/admin-messages.png" alt="Broadcast composer with recipient picker" width="100%"> |

<details>
<summary><b>Remaining admin screens</b> — categories, students, settings, and the modal pattern</summary>

<br>

| Categories | Students |
| :---: | :---: |
| <img src="docs/screenshots/admin-categories.png" alt="Category list" width="100%"> | <img src="docs/screenshots/admin-users.png" alt="Registered users table" width="100%"> |
| **Settings — Twilio and SMTP credentials** | **Create promocode modal** |
| <img src="docs/screenshots/admin-settings.png" alt="Integration settings form" width="100%"> | <img src="docs/screenshots/admin-promocode-modal.png" alt="New promocode modal" width="100%"> |

</details>

### Responsive

Every page is mobile-first, with a slide-down navigation drawer replacing the desktop header.

<div align="center">
  <img src="docs/screenshots/mobile-home.png" alt="Home page on mobile" width="290">
  &nbsp;&nbsp;&nbsp;
  <img src="docs/screenshots/mobile-blog.png" alt="Blog index on mobile" width="290">
</div>

---

## Features

### Public site

- **Landing page** — animated hero with the featured course pulled from mock data, a six-module
  curriculum bento grid, a value-proposition section, and a closing CTA band.
- **Blog** — featured post banner, responsive card grid, category badges, read time and view counts,
  plus full article pages with tags and author attribution.
- **Contact** — validated form with a simulated send and a toast confirmation, alongside address,
  phone, email, and office hours.
- **Authentication screens** — split-screen login and registration with a visible "demo mode" notice.
- **Header** — sticky, shadows on scroll, with an avatar dropdown that exposes the admin panel when
  the signed-in user has the `ADMIN` role.

### Admin panel

| Screen | What it does |
| --- | --- |
| **Dashboard** | Four KPI cards (students, courses, orders, revenue), recent-order table, quick actions, and a pending-review alert. |
| **Courses** | Table of courses with price, category, enrollment and review counts; publish toggle and delete. |
| **Categories** | Create and edit through a modal, with delete. |
| **Blog** | Full-text search over title and author, category filter, publish and feature toggles, delete behind a confirmation dialog. |
| **Orders** | Filter by status, change status inline, see the promocode applied and the discount taken off the original price. |
| **Promocodes** | Create percentage or fixed-amount codes with usage caps, minimum spend, and expiry; activate or deactivate; delete. |
| **Students** | Read-only roster with contact details, role badges, order counts, and signup dates. |
| **Reviews** | Moderation queue defaulting to pending, with approve and delete. |
| **Messages** | Select course buyers, switch between email and SMS, compose, and send — recipients are filtered to those who actually have an address or phone number. |
| **Settings** | Twilio and SMTP credential fields plus site metadata, saved with a toast. |

### Shared UI kit

Ten composable primitives in `src/components/ui/`, all typed and variant-driven: `Button`, `Input`,
`Textarea`, `Select`, `Card`, `Badge`, `Avatar`, `Modal` (with a `ConfirmDialog`), `Spinner`, and a
`Toast` provider. Class conflicts are resolved with `clsx` + `tailwind-merge` through a `cn()` helper.

---

## Routes

| Route | Screen | Rendering |
| --- | --- | --- |
| `/` | Home — მთავარი | Static |
| `/blog` | Article index — ბლოგი | Static |
| `/blog/[slug]` | Article page | Dynamic |
| `/contact` | Contact — კონტაქტი | Static |
| `/login` · `/register` | Sign in · Sign up | Static |
| `/admin` | Dashboard — დეშბორდი | Static |
| `/admin/courses` · `/admin/categories` · `/admin/blog` | Content — კონტენტი | Static |
| `/admin/orders` · `/admin/promocodes` | Sales — გაყიდვები | Static |
| `/admin/users` · `/admin/reviews` · `/admin/messages` | People — მომხმარებლები | Static |
| `/admin/settings` | Settings — პარამეტრები | Static |

`/blog/[slug]` is the only server-rendered route; adding `generateStaticParams` would make the
whole app statically exportable.

---

## Tech stack

| | |
| --- | --- |
| **Framework** | Next.js 14.2 (App Router, route groups, server and client components) |
| **Language** | TypeScript 5 in `strict` mode, path alias `@/*` → `src/*` |
| **Styling** | Tailwind CSS 3.4 with a custom `primary` palette, glow shadows, and eight named animations |
| **Icons** | `lucide-react` |
| **Dates** | `date-fns` with the Georgian (`ka`) locale |
| **Fonts** | Noto Sans Georgian + Inter via `next/font/google`; a local `Corpta` face for display type |
| **Utilities** | `clsx` + `tailwind-merge` |

No state library, no data-fetching library, no test framework — the demo does not need them.

---

## Getting started

**Requirements:** Node.js 18.17 or newer.

```bash
git clone https://github.com/stariik/softacademy-demo.git
cd softacademy-demo
npm install
npm run dev
```

Open **http://localhost:3000** for the public site, or **http://localhost:3000/admin** for the admin
panel. You are signed in as an administrator automatically — see [How demo mode works](#how-demo-mode-works).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint via `next lint` |

The first run downloads Google Fonts at build time, so it needs network access.

---

## Project structure

```
src/
├── app/
│   ├── (public)/              # Marketing site — shares Header + Footer
│   │   ├── page.tsx           # Home
│   │   ├── blog/
│   │   │   ├── page.tsx       # Article index
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── layout.tsx
│   ├── admin/                 # Admin panel — sidebar + sticky top bar
│   │   ├── page.tsx           # Dashboard
│   │   ├── courses/  categories/  blog/
│   │   ├── orders/   promocodes/
│   │   ├── users/    reviews/     messages/
│   │   ├── settings/
│   │   └── layout.tsx
│   ├── globals.css            # Tailwind layers + reusable component classes
│   └── layout.tsx             # Fonts, AuthProvider, ToastProvider
├── components/
│   ├── ui/                    # Button, Input, Select, Textarea, Card, Badge,
│   │                          # Avatar, Modal, Spinner, Toast
│   ├── layout/                # Header, Footer, Logo, AdminSidebar
│   ├── auth/                  # LoginForm, RegisterForm
│   └── reviews/StarRating.tsx
├── context/AuthContext.tsx    # Stubbed auth — always signed in as admin
└── lib/
    ├── mockData.ts            # Every demo record + getDemoStats()
    └── utils.ts               # cn(), formatPrice(), formatDate(), slug helpers
```

---

## How demo mode works

Three deliberate shortcuts make the app runnable with nothing behind it.

**Authentication is stubbed.** `src/context/AuthContext.tsx` loads a hardcoded `ADMIN` user on
mount, so `/admin` is open to anyone and the header always shows a signed-in state. `login()` accepts
any credentials and redirects to the dashboard; `logout()` clears local state only.

**All data is a TypeScript module.** `src/lib/mockData.ts` exports nine interfaces and the records
behind every screen:

| | | | |
| --- | --- | --- | --- |
| 4 categories | 3 courses | 8 students | 12 orders |
| 4 promocodes | 8 reviews | 5 articles (4 published) | ₾2,755 revenue |

`getDemoStats()` derives the dashboard numbers from those records rather than hardcoding them, so
editing an order updates the KPI cards.

**Mutations live in React state.** Creating a promocode, approving a review, or deleting a course
updates `useState` and fires a toast. Nothing is persisted — a page refresh restores the original
data. Sends on the contact and broadcast forms are `setTimeout` calls, not requests.

---

## Known gaps

These are linked in the UI but have no route yet, so they return 404:

| Link | Linked from |
| --- | --- |
| `/courses/[slug]` | Every "enroll" CTA on the home page |
| `/profile` · `/purchases` · `/wishlist` | Header avatar dropdown |
| `/admin/courses/new` | Dashboard quick action, Courses page |
| `/admin/blog/new` | Dashboard quick action, Blog page |

Also worth knowing: course and article cover images are decorative placeholders rather than real
uploads, `next.config.mjs` disables image optimization, and `mockSettings` in `mockData.ts` is
exported but unused — the settings page keeps its own local state.

---

## Wiring up a real backend

The demo is structured so the seams are obvious:

1. **Replace the auth stub.** `AuthContext` already exposes `login`, `logout`, and `refresh` with the
   right signatures — point them at real endpoints and gate `/admin` in `src/app/admin/layout.tsx`.
2. **Swap the data source.** The interfaces in `mockData.ts` map cleanly onto database tables, so
   each `import { mockX }` becomes a fetch or a server-component query.
3. **Fill in the integrations.** The settings page already names what the product expects: Twilio for
   SMS and SMTP for email.

---

<div align="center">
<sub>Screenshots captured from the running application with Playwright (Chromium).</sub>
</div>
