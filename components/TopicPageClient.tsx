"use client";

import { useEffect, useMemo, useState } from "react";
import ExerciseCard from "@/components/ExerciseCard";
import ProgressBar from "@/components/ProgressBar";
import ContentRenderer from "@/components/ContentRenderer";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import UiProgressBar from "@/components/ui/ProgressBar";
import type { TopicContent } from "@/lib/types";
import { addXP, isExerciseCompleted, markExerciseComplete } from "@/lib/utils";

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
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [completedCount, setCompletedCount] = useState<number>(0);

  const totalExercises = useMemo(
    () => content.exercises?.length ?? 0,
    [content.exercises]
  );

  const handleExerciseComplete = (xp: number, exerciseIndex: number) => {
    const exerciseId = `${slug}-${exerciseIndex}`;
    markExerciseComplete(exerciseId);
    addXP(xp);
    // Trigger ProgressBar re-render
    setRefreshKey((prev) => prev + 1);
    setCompletedCount(
      (prev) => Math.min(prev + 1, content.exercises?.length ?? prev)
    );
  };

  useEffect(() => {
    if (!content.exercises) return;
    const completed = content.exercises.filter((_, index) =>
      isExerciseCompleted(`${slug}-${index}`)
    ).length;
    setCompletedCount(completed);
  }, [content.exercises, slug, refreshKey]);

  return (
    <div className="space-y-8">
      <ProgressBar lang={lang} key={refreshKey} />

      <Card className="p-6 sm:p-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            {lang === "es" && "Tema"}
            {lang === "ca" && "Tema"}
            {lang === "gl" && "Tema"}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            {content.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            {content.description}
          </p>
        </div>

        <div className="mt-8">
          <ContentRenderer sections={content.sections} />
        </div>
      </Card>

      {content.exercises && content.exercises.length > 0 && (
        <Section
          title={
            lang === "es"
              ? "Ejercicios"
              : lang === "ca"
              ? "Exercicis"
              : "Exercicios"
          }
          description={
            lang === "es"
              ? "Practica con ejercicios interactivos."
              : lang === "ca"
              ? "Practica amb exercicis interactius."
              : "Practica con exercicios interactivos."
          }
        >
          <Card className="p-5 sm:p-6">
            <UiProgressBar
              label={
                lang === "es"
                  ? "Progreso de ejercicios"
                  : lang === "ca"
                  ? "Progrés d'exercicis"
                  : "Progreso de exercicios"
              }
              value={completedCount}
              max={totalExercises}
              valueLabel={`${completedCount}/${totalExercises}`}
              helperText={
                lang === "es"
                  ? "Completa todos para ganar XP extra."
                  : lang === "ca"
                  ? "Completa'ls tots per guanyar XP extra."
                  : "Completa todos para gañar XP extra."
              }
            />
          </Card>

          <div className="space-y-6">
            {content.exercises.map((exercise, index) => (
              <ExerciseCard
                key={index}
                exercise={exercise}
                exerciseId={`${slug}-${index}`}
                onComplete={(xp) => handleExerciseComplete(xp, index)}
                lang={lang}
              />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
