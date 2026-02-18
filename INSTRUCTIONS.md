# INSTRUCTIONS.md

## Project Overview

This project is a full frontend rearchitecture of Alonsoformula.com into a modern, responsive, multilingual, and SEO-optimized web application.

The goal is to:

- Preserve all original educational content.
- Improve structure and maintainability.
- Improve SEO and indexing.
- Convert static exercises into interactive modules.
- Maintain compatibility with Spanish (ES), Catalan (CA), and Galician (GL).
- Keep the platform lightweight and low-cost to maintain.

The original website will continue to exist. This project is a parallel improved version.


---

## Technical Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: TailwindCSS
- Content: JSON structured files
- Deployment: Vercel
- Phase 2 (optional): Supabase for persistence


---

## Architecture Principles

1. SEO first.
2. Mobile-first responsive design.
3. Strict separation between:
   - UI
   - Educational content
   - Exercise logic
4. No hardcoded educational text inside components.
5. All content must be structured and reusable.
6. Multilingual content must live in `/content/{lang}`.


---

## Routing Structure

Routes must follow this structure:

/es/topic
/ca/topic
/gl/topic

Never use query parameters for language.


---

## Content Structure

Content must be structured in JSON format.

Example:

{
  "title": "Alcanos",
  "description": "Introducción a los alcanos",
  "sections": [
    {
      "type": "text",
      "content": "Los alcanos son..."
    },
    {
      "type": "image",
      "src": "/images/alcanos/estructura.png",
      "alt": "Estructura del metano"
    }
  ],
  "exercises": [
    {
      "type": "multiple_choice",
      "question": "¿Cuál es el nombre correcto?",
      "options": [
        { "id": "A", "text": "Propano" },
        { "id": "B", "text": "Butano" }
      ],
      "correctAnswer": "A"
    }
  ]
}


---

## Exercise Engine Rules

- Must support:
  - Multiple choice
  - True/false
  - Future: fill in the blank
- Must provide instant feedback.
- Must track score.
- Must track progress.
- Must not reload page on answer.
- Must be reusable across all topics.


---

## Gamification

Phase 1:

- XP system.
- Local progress storage.
- Visual feedback.
- Progress bar.
- Completion badge.

Phase 2 (future):

- User accounts.
- Leaderboards.
- Daily streak system.


---

## SEO Requirements

Every page must:

- Have dynamic title.
- Have meta description.
- Have canonical URL.
- Have OpenGraph tags.
- Include structured data (JSON-LD for educational content).

A sitemap.xml must be generated automatically.

Robots.txt must be configured.


---

## Performance Rules

- Use static generation when possible.
- Lazy load images.
- Optimize assets.
- Avoid unnecessary client-side rendering.


---

## Code Quality

- Use functional components.
- Avoid inline styles.
- Avoid global CSS conflicts.
- Strict TypeScript mode.
- Reusable components only.
- Clean folder structure.


---

## Deployment

- Must build successfully with `npm run build`.
- No console errors.
- No hydration mismatches.
- Must pass Lighthouse mobile score > 90.


---

## Long Term Goals

- Replace static exercises with intelligent learning modules.
- Introduce adaptive difficulty.
- Implement analytics for learning patterns.
- Possibly convert into PWA.


---

End of instructions.
