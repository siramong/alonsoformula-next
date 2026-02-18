# Quick Reference Guide

## 🚨 Critical Issues (Fix First)

### 1. Invalid Tailwind Classes
```tsx
// ❌ components/ui/ExerciseOption.tsx:42
hover:scale-102 active:scale-98

// ✅ FIX
hover:scale-105 active:scale-95
```

### 2. Missing Focus States
Add to all buttons:
```tsx
focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300
```

### 3. Duplicate Component
Delete: `components/ProgressBar.tsx`  
Keep: `components/ui/ProgressBar.tsx`

### 4. Hardcoded Translations
Replace with: `import { translations } from '@/lib/utils'`

### 5. Missing Topics Page
Create: `app/[lang]/topics/page.tsx`

---

## 📁 Project Structure

```
alonsoformula-next/
├── app/
│   ├── [lang]/              # ES, CA, GL routes
│   │   ├── page.tsx        # Home
│   │   ├── layout.tsx      # Layout
│   │   └── topics/
│   │       └── [slug]/     # Dynamic topic pages
│   ├── globals.css
│   └── sitemap.ts
├── components/
│   ├── ContentRenderer.tsx
│   ├── ExerciseCard.tsx
│   ├── Header.tsx
│   ├── TopicPageClient.tsx
│   └── ui/                  # Reusable components
├── content/
│   ├── es/                  # Spanish content (JSON)
│   ├── ca/                  # Catalan content
│   └── gl/                  # Galician content
├── lib/
│   ├── types.ts             # TypeScript interfaces
│   └── utils.ts             # Helper functions
└── public/
    └── images/              # Static images
```

---

## 🎨 Design Tokens

### Colors
```typescript
primary: purple (#9333ea)
accent: blue (#3b82f6)
success: green (#22c55e)
warning: orange (#f59e0b)
```

### Valid Scale Values
```
scale-0, scale-50, scale-75, scale-90, scale-95
scale-100, scale-105, scale-110, scale-125, scale-150
```

### Shadows
```
shadow-sm, shadow-md, shadow-lg, shadow-xl, shadow-2xl
```

### Spacing
```
p-0, p-1 (4px), p-2 (8px), p-4 (16px), p-6 (24px), 
p-8 (32px), p-12 (48px), p-16 (64px)
```

---

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Scraping (to be added)
npm run scrape           # Scrape content
npm run scrape:validate  # Validate scraped content
```

---

## 📝 Content Schema

```json
{
  "title": "Topic Title",
  "description": "Brief description",
  "sections": [
    { "type": "heading", "level": 2, "content": "..." },
    { "type": "text", "content": "..." },
    { "type": "list", "items": ["...", "..."] },
    { "type": "image", "src": "/images/...", "alt": "..." }
  ],
  "exercises": [
    {
      "type": "multiple_choice",
      "question": "...",
      "options": [{ "id": "A", "text": "..." }],
      "correctAnswer": "A",
      "explanation": "...",
      "xpReward": 15
    }
  ]
}
```

---

## 🔍 Key Files to Know

### Configuration
- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind customization
- `tsconfig.json` - TypeScript settings

### Layouts
- `app/layout.tsx` - Root layout
- `app/[lang]/layout.tsx` - Language-specific layout

### Components
- `components/ui/PrimaryButton.tsx` - Primary CTA button
- `components/ui/Card.tsx` - Reusable card component
- `components/ExerciseCard.tsx` - Interactive exercises
- `components/ContentRenderer.tsx` - Renders JSON content

### Utilities
- `lib/types.ts` - All TypeScript interfaces
- `lib/utils.ts` - Progress tracking, translations

---

## 🎯 Priority Order

1. **Fix critical bugs** (2 hours)
2. **Build scraper** (3-5 days)
3. **Migrate 20-30 topics** (1 week)
4. **Polish UI/UX** (1 week)
5. **Add features** (2 weeks)
6. **Test & deploy** (1 week)

---

## 🐛 Common Issues & Fixes

### Issue: "scale-102 not working"
**Fix:** Change to `scale-105`

### Issue: "Keyboard navigation broken"
**Fix:** Add focus states to all interactive elements

### Issue: "Can't navigate to topics"
**Fix:** Create `/[lang]/topics/page.tsx`

### Issue: "Images not loading"
**Fix:** Ensure images in `/public/images/` and use correct path

### Issue: "Translations not working"
**Fix:** Import from `lib/utils.ts` instead of hardcoding

---

## 📚 Documentation Links

- [Full Analysis Report](./ANALYSIS_REPORT.md)
- [UI/UX Issues](./UI_UX_ISSUES.md)
- [Scraping Strategy](./SCRAPING_STRATEGY.md)
- [Action Plan](./ACTION_PLAN.md)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## 💡 Quick Tips

### Creating a New Component
```tsx
// components/ui/MyComponent.tsx
export default function MyComponent({ prop }: { prop: string }) {
  return (
    <div className="p-4 rounded-lg bg-white shadow-lg">
      {prop}
    </div>
  );
}
```

### Adding a New Topic
1. Create JSON file in `content/es/topic-name.json`
2. Follow content schema
3. Add images to `public/images/`
4. Test at `localhost:3000/es/topics/topic-name`

### Checking Accessibility
```bash
# Install axe DevTools extension in Chrome
# Run Lighthouse audit (Chrome DevTools)
# Test keyboard navigation (Tab, Enter, Space)
```

---

## 🆘 When You're Stuck

1. Check this guide first
2. Read relevant section in detailed docs
3. Search Next.js/Tailwind docs
4. Check browser console for errors
5. Ask for help with specific error message

---

## ✅ Quick Checklist

**Before Committing:**
- [ ] No TypeScript errors
- [ ] No console errors/warnings
- [ ] Tested on mobile size
- [ ] All links work
- [ ] Images load correctly

**Before Deploying:**
- [ ] Run `npm run build`
- [ ] Test production build locally
- [ ] Check Lighthouse scores
- [ ] Test on real devices
- [ ] Verify all routes work

---

**Last Updated:** December 2024  
**Keep this handy!** 📌
