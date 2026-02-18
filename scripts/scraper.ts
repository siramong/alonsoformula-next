/**
 * Web Scraper for Alonsoformula.com
 * 
 * This utility provides functions to scrape content from the original
 * alonsoformula.com website and convert it to our JSON format.
 * 
 * Usage:
 * 1. Run this script in an environment with internet access
 * 2. It will fetch pages from alonsoformula.com
 * 3. Parse the HTML content
 * 4. Convert to our JSON structure
 * 5. Save to content/{lang}/ directory
 */

import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

interface ScrapedContent {
  title: string;
  description: string;
  sections: Array<{
    type: string;
    level?: number;
    content?: string;
    items?: string[];
  }>;
}

/**
 * Fetch and parse a page from alonsoformula.com
 */
export async function scrapePage(url: string): Promise<ScrapedContent | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status}`);
      return null;
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Extract title
    const title = $('h1').first().text().trim() || $('title').text().trim();

    // Extract description (from meta or first paragraph)
    const description = $('meta[name="description"]').attr('content') || 
                       $('p').first().text().trim().substring(0, 200);

    // Extract content sections
    const sections: Array<any> = [];

    // Parse headings
    $('h1, h2, h3, h4, h5, h6').each((_, element) => {
      const $el = $(element);
      const level = parseInt(element.tagName.substring(1));
      const content = $el.text().trim();
      
      if (content && content !== title) {
        sections.push({
          type: 'heading',
          level,
          content,
        });
      }
    });

    // Parse paragraphs
    $('p').each((_, element) => {
      const $el = $(element);
      const content = $el.text().trim();
      
      if (content && content.length > 10) {
        sections.push({
          type: 'text',
          content,
        });
      }
    });

    // Parse lists
    $('ul, ol').each((_, element) => {
      const $el = $(element);
      const items: string[] = [];
      
      $el.find('li').each((_, li) => {
        const text = $(li).text().trim();
        if (text) items.push(text);
      });

      if (items.length > 0) {
        sections.push({
          type: 'list',
          items,
        });
      }
    });

    return {
      title,
      description,
      sections,
    };
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    return null;
  }
}

/**
 * Scrape multiple pages and save to JSON files
 */
export async function scrapeMultiplePages(urls: Record<string, string>, lang: string = 'es') {
  const results: Record<string, ScrapedContent | null> = {};

  for (const [slug, url] of Object.entries(urls)) {
    console.log(`Scraping ${slug} from ${url}...`);
    const content = await scrapePage(url);
    
    if (content) {
      results[slug] = content;
      
      // Save to file
      const outputPath = path.join(process.cwd(), 'content', lang, `${slug}.json`);
      const outputData = {
        ...content,
        exercises: [], // Exercises need to be added manually
      };
      
      fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
      console.log(`✓ Saved ${slug}.json`);
    }
    
    // Rate limiting - wait 1 second between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return results;
}

/**
 * Example usage:
 * 
 * To scrape content, run this script with Node.js:
 * 
 * ```bash
 * npm install cheerio
 * cd scripts
 * ts-node scraper.ts
 * ```
 * 
 * Or create a scraping script in the scripts directory:
 * 
 * ```typescript
 * import { scrapeMultiplePages } from './scraper';
 * 
 * const urls = {
 *   'alcanos': 'https://www.alonsoformula.com/organica/alcanos.htm',
 *   'alquenos': 'https://www.alonsoformula.com/organica/alquenos.htm',
 *   'alquinos': 'https://www.alonsoformula.com/organica/alquinos.htm',
 *   // Add more URLs...
 * };
 * 
 * scrapeMultiplePages(urls, 'es').then(() => {
 *   console.log('Scraping complete!');
 * });
 * ```
 */

// List of topics to scrape from the original site
export const TOPICS_TO_SCRAPE = {
  // Hidrocarburos
  'alcanos': '/organica/alcanos.htm',
  'alquenos': '/organica/alquenos.htm',
  'alquinos': '/organica/alquinos.htm',
  'aromaticos': '/organica/aromaticos.htm',
  
  // Grupos funcionales
  'alcoholes': '/organica/alcoholes.htm',
  'eteres': '/organica/eteres.htm',
  'aldehidos': '/organica/aldehidos.htm',
  'cetonas': '/organica/cetonas.htm',
  'acidos': '/organica/acidos.htm',
  'esteres': '/organica/esteres.htm',
  'aminas': '/organica/aminas.htm',
  'amidas': '/organica/amidas.htm',
  
  // Conceptos
  'nomenclatura': '/organica/nomenclatura.htm',
  'isomeria': '/organica/isomeria.htm',
  'estereoquimica': '/organica/estereoquimica.htm',
  'reacciones': '/organica/reacciones.htm',
};

export default {
  scrapePage,
  scrapeMultiplePages,
  TOPICS_TO_SCRAPE,
};
