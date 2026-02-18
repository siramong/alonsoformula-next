# Content Scraping Guide

This document explains how to scrape content from the original alonsoformula.com website and add it to this Next.js application.

## Overview

The original alonsoformula.com contains educational content about organic chemistry that needs to be migrated to this modern platform. The scraping utility helps automate this process.

## Setup

1. Install the required dependencies:

```bash
npm install cheerio
npm install --save-dev @types/cheerio
```

2. The scraper is located at `lib/scraper.ts`

## Usage

### Option 1: Use the Scraping Script

Create a file called `scripts/scrape.ts`:

```typescript
import { scrapeMultiplePages, TOPICS_TO_SCRAPE } from '../lib/scraper';

const BASE_URL = 'https://www.alonsoformula.com';

// Convert relative URLs to absolute
const urls = Object.fromEntries(
  Object.entries(TOPICS_TO_SCRAPE).map(([slug, path]) => [
    slug,
    BASE_URL + path
  ])
);

// Scrape Spanish content
scrapeMultiplePages(urls, 'es').then(() => {
  console.log('✓ Spanish content scraped successfully!');
});

// You can also scrape Catalan and Galician versions
// scrapeMultiplePages(catalanUrls, 'ca');
// scrapeMultiplePages(galicianUrls, 'gl');
```

Run the script:

```bash
npx ts-node scripts/scrape.ts
```

### Option 2: Manual Scraping

For individual pages:

```typescript
import { scrapePage } from '../lib/scraper';
import fs from 'fs';

const content = await scrapePage('https://www.alonsoformula.com/organica/alcanos.htm');

if (content) {
  fs.writeFileSync(
    'content/es/alcanos.json',
    JSON.stringify({
      ...content,
      exercises: [] // Add exercises manually
    }, null, 2)
  );
}
```

## Topics to Scrape

The scraper includes a list of topics from the original site:

### Hidrocarburos (Hydrocarbons)
- Alcanos (Alkanes)
- Alquenos (Alkenes)
- Alquinos (Alkynes)
- Aromáticos (Aromatic compounds)

### Grupos Funcionales (Functional Groups)
- Alcoholes (Alcohols)
- Éteres (Ethers)
- Aldehídos (Aldehydes)
- Cetonas (Ketones)
- Ácidos (Acids)
- Ésteres (Esters)
- Aminas (Amines)
- Amidas (Amides)

### Conceptos (Concepts)
- Nomenclatura (Nomenclature)
- Isomería (Isomerism)
- Estereoquímica (Stereochemistry)
- Reacciones (Reactions)

## Content Structure

Scraped content is saved in JSON format:

```json
{
  "title": "Topic Title",
  "description": "Brief description",
  "sections": [
    {
      "type": "heading",
      "level": 2,
      "content": "Section Title"
    },
    {
      "type": "text",
      "content": "Paragraph content..."
    },
    {
      "type": "list",
      "items": ["Item 1", "Item 2", "Item 3"]
    }
  ],
  "exercises": []
}
```

## Adding Exercises

After scraping, you need to manually add exercises to each topic:

```json
{
  "exercises": [
    {
      "type": "multiple_choice",
      "question": "What is the general formula for alkanes?",
      "options": [
        { "id": "A", "text": "CnH2n+2" },
        { "id": "B", "text": "CnH2n" },
        { "id": "C", "text": "CnH2n-2" }
      ],
      "correctAnswer": "A",
      "explanation": "Alkanes are saturated hydrocarbons with the general formula CnH2n+2.",
      "xpReward": 15
    }
  ]
}
```

## Multilingual Content

The original site has content in multiple languages:

- Spanish (ES): Main content
- Catalan (CA): Some topics available
- Galician (GL): Some topics available

Make sure to scrape all language versions if available.

## Tips

1. **Rate Limiting**: The scraper includes a 1-second delay between requests to avoid overwhelming the server.

2. **Review Content**: Always review scraped content before committing. The scraper may not capture everything perfectly.

3. **Images**: Images need to be downloaded separately and saved to the `public/images/` directory.

4. **Formulas**: Chemical formulas may need manual formatting.

5. **Tables**: Complex tables might need custom handling.

## Troubleshooting

### Error: "Failed to fetch"

- Check your internet connection
- Verify the URL is correct
- Check if the website is accessible

### Content Not Parsing Correctly

- Inspect the HTML structure of the page
- Adjust the selectors in `scraper.ts`
- Some pages may have different structures

### Missing Content

- Some content types (videos, interactive elements) can't be scraped automatically
- These need to be recreated manually in the new platform

## Next Steps

After scraping:

1. Review and clean up the content
2. Add exercises for each topic
3. Add images and diagrams
4. Test the content on the website
5. Update the topics list in the topics page

## Contributing

If you improve the scraper, please:

1. Document your changes
2. Test with multiple topics
3. Submit a pull request

---

For questions or issues, open an issue on GitHub.
