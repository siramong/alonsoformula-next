"use client";

import { useEffect, useState } from "react";
import { getProgress } from "@/lib/utils";

interface ProgressBarProps {
  lang: "es" | "ca" | "gl";
}

const translations = {
  es: {
    yourProgress: "Tu progreso",
    totalXP: "Total XP",
  },
  ca: {
    yourProgress: "El teu progrés",
    totalXP: "Total XP",
  },
  gl: {
    yourProgress: "O teu progreso",
    totalXP: "Total XP",
  },
};

export default function ProgressBar({ lang }: ProgressBarProps) {
  const [xp, setXp] = useState<number>(0);
  const t = translations[lang];

  useEffect(() => {
    const progress = getProgress();
    setXp(progress.totalXP);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-600">
          {t.yourProgress}
        </span>
        <span className="text-sm font-bold text-primary-600">
          {t.totalXP}: {xp}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-primary-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${Math.min((xp / 1000) * 100, 100)}%` }}
        />
      </div>
    </div>
  );
}
