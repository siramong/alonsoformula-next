"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
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

  const langPath = lang === "es" ? "/es" : `/${lang}`;

  return (
    <div className="min-h-screen relative">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full particle opacity-30"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-pink-500 rounded-full particle opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-cyan-500 rounded-full particle opacity-30" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href={langPath} className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all hover:scale-110">
              ⚗️
            </div>
            <div>
              <span className="font-black text-2xl text-white tracking-tight">Alonsoformula</span>
              <div className="text-xs text-purple-400 font-semibold">Química Orgánica</div>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Link href={`${langPath}/topics`} className="text-purple-400 hover:text-white font-medium transition-colors">
              {lang === "es" ? "Temas" : lang === "ca" ? "Temes" : "Temas"}
            </Link>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-400">
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded">{lang.toUpperCase()}</span>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <ProgressBar lang={lang} key={refreshKey} />

        {/* Topic Content */}
        <div className="card-glass p-8 sm:p-12 rounded-3xl">
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-widest text-purple-400">
                {lang === "es" && "📖 Tema"}
                {lang === "ca" && "📖 Tema"}
                {lang === "gl" && "📖 Tema"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              {content.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              {content.description}
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <ContentRenderer sections={content.sections} />
          </div>
        </div>

        {/* Exercises Section */}
        {content.exercises && content.exercises.length > 0 && (
          <div>
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                {lang === "es" ? "Ejercicios" : lang === "ca" ? "Exercicis" : "Exercicios"} 
                <span className="text-gradient"> Interactivos</span>
              </h2>
              <p className="text-xl text-gray-300">
                {lang === "es"
                  ? "Practica con ejercicios interactivos y gana XP."
                  : lang === "ca"
                  ? "Practica amb exercicis interactius i guanya XP."
                  : "Practica con exercicios interactivos e gaña XP."}
              </p>
            </div>

            <div className="card-glass p-6 sm:p-8 rounded-3xl mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-purple-300 uppercase tracking-wider">
                  {lang === "es"
                    ? "Progreso de ejercicios"
                    : lang === "ca"
                    ? "Progrés d'exercicis"
                    : "Progreso de exercicios"}
                </span>
                <span className="text-2xl font-black text-white">
                  {completedCount}/{totalExercises}
                </span>
              </div>
              <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${(completedCount / totalExercises) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                {lang === "es"
                  ? "Completa todos para ganar XP extra."
                  : lang === "ca"
                  ? "Completa'ls tots per guanyar XP extra."
                  : "Completa todos para gañar XP extra."}
              </p>
            </div>

            <div className="space-y-6">{content.exercises.map((exercise, index) => (
                <ExerciseCard
                  key={index}
                  exercise={exercise}
                  exerciseId={`${slug}-${index}`}
                  onComplete={(xp) => handleExerciseComplete(xp, index)}
                  lang={lang}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-xl bg-slate-900/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold shadow-lg">
                ⚗️
              </div>
              <div>
                <div className="font-bold text-white">Alonsoformula</div>
                <div className="text-xs text-gray-400">Química Orgánica</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-1">
                © 2026 Alonsoformula. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs">
                Hecho con <span className="text-pink-500">❤️</span> para estudiantes de química
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
