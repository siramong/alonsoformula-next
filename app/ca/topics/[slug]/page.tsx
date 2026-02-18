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
  const content = await getTopicContent(slug, "ca");

  if (!content) {
    return {
      title: "Tema no trobat",
    };
  }

  return {
    title: content.title,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      type: "article",
      locale: "ca_ES",
    },
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const content = await getTopicContent(slug, "ca");

  if (!content) {
    notFound();
  }

  return <TopicPageClient content={content} slug={slug} lang="ca" />;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const contentDir = path.join(process.cwd(), "content", "ca");
  
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
