import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alonsoformula.com";
  const languages: ("es" | "ca" | "gl")[] = ["es", "ca", "gl"];

  const routes: MetadataRoute.Sitemap = [];

  // Add home pages
  languages.forEach((lang) => {
    routes.push({
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    });
  });

  // Add topic pages
  languages.forEach((lang) => {
    const contentDir = path.join(process.cwd(), "content", lang);
    
    try {
      const files = fs.readdirSync(contentDir);
      files
        .filter((file) => file.endsWith(".json"))
        .forEach((file) => {
          const slug = file.replace(".json", "");
          routes.push({
            url: `${baseUrl}/${lang}/topics/${slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
          });
        });
    } catch (error) {
      console.error(`Error reading content directory for ${lang}:`, error);
    }
  });

  return routes;
}
