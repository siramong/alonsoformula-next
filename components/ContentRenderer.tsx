import Image from "next/image";
import type { ContentSection } from "@/lib/types";

interface ContentRendererProps {
  sections: ContentSection[];
}

export default function ContentRenderer({ sections }: ContentRendererProps) {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      {sections.map((section, index) => {
        switch (section.type) {
          case "heading": {
            const level = section.level || 2;
            
            if (level === 2) {
              return (
                <h2 key={index} className="text-3xl sm:text-4xl font-bold mt-10 mb-4 text-white">
                  {section.content}
                </h2>
              );
            } else if (level === 3) {
              return (
                <h3 key={index} className="text-2xl sm:text-3xl font-bold mt-8 mb-3 text-white">
                  {section.content}
                </h3>
              );
            } else if (level === 4) {
              return (
                <h4 key={index} className="text-xl sm:text-2xl font-bold mt-6 mb-3 text-white">
                  {section.content}
                </h4>
              );
            }
            return (
              <h2 key={index} className="text-3xl sm:text-4xl font-bold mt-10 mb-4 text-white">
                {section.content}
              </h2>
            );
          }

          case "text":
            return (
              <p key={index} className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                {section.content}
              </p>
            );

          case "image":
            return (
              <div key={index} className="my-8">
                <Image
                  src={section.src || ""}
                  alt={section.alt || ""}
                  width={800}
                  height={600}
                  className="rounded-2xl border border-white/10 shadow-2xl"
                />
              </div>
            );

          case "list":
            return (
              <ul key={index} className="space-y-3 my-6">
                {section.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-lg text-gray-300">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{item}</span>
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
