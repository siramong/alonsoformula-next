# Architecture Diagram

## Current System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP Request
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      NEXT.JS APP ROUTER                         │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ Root Route (/)                                            │ │
│  │   └─> Redirects to /es                                   │ │
│  └───────────────────────────────────────────────────────────┘ │
│                              │                                  │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ Language Routes (/es, /ca, /gl)                          │ │
│  │                                                           │ │
│  │   ┌─────────────────────────────────────────────┐        │ │
│  │   │ Home Page                                   │        │ │
│  │   │   - Hero section                            │        │ │
│  │   │   - Features grid                           │        │ │
│  │   │   - CTA sections                            │        │ │
│  │   └─────────────────────────────────────────────┘        │ │
│  │                     │                                     │ │
│  │   ┌─────────────────────────────────────────────┐        │ │
│  │   │ Topics Routes (/[lang]/topics)              │        │ │
│  │   │                                              │        │ │
│  │   │   ┌──────────────────────────────────────┐  │        │ │
│  │   │   │ [slug] - Dynamic Topic Pages         │  │        │ │
│  │   │   │   - Reads content/[lang]/[slug].json │  │        │ │
│  │   │   │   - Server-side rendering            │  │        │ │
│  │   │   │   - Static generation at build time  │  │        │ │
│  │   │   └──────────────────────────────────────┘  │        │ │
│  │   │                                              │        │ │
│  │   │   ⚠️ MISSING: /topics index page            │        │ │
│  │   └─────────────────────────────────────────────┘        │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐   ┌──────────────────┐   ┌──────────────┐
│  COMPONENTS   │   │  LIB UTILITIES   │   │   CONTENT    │
│               │   │                  │   │              │
│ - Header      │   │ - types.ts       │   │ es/          │
│ - Card        │   │ - utils.ts       │   │   alcanos.   │
│ - Button      │   │                  │   │   json       │
│ - Exercise    │   │ Functions:       │   │              │
│ - Content     │   │ - getProgress()  │   │ ca/          │
│   Renderer    │   │ - saveProgress() │   │   (empty)    │
│               │   │ - addXP()        │   │              │
│ - ⚠️ DUPLICATE│   │ - translations   │   │ gl/          │
│   ProgressBar │   │                  │   │   (empty)    │
└───────────────┘   └──────────────────┘   └──────────────┘
        │                     │                     │
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  LOCAL STORAGE   │
                    │                  │
                    │ - User XP        │
                    │ - Progress       │
                    │ - Completed      │
                    │   Exercises      │
                    └──────────────────┘
```

---

## Content Flow

```
┌────────────────────────────────────────────────────────────┐
│                  CONTENT MANAGEMENT                        │
│                                                            │
│  ⚠️ NO SCRAPING SYSTEM EXISTS                             │
│                                                            │
│  Current: Manual JSON files                               │
│  Missing: Automated content sync from alonsoformula.com   │
└────────────────────────────────────────────────────────────┘
                              │
                              │
            ┌─────────────────┴─────────────────┐
            │                                   │
            ▼                                   ▼
  ┌──────────────────┐              ┌──────────────────┐
  │  SOURCE          │              │  DESTINATION     │
  │                  │              │                  │
  │  Original        │    ❌ NO     │  Next.js JSON    │
  │  Alonsoformula   │  CONNECTION  │  Files           │
  │  Website         │              │                  │
  │                  │              │  content/        │
  │  - 100+ topics   │              │    es/alcanos    │
  │  - Exercises     │              │                  │
  │  - Images        │              │  ⚠️ Only 1 topic │
  │  - 3 languages   │              │                  │
  └──────────────────┘              └──────────────────┘
```

---

## Data Flow: Topic Page

```
┌─────────────────────────────────────────────────────────────┐
│  1. USER REQUESTS: /es/topics/alcanos                       │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  2. NEXT.JS PAGE COMPONENT                                  │
│     app/[lang]/topics/[slug]/page.tsx                       │
│                                                             │
│     - Server Component (SSG)                                │
│     - Calls getTopicContent(slug, lang)                     │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  3. FILE SYSTEM READ                                        │
│     fs.readFileSync('content/es/alcanos.json')              │
│                                                             │
│     Returns: TopicContent object                            │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  4. PASS TO CLIENT COMPONENT                                │
│     <TopicPageClient topic={content} lang="es" />           │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  5. CLIENT-SIDE RENDERING                                   │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ TopicPageClient (Client Component)                   │  │
│  │                                                       │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │ ContentRenderer                                │  │  │
│  │  │   - Maps sections to React elements           │  │  │
│  │  │   - Headings, Text, Lists, Images             │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  │                                                       │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │ ExerciseCard (for each exercise)               │  │  │
│  │  │   - Renders question and options               │  │  │
│  │  │   - Handles answer submission                  │  │  │
│  │  │   - Tracks completion                          │  │  │
│  │  │   - Awards XP                                  │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  │                                                       │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │ ProgressBar                                    │  │  │
│  │  │   - Reads from localStorage                    │  │  │
│  │  │   - Shows total XP                             │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  6. USER INTERACTION                                        │
│                                                             │
│     - User selects answer                                   │
│     - Click "Submit" button                                 │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  7. STATE UPDATE                                            │
│                                                             │
│     - Check if correct                                      │
│     - Update component state                                │
│     - Save to localStorage:                                 │
│         * Add XP                                            │
│         * Mark exercise complete                            │
│         * Update topic progress                             │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│  8. VISUAL FEEDBACK                                         │
│                                                             │
│     - Show correct/incorrect state                          │
│     - Display explanation                                   │
│     - Animate progress bar                                  │
│     - Disable re-answering                                  │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

```
App
├── Layout (Root)
│   ├── Metadata
│   └── Body
│       └── [lang] Layout
│           ├── Header
│           │   ├── Logo (Link to home)
│           │   ├── Navigation (Topics link)
│           │   └── Language indicator
│           │
│           └── Page Content
│               │
│               ├── Home Page (/es)
│               │   ├── Hero Section
│               │   ├── Features Grid (Cards)
│               │   ├── Topics Preview
│               │   └── CTA Section
│               │
│               └── Topic Page (/es/topics/[slug])
│                   └── TopicPageClient
│                       ├── ProgressBar
│                       ├── ContentRenderer
│                       │   ├── Heading components (h2, h3, h4)
│                       │   ├── Text components (p)
│                       │   ├── List components (ul)
│                       │   └── Image components
│                       │
│                       └── ExerciseCard (for each exercise)
│                           ├── Question text
│                           ├── ExerciseOption (for each option)
│                           │   └── Radio input + label
│                           ├── PrimaryButton (Submit)
│                           └── Feedback section
│                               ├── Correct/Incorrect indicator
│                               └── Explanation text
```

---

## Missing Pieces

```
┌────────────────────────────────────────────────────────────┐
│                    CURRENT GAPS                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  1. NO SCRAPING SYSTEM                                    │
│     ❌ No connection to original website                  │
│     ❌ No content synchronization                         │
│     ❌ No automated content updates                       │
│                                                            │
│  2. MINIMAL CONTENT                                       │
│     ⚠️ Only 1 topic (alcanos)                            │
│     ⚠️ Need 50-100+ topics                               │
│     ⚠️ Empty CA and GL directories                       │
│                                                            │
│  3. MISSING PAGES                                         │
│     ❌ No /topics index (list all topics)                │
│     ❌ No search page                                     │
│     ❌ No about page                                      │
│     ❌ No 404 page                                        │
│                                                            │
│  4. NO BACKEND                                            │
│     ⚠️ localStorage only (client-side)                   │
│     ⚠️ No user accounts                                  │
│     ⚠️ No cross-device sync                              │
│     ⚠️ No analytics                                      │
│                                                            │
│  5. UI ISSUES                                             │
│     ❌ Invalid Tailwind classes (scale-102, scale-98)    │
│     ❌ Missing focus states                              │
│     ❌ Duplicate ProgressBar component                   │
│     ⚠️ Inconsistent typography                          │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Future Architecture (Recommended)

```
                        ┌─────────────────┐
                        │   USER BROWSER  │
                        └────────┬────────┘
                                 │
                    ┌────────────┼────────────┐
                    │                         │
                    ▼                         ▼
          ┌──────────────────┐    ┌──────────────────┐
          │  NEXT.JS PAGES   │    │  AUTHENTICATION  │
          │                  │    │  (Supabase/Auth) │
          │  - Server        │    │                  │
          │    Components    │    │  - Login         │
          │  - Client        │    │  - Register      │
          │    Components    │    │  - JWT tokens    │
          └────────┬─────────┘    └────────┬─────────┘
                   │                       │
                   │        ┌──────────────┘
                   │        │
                   ▼        ▼
          ┌──────────────────────────────┐
          │      API LAYER (Optional)    │
          │                              │
          │  - Next.js API routes        │
          │  - Server actions            │
          │  - tRPC/GraphQL              │
          └────────┬─────────────────────┘
                   │
        ┌──────────┼──────────┐
        │          │          │
        ▼          ▼          ▼
┌────────────┐  ┌──────────┐  ┌────────────┐
│  DATABASE  │  │  CONTENT │  │   SCRAPER  │
│            │  │    CMS   │  │            │
│ Supabase/  │  │          │  │ - Scheduled│
│ PostgreSQL │  │ Strapi/  │  │   jobs     │
│            │  │ Content- │  │ - Parse    │
│ - Users    │  │   ful    │  │   HTML     │
│ - Progress │  │          │  │ - Generate │
│ - XP       │  │ - Topics │  │   JSON     │
│ - Analytics│  │ - Images │  │ - Download │
│            │  │ - i18n   │  │   images   │
└────────────┘  └──────────┘  └────────────┘
```

---

## Technology Stack

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND                             │
├─────────────────────────────────────────────────────────┤
│  Next.js 16          │  React framework                 │
│  React 19            │  UI library                      │
│  TypeScript 5        │  Type safety                     │
│  Tailwind CSS 4      │  Styling                         │
│  Framer Motion       │  Animations (to add)             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    CONTENT                              │
├─────────────────────────────────────────────────────────┤
│  JSON files          │  Current approach                │
│  File system         │  Content storage                 │
│  Static generation   │  Build-time rendering            │
│                      │                                  │
│  TO ADD:             │                                  │
│  Cheerio/Puppeteer   │  Web scraping                    │
│  CMS (optional)      │  Content management              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    BACKEND (Future)                     │
├─────────────────────────────────────────────────────────┤
│  Supabase            │  Auth + Database                 │
│  PostgreSQL          │  User data                       │
│  Edge Functions      │  Serverless compute              │
│  Real-time           │  Live updates                    │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    DEPLOYMENT                           │
├─────────────────────────────────────────────────────────┤
│  Vercel              │  Hosting (recommended)           │
│  Static export       │  Pre-rendered pages              │
│  Edge CDN            │  Fast global delivery            │
│  GitHub Actions      │  CI/CD                           │
└─────────────────────────────────────────────────────────┘
```

---

**Last Updated:** December 2024  
**Diagram Version:** 1.0
