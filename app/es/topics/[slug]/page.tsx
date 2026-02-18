import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TopicPageClient from "@/components/TopicPageClient";
import type { TopicContent } from "@/lib/types";
import fs from "fs";
import path from "path";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getTopicContent(
  slug: string,
  lang: "es" | "ca" | "gl"
): Promise<TopicContent | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      "content",
      lang,
      `${slug}.json`
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent) as TopicContent;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = await getTopicContent(slug, "es");

  if (!content) {
    return {
      title: "Tema no encontrado",
    };
  }

  return {
    title: content.title,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      type: "article",
      locale: "es_ES",
    },
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const content = await getTopicContent(slug, "es");

  if (!content) {
    notFound();
  }

  return <TopicPageClient content={content} slug={slug} lang="es" />;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const contentDir = path.join(process.cwd(), "content", "es");
  
  try {
    const files = fs.readdirSync(contentDir);
    return files
      .filter((file) => file.endsWith(".json"))
      .map((file) => ({
        slug: file.replace(".json", ""),
      }));
  } catch (error) {
    return [];
  }
}
