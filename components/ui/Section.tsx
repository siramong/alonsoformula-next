import type { ReactNode } from "react";

interface SectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section className={`space-y-8 animate-fade-in ${className ?? ""}`}>
      {(title || description) && (
        <header className="space-y-3">
          {title && (
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-base sm:text-lg text-gray-700 font-medium">
              {description}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
