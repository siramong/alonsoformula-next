import Image from "next/image";
import type { ContentSection } from "@/lib/types";

interface ContentRendererProps {
  sections: ContentSection[];
}

export default function ContentRenderer({ sections }: ContentRendererProps) {
  return (
    <div className="space-y-5 text-slate-700 leading-relaxed">
      {sections.map((section, index) => {
        switch (section.type) {
          case "heading": {
            const level = section.level || 2;
            const className =
              "text-2xl sm:text-3xl font-semibold mt-8 mb-3 text-slate-900";
            
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
              <p key={index} className="text-base sm:text-lg">
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
                  className="rounded-2xl border border-slate-200/80 shadow-sm"
                />
              </div>
            );

          case "list":
            return (
              <ul key={index} className="list-disc list-inside space-y-2">
                {section.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-base sm:text-lg">
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
