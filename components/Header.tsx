"use client";

import Link from "next/link";

interface HeaderProps {
  lang: "es" | "ca" | "gl";
}

const translations = {
  es: {
    home: "Inicio",
    topics: "Temas",
  },
  ca: {
    home: "Inici",
    topics: "Temes",
  },
  gl: {
    home: "Inicio",
    topics: "Temas",
  },
};

export default function Header({ lang }: HeaderProps) {
  const t = translations[lang];
  const langPath = lang === "es" ? "/es" : `/${lang}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 border-b border-white/20">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href={langPath} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
            ⚗️
          </div>
          <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 group-hover:scale-105 transition-transform origin-left">
            ChemLab
          </span>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href={`${langPath}/topics`}
            className="font-semibold text-gray-700 hover:text-primary-600 transition-colors"
          >
            {t.topics}
          </Link>
          <div className="text-sm font-semibold text-gray-600">
            {lang.toUpperCase()}
          </div>
        </div>
      </nav>
    </header>
  );
}
