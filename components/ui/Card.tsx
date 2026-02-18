import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export default function Card({ children, className, gradient }: CardProps) {
  const gradientClass = gradient
    ? "bg-gradient-to-br from-white/60 to-primary-50/30 border border-white/50"
    : "bg-white/40 border border-white/30";

  return (
    <div
      className={`rounded-3xl shadow-xl backdrop-blur-lg ${gradientClass} hover:shadow-2xl transition-all duration-300 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
