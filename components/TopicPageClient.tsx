"use client";

import { useEffect, useState } from "react";
import ExerciseCard from "@/components/ExerciseCard";
import ProgressBar from "@/components/ProgressBar";
import ContentRenderer from "@/components/ContentRenderer";
import type { TopicContent } from "@/lib/types";
import { addXP, markExerciseComplete } from "@/lib/utils";

interface TopicPageClientProps {
  content: TopicContent;
  slug: string;
  lang: "es" | "ca" | "gl";
}

export default function TopicPageClient({
  content,
  slug,
  lang,
}: TopicPageClientProps) {
  const [currentXP, setCurrentXP] = useState<number>(0);

  const handleExerciseComplete = (xp: number, exerciseIndex: number) => {
    const exerciseId = `${slug}-${exerciseIndex}`;
    markExerciseComplete(exerciseId);
    addXP(xp);
    setCurrentXP((prev) => prev + xp);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <ProgressBar lang={lang} />

      <article className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-8">
        <h1 className="text-4xl font-bold mb-4 text-primary-700">
          {content.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8">{content.description}</p>

        <ContentRenderer sections={content.sections} />
      </article>

      {content.exercises && content.exercises.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {lang === "es" && "Ejercicios"}
            {lang === "ca" && "Exercicis"}
            {lang === "gl" && "Exercicios"}
          </h2>

          {content.exercises.map((exercise, index) => (
            <ExerciseCard
              key={index}
              exercise={exercise}
              exerciseId={`${slug}-${index}`}
              onComplete={(xp) => handleExerciseComplete(xp, index)}
              lang={lang}
            />
          ))}
        </section>
      )}
    </div>
  );
}
