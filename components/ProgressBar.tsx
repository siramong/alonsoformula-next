"use client";

import { useEffect, useState } from "react";
import { getProgress } from "@/lib/utils";
import Card from "@/components/ui/Card";
import UiProgressBar from "@/components/ui/ProgressBar";

interface ProgressBarProps {
  lang: "es" | "ca" | "gl";
}

const translations = {
  es: {
    yourProgress: "Tu progreso",
    totalXP: "Total XP",
    keepLearning: "¡Sigue aprendiendo!",
  },
  ca: {
    yourProgress: "El teu progrés",
    totalXP: "Total XP",
    keepLearning: "¡Segueix aprenent!",
  },
  gl: {
    yourProgress: "O teu progreso",
    totalXP: "Total XP",
    keepLearning: "¡Segue aprendendo!",
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
    <Card className="p-6 sm:p-8 gradient" gradient>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm font-bold text-primary-700 uppercase tracking-wide">{t.yourProgress}</p>
          <h3 className="text-2xl font-black text-gray-900 mt-1">{xp} XP</h3>
        </div>
        <div className="text-4xl">✨</div>
      </div>
      <UiProgressBar
        value={xp}
        max={1000}
        helperText={t.keepLearning}
      />
    </Card>
  );
}
