import Image from "next/image";
import type { ContentSection } from "@/lib/types";

interface ContentRendererProps {
  sections: ContentSection[];
}

export default function ContentRenderer({ sections }: ContentRendererProps) {
  return (
    <div className="prose max-w-none mb-8">
      {sections.map((section, index) => {
        switch (section.type) {
          case "heading": {
            const level = section.level || 2;
            const className = "text-2xl font-bold mt-6 mb-4 text-gray-800";
            
            if (level === 2) {
              return (
                <h2 key={index} className={className}>
                  {section.content}
                </h2>
              );
            } else if (level === 3) {
              return (
                <h3 key={index} className={className}>
                  {section.content}
                </h3>
              );
            } else if (level === 4) {
              return (
                <h4 key={index} className={className}>
                  {section.content}
                </h4>
              );
            }
            return (
              <h2 key={index} className={className}>
                {section.content}
              </h2>
            );
          }

          case "text":
            return (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {section.content}
              </p>
            );

          case "image":
            return (
              <div key={index} className="my-6">
                <Image
                  src={section.src || ""}
                  alt={section.alt || ""}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-md"
                />
              </div>
            );

          case "list":
            return (
              <ul key={index} className="list-disc list-inside mb-4 space-y-2">
                {section.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
