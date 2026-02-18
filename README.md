# Alonsoformula Next.js

Modern, multilingual educational platform for learning chemistry, built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Project Overview

This is a complete rearchitecture of Alonsoformula.com into a modern, responsive, and SEO-optimized web application. The platform provides:

- **Interactive Learning**: Multiple choice and true/false exercises with instant feedback
- **Gamification**: XP system and progress tracking to motivate learners
- **Multilingual Support**: Full content in Spanish (ES), Catalan (CA), and Galician (GL)
- **SEO Optimized**: Dynamic metadata, OpenGraph tags, sitemap, and structured data
- **Mobile-First**: Responsive design optimized for all devices
- **Static Generation**: Fast load times with pre-rendered pages

## 📸 Screenshots

### Home Page
![Home Page](https://github.com/user-attachments/assets/e802c391-33b9-45d2-a71b-671e0b598db4)

### Topic Page with Exercises
![Topic Page](https://github.com/user-attachments/assets/d35d0887-fbb8-458e-b899-b35f2bcf504f)

### Interactive Exercise with Feedback
![Exercise Feedback](https://github.com/user-attachments/assets/ad71e157-486b-4fcd-bb27-fc162270cc3b)

## 🛠️ Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: TailwindCSS
- **Content**: JSON-based structured content
- **Deployment**: Static export ready for Vercel
- **Package Manager**: npm

## 📁 Project Structure

```
alonsoformula-next/
├── app/                      # Next.js App Router
│   ├── es/                  # Spanish routes
│   ├── ca/                  # Catalan routes
│   ├── gl/                  # Galician routes
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Root redirect page
│   ├── globals.css          # Global styles
│   └── sitemap.ts           # Dynamic sitemap
├── components/              # React components
│   ├── ContentRenderer.tsx  # Renders structured content
│   ├── ExerciseCard.tsx     # Interactive exercise component
│   ├── ProgressBar.tsx      # XP progress display
│   └── TopicPageClient.tsx  # Client-side topic wrapper
├── content/                 # Educational content
│   ├── es/                  # Spanish content (JSON)
│   ├── ca/                  # Catalan content (JSON)
│   └── gl/                  # Galician content (JSON)
├── lib/                     # Utility functions
│   ├── types.ts             # TypeScript interfaces
│   └── utils.ts             # Helper functions
└── public/                  # Static assets
    └── robots.txt
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/siramong/alonsoformula-next.git
cd alonsoformula-next
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌍 Multilingual Support

The platform supports three languages:

- **Spanish (ES)**: `/es/*`
- **Catalan (CA)**: `/ca/*`
- **Galician (GL)**: `/gl/*`

Language switching is implemented via URL structure, not query parameters, ensuring SEO-friendly URLs.

## 📚 Content Structure

Content is stored as JSON files in `/content/{lang}/`. Each topic file follows this structure:

```json
{
  "title": "Topic Title",
  "description": "Brief description",
  "sections": [
    {
      "type": "heading",
      "level": 2,
      "content": "Section title"
    },
    {
      "type": "text",
      "content": "Educational content..."
    },
    {
      "type": "list",
      "items": ["Item 1", "Item 2"]
    }
  ],
  "exercises": [
    {
      "type": "multiple_choice",
      "question": "Question text?",
      "options": [
        { "id": "A", "text": "Option A" },
        { "id": "B", "text": "Option B" }
      ],
      "correctAnswer": "A",
      "explanation": "Explanation text",
      "xpReward": 15
    }
  ]
}
```

## 🎮 Gamification Features

### XP System
- Earn XP by completing exercises
- XP stored locally in browser localStorage
- Progress bar shows total XP earned

### Exercise Types
- **Multiple Choice**: Select one correct answer from multiple options
- **True/False**: Binary choice questions
- Instant feedback with explanations
- Prevents re-answering correctly answered questions

## 🔍 SEO Features

- Dynamic meta titles and descriptions
- OpenGraph tags for social sharing
- Canonical URLs
- Automatic sitemap generation
- robots.txt configuration
- Semantic HTML structure
- Mobile-responsive design

## 🏗️ Architecture Principles

1. **Separation of Concerns**: Content, UI, and logic are separated
2. **No Hardcoded Content**: All educational content in JSON files
3. **Type Safety**: Strict TypeScript for reliability
4. **Server Components**: Default to server-side rendering
5. **Client Components**: Only for interactive features
6. **Static Generation**: Pre-render pages at build time

## 🚀 Deployment

The project is configured for static export:

```bash
npm run build
```

This generates a static site in the `/out` directory, ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🔒 TypeScript Strict Mode

The project uses TypeScript strict mode for maximum type safety:
- No implicit `any` types
- Strict null checks
- Strict function types
- All code fully typed

## 📋 Future Enhancements

### Phase 2 (Planned)
- User accounts with Supabase
- Leaderboards
- Daily streak system
- Adaptive difficulty
- More exercise types (fill-in-the-blank, drag-and-drop)
- Analytics for learning patterns
- PWA support

## 🤝 Contributing

Contributions are welcome! Please ensure:
- TypeScript strict mode compliance
- No console errors or warnings
- Follows existing code style
- Updates documentation as needed

## 📄 License

See the [LICENSE](LICENSE) file for details.

## 👤 Author

Alonsoformula Educational Platform

## 🙏 Acknowledgments

- Built following INSTRUCTIONS.md guidelines
- Follows Next.js best practices
- Implements modern web standards
