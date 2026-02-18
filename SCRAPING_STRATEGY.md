# Scraping Strategy for Alonsoformula.com

## Current Status: NO SCRAPING EXISTS ❌

This document outlines a comprehensive strategy to scrape, convert, and sync content from the original alonsoformula.com website into the new Next.js platform.

---

## 1. Problem Statement

**Current State:**
- Next.js platform has only **1 topic** (Alcanos) with manually created content
- Original alonsoformula.com likely has **hundreds of topics** across multiple chemistry subjects
- **Zero connection** between the two platforms
- No automated content synchronization

**Goal:**
Build a scraping system that:
1. Extracts all content from original website
2. Converts HTML to structured JSON
3. Preserves images, formatting, and educational value
4. Enables periodic sync for updates
5. Maintains multilingual support (ES, CA, GL)

---

## 2. Approach Options

### Option A: One-Time Manual Migration
**Description:** Manually copy-paste content, convert to JSON format

**Pros:**
- Full control over structure
- Can improve/reorganize content during migration
- No risk of scraping errors
- One-time effort

**Cons:**
- Extremely time-consuming (100+ hours for large site)
- Error-prone for large volumes
- No automated updates
- Requires deep content understanding

**Best For:** Small sites (< 20 pages), content that needs heavy restructuring

---

### Option B: Automated Scraping Script
**Description:** Build Node.js scripts to crawl and parse HTML into JSON

**Pros:**
- Fast (scrape 100+ pages in minutes)
- Repeatable (can re-run for updates)
- Consistent structure
- Reduces human error

**Cons:**
- Requires development time upfront
- May need adjustments for different page layouts
- Potential legal/ethical considerations
- Requires HTML structure knowledge

**Best For:** Large sites (> 20 pages), sites with consistent structure

**⭐ RECOMMENDED APPROACH**

---

### Option C: Hybrid Approach
**Description:** Automated scraping + manual review/editing

**Pros:**
- Speed of automation
- Quality of manual review
- Can fix scraping errors before publishing
- Best of both worlds

**Cons:**
- Still requires significant time
- Two-step process

**Best For:** Most real-world scenarios

**⭐ MOST REALISTIC APPROACH**

---

## 3. Technical Implementation

### Step 1: Site Analysis

Before scraping, analyze the original website structure:

```bash
# Crawl the site to understand structure
npx website-scraper https://alonsoformula.com -d ./site-analysis

# Analyze HTML patterns
# - What elements contain main content? (article, main, div#content)
# - What's the heading structure? (h1, h2, h3)
# - How are lists formatted? (ul, ol)
# - How are images stored? (img src)
# - Are there interactive elements? (calculators, quizzes)
# - What's the URL structure? (/organica/alcanos)
```

**Deliverable:** 
- URL sitemap (all pages to scrape)
- HTML structure documentation
- Content type inventory

---

### Step 2: Install Dependencies

```bash
npm install --save-dev \
  cheerio \          # HTML parsing
  node-html-parser \ # Alternative HTML parser
  axios \            # HTTP requests
  p-limit \          # Rate limiting
  sanitize-html \    # XSS protection
  turndown           # HTML to Markdown (optional)
```

**For screenshot/advanced scraping:**
```bash
npm install --save-dev \
  puppeteer \        # Headless browser
  playwright         # Alternative to Puppeteer
```

---

### Step 3: Build Scraper Script

#### 3.1 Basic Scraper Structure

```typescript
// scripts/scrape-alonsoformula.ts
import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';
import pLimit from 'p-limit';

// Rate limiting: max 3 concurrent requests
const limit = pLimit(3);

interface ScrapedSection {
  type: 'heading' | 'text' | 'list' | 'image' | 'table' | 'formula';
  level?: number;
  content?: string;
  items?: string[];
  src?: string;
  alt?: string;
  rows?: string[][];
}

interface ScrapedTopic {
  title: string;
  description: string;
  slug: string;
  category: string;
  sections: ScrapedSection[];
  exercises?: any[]; // If exercises exist on original site
}

async function fetchHTML(url: string): Promise<string> {
  console.log(`📥 Fetching: ${url}`);
  
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AlonsoFormulaScraper/1.0)',
      },
      timeout: 10000, // 10 second timeout
    });
    
    return response.data;
  } catch (error) {
    console.error(`❌ Failed to fetch ${url}:`, error.message);
    throw error;
  }
}

async function scrapePage(url: string): Promise<ScrapedTopic> {
  const html = await fetchHTML(url);
  const $ = cheerio.load(html);

  // Extract metadata
  const title = $('h1').first().text().trim();
  const description = $('meta[name="description"]').attr('content') || '';
  const slug = url.split('/').pop() || '';
  
  // Determine category from URL
  const category = url.includes('/organica/') ? 'organica' 
                 : url.includes('/inorganica/') ? 'inorganica'
                 : url.includes('/fisica/') ? 'fisica'
                 : 'general';

  const sections: ScrapedSection[] = [];

  // Parse main content area (adjust selector based on actual HTML)
  const $content = $('#main-content, article, .content, main').first();

  // Extract content in order
  $content.children().each((_, element) => {
    const $el = $(element);
    const tagName = element.tagName?.toLowerCase();

    // Headings
    if (tagName.match(/^h[2-4]$/)) {
      sections.push({
        type: 'heading',
        level: parseInt(tagName.slice(1)),
        content: $el.text().trim(),
      });
    }
    
    // Paragraphs
    else if (tagName === 'p') {
      const text = $el.text().trim();
      if (text.length > 0) {
        sections.push({
          type: 'text',
          content: text,
        });
      }
    }
    
    // Lists
    else if (tagName === 'ul' || tagName === 'ol') {
      const items = $el.find('li').map((_, li) => $(li).text().trim()).get();
      if (items.length > 0) {
        sections.push({
          type: 'list',
          items,
        });
      }
    }
    
    // Images
    else if (tagName === 'img' || $el.find('img').length > 0) {
      const $img = tagName === 'img' ? $el : $el.find('img').first();
      sections.push({
        type: 'image',
        src: $img.attr('src') || '',
        alt: $img.attr('alt') || '',
      });
    }
    
    // Tables
    else if (tagName === 'table') {
      const rows: string[][] = [];
      $el.find('tr').each((_, row) => {
        const cells = $(row).find('td, th').map((_, cell) => $(cell).text().trim()).get();
        rows.push(cells);
      });
      sections.push({
        type: 'table',
        rows,
      });
    }
  });

  return {
    title,
    description,
    slug,
    category,
    sections,
  };
}

async function saveToJSON(topic: ScrapedTopic, lang: string) {
  const outputDir = path.join(process.cwd(), 'content', lang);
  await fs.mkdir(outputDir, { recursive: true });
  
  const outputPath = path.join(outputDir, `${topic.slug}.json`);
  await fs.writeFile(outputPath, JSON.stringify(topic, null, 2), 'utf-8');
  
  console.log(`✅ Saved: ${outputPath}`);
}

async function downloadImage(imageUrl: string, slug: string): Promise<string> {
  // Download image and save to public/images/
  const imageName = `${slug}-${path.basename(imageUrl)}`;
  const outputPath = path.join(process.cwd(), 'public', 'images', imageName);
  
  // Ensure directory exists
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  
  // Download
  const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  await fs.writeFile(outputPath, response.data);
  
  return `/images/${imageName}`;
}

// Main execution
async function main() {
  // Define all URLs to scrape (can be loaded from sitemap.xml)
  const urls = [
    'https://alonsoformula.com/organica/alcanos',
    'https://alonsoformula.com/organica/alquenos',
    'https://alonsoformula.com/organica/alquinos',
    // ... add all URLs
  ];

  console.log(`🚀 Starting scrape of ${urls.length} pages...`);

  const results = await Promise.all(
    urls.map(url => limit(() => scrapePage(url)))
  );

  // Save Spanish versions
  for (const topic of results) {
    await saveToJSON(topic, 'es');
  }

  console.log('✅ Scraping complete!');
}

main().catch(console.error);
```

---

#### 3.2 Advanced Features

**Handle Images:**
```typescript
async function processImages(sections: ScrapedSection[], slug: string) {
  for (const section of sections) {
    if (section.type === 'image' && section.src) {
      // Convert relative URLs to absolute
      const absoluteUrl = new URL(section.src, 'https://alonsoformula.com').href;
      
      // Download and save locally
      const localPath = await downloadImage(absoluteUrl, slug);
      
      // Update section to use local path
      section.src = localPath;
    }
  }
}
```

**Extract Exercises:**
```typescript
function extractExercises($: cheerio.CheerioAPI): Exercise[] {
  const exercises: Exercise[] = [];

  // Look for exercise patterns (adjust based on actual HTML)
  $('.exercise, .quiz, .practice').each((_, el) => {
    const $ex = $(el);
    
    // Multiple choice
    if ($ex.find('.options, .choices').length > 0) {
      exercises.push({
        type: 'multiple_choice',
        question: $ex.find('.question').text().trim(),
        options: $ex.find('.option').map((i, opt) => ({
          id: String.fromCharCode(65 + i), // A, B, C, D
          text: $(opt).text().trim(),
        })).get(),
        correctAnswer: $ex.find('[data-correct="true"]').attr('data-id') || 'A',
        explanation: $ex.find('.explanation').text().trim(),
        xpReward: 15,
      });
    }
  });

  return exercises;
}
```

**Handle Dynamic Content (JavaScript-rendered):**
```typescript
import puppeteer from 'puppeteer';

async function scrapeWithBrowser(url: string): Promise<string> {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto(url, { waitUntil: 'networkidle2' });
  
  // Wait for content to load
  await page.waitForSelector('#main-content', { timeout: 5000 });
  
  const html = await page.content();
  await browser.close();
  
  return html;
}
```

---

### Step 4: Handle Multilingual Content

```typescript
async function scrapeMultilingual(baseUrl: string) {
  const languages = ['es', 'ca', 'gl'];
  
  for (const lang of languages) {
    // Adjust URL for language (depends on site structure)
    const url = baseUrl.replace('/es/', `/${lang}/`);
    
    try {
      const topic = await scrapePage(url);
      await saveToJSON(topic, lang);
    } catch (error) {
      console.warn(`⚠️ No ${lang} version for ${baseUrl}`);
      
      // Fallback: Use Spanish version or skip
      if (lang !== 'es') {
        console.log(`   Using ES version as fallback`);
        const esTopic = await scrapePage(baseUrl);
        await saveToJSON(esTopic, lang);
      }
    }
  }
}
```

---

### Step 5: Content Validation

```typescript
function validateTopic(topic: ScrapedTopic): boolean {
  const errors: string[] = [];

  if (!topic.title || topic.title.length < 3) {
    errors.push('Title is missing or too short');
  }

  if (!topic.sections || topic.sections.length === 0) {
    errors.push('No sections found');
  }

  if (topic.sections.length < 3) {
    errors.push('Too few sections (might be scraping error)');
  }

  const hasHeadings = topic.sections.some(s => s.type === 'heading');
  if (!hasHeadings) {
    errors.push('No headings found');
  }

  if (errors.length > 0) {
    console.error(`❌ Validation failed for "${topic.title}":`);
    errors.forEach(e => console.error(`   - ${e}`));
    return false;
  }

  return true;
}
```

---

## 4. Execution Plan

### Phase 1: Setup (Day 1)
- [ ] Install dependencies
- [ ] Analyze original website HTML structure
- [ ] Create URL sitemap (all pages to scrape)
- [ ] Set up output directories

### Phase 2: Core Scraper (Days 2-3)
- [ ] Build basic scraper (titles, text, headings)
- [ ] Test on 5-10 pages
- [ ] Handle edge cases
- [ ] Add error handling and retries

### Phase 3: Content Types (Day 4)
- [ ] Add list extraction
- [ ] Add image downloading
- [ ] Add table parsing
- [ ] Add formula/equation handling

### Phase 4: Exercises (Day 5)
- [ ] Analyze exercise HTML structure
- [ ] Extract questions and options
- [ ] Parse correct answers
- [ ] Extract explanations

### Phase 5: Multilingual (Day 6)
- [ ] Scrape Catalan versions
- [ ] Scrape Galician versions
- [ ] Handle missing translations

### Phase 6: Validation (Day 7)
- [ ] Validate all scraped content
- [ ] Manual review of 10% random sample
- [ ] Fix any errors
- [ ] Generate scraping report

### Phase 7: Integration (Day 8)
- [ ] Test content loads in Next.js
- [ ] Fix any formatting issues
- [ ] Verify images display correctly
- [ ] Test exercises work properly

---

## 5. Content Synchronization Strategy

### Option A: Periodic Re-Scrape
```bash
# Cron job: Run weekly
0 2 * * 0 node scripts/scrape-alonsoformula.js

# Compare new vs. old JSON files
# Only update if content changed
```

### Option B: Incremental Updates
```typescript
async function checkForUpdates(url: string): Promise<boolean> {
  // Fetch page
  const html = await fetchHTML(url);
  const $ = cheerio.load(html);
  
  // Get last modified date
  const lastModified = $('meta[property="article:modified_time"]').attr('content');
  
  // Check against local timestamp
  const localTimestamp = await getLocalTimestamp(url);
  
  return new Date(lastModified) > new Date(localTimestamp);
}
```

### Option C: Manual Trigger
```typescript
// CLI tool
// npm run scrape -- --url=https://alonsoformula.com/organica/alcanos
```

---

## 6. Legal & Ethical Considerations

### ✅ Best Practices:
1. **Respect robots.txt**: Check if scraping is allowed
2. **Rate limiting**: Don't overwhelm the server (max 3 req/sec)
3. **User-Agent**: Identify your bot clearly
4. **Attribution**: Keep original URLs for credit
5. **Content ownership**: You have permission (as stated in requirements)

### robots.txt Check:
```typescript
import axios from 'axios';

async function checkRobotsTxt(): Promise<boolean> {
  try {
    const { data } = await axios.get('https://alonsoformula.com/robots.txt');
    
    // Parse robots.txt
    const disallowedPaths = data
      .split('\n')
      .filter(line => line.startsWith('Disallow:'))
      .map(line => line.split(':')[1].trim());
    
    console.log('Disallowed paths:', disallowedPaths);
    return true;
  } catch {
    console.log('No robots.txt found');
    return true;
  }
}
```

---

## 7. Sample Output Structure

```json
{
  "title": "Alcanos",
  "description": "Introducción a los alcanos: hidrocarburos saturados",
  "slug": "alcanos",
  "category": "organica",
  "originalUrl": "https://alonsoformula.com/organica/alcanos",
  "lastScraped": "2024-12-19T10:30:00Z",
  "sections": [
    {
      "type": "heading",
      "level": 2,
      "content": "¿Qué son los alcanos?"
    },
    {
      "type": "text",
      "content": "Los alcanos son hidrocarburos saturados..."
    },
    {
      "type": "list",
      "items": [
        "Enlaces simples C-C y C-H",
        "Geometría tetraédrica"
      ]
    },
    {
      "type": "image",
      "src": "/images/alcanos-estructura.png",
      "alt": "Estructura molecular de alcanos"
    }
  ],
  "exercises": [
    {
      "type": "multiple_choice",
      "question": "¿Cuál es la fórmula general de los alcanos?",
      "options": [
        { "id": "A", "text": "CnH2n+2" },
        { "id": "B", "text": "CnH2n" }
      ],
      "correctAnswer": "A",
      "explanation": "Los alcanos son hidrocarburos saturados...",
      "xpReward": 15
    }
  ]
}
```

---

## 8. Alternative: Content Management System (CMS)

If scraping proves too complex, consider using a headless CMS:

### Recommended Options:

**1. Strapi (Free, self-hosted)**
- Visual content editor
- GraphQL/REST API
- Media library
- Multilingual plugin
- Free tier sufficient

**2. Contentful (Free tier available)**
- Cloud-hosted
- Great developer experience
- Rich text editor
- Asset management
- 25k records free

**3. Sanity (Free tier available)**
- Portable text (JSON-based content)
- Real-time collaboration
- Excellent TypeScript support
- 100k free API requests/month

### CMS Workflow:
1. Manually input 10-20 priority topics
2. Use CMS API to fetch content in Next.js
3. Gradually migrate remaining content
4. Non-technical users can update content

---

## 9. Monitoring & Maintenance

### Scraping Dashboard
```typescript
interface ScrapingReport {
  totalPages: number;
  successfulPages: number;
  failedPages: string[];
  scrapedAt: Date;
  totalImages: number;
  totalExercises: number;
}

async function generateReport(): Promise<ScrapingReport> {
  // Analyze scraped content
  const files = await fs.readdir('./content/es');
  
  let totalExercises = 0;
  const failedPages: string[] = [];
  
  for (const file of files) {
    const content = JSON.parse(await fs.readFile(`./content/es/${file}`, 'utf-8'));
    
    if (content.sections.length < 3) {
      failedPages.push(file);
    }
    
    totalExercises += content.exercises?.length || 0;
  }
  
  return {
    totalPages: files.length,
    successfulPages: files.length - failedPages.length,
    failedPages,
    scrapedAt: new Date(),
    totalImages: 0, // Calculate separately
    totalExercises,
  };
}
```

---

## 10. Quick Start Script

```typescript
// scripts/quick-scrape.ts
// Usage: npm run scrape

import { scrapePage, saveToJSON } from './scraper';

async function quickStart() {
  console.log('🚀 Quick Scrape Starting...\n');
  
  // Test with a few pages first
  const testUrls = [
    'https://alonsoformula.com/organica/alcanos',
    'https://alonsoformula.com/organica/alquenos',
    'https://alonsoformula.com/organica/alquinos',
  ];
  
  for (const url of testUrls) {
    try {
      const topic = await scrapePage(url);
      await saveToJSON(topic, 'es');
      console.log(`✅ ${topic.title}`);
    } catch (error) {
      console.error(`❌ Failed: ${url}`, error.message);
    }
  }
  
  console.log('\n🎉 Quick scrape complete! Review output in content/es/');
}

quickStart();
```

```bash
# Add to package.json
"scripts": {
  "scrape": "tsx scripts/quick-scrape.ts",
  "scrape:full": "tsx scripts/scrape-all.ts",
  "scrape:validate": "tsx scripts/validate-content.ts"
}
```

---

## Summary

**Recommended Approach:** Hybrid (automated scraping + manual review)

**Timeline:** 
- Scraper development: 3-5 days
- Full site scraping: 1-2 hours
- Validation & cleanup: 2-3 days
- **Total: ~1 week**

**Next Steps:**
1. Analyze original website HTML structure
2. Create URL sitemap
3. Build basic scraper for 5 test pages
4. Iterate and expand
5. Run full scrape
6. Validate and publish

---

**End of Scraping Strategy**
