"use client";

import { useState } from "react";
import type { Exercise } from "@/lib/types";
import Card from "@/components/ui/Card";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import ExerciseOption from "@/components/ui/ExerciseOption";

interface ExerciseCardProps {
  exercise: Exercise;
  exerciseId: string;
  onComplete: (xp: number) => void;
  lang: "es" | "ca" | "gl";
}

const translations = {
  es: {
    submit: "Enviar respuesta",
    correct: "¡Correcto! 🎉",
    incorrect: "Incorrecto 😅",
    tryAgain: "Intentar de nuevo",
    nextExercise: "Siguiente ejercicio",
    explanation: "Explicación",
    selectAnswer: "Selecciona una respuesta",
    earnedXP: "XP ganados",
  },
  ca: {
    submit: "Enviar resposta",
    correct: "Correcte! 🎉",
    incorrect: "Incorrecte 😅",
    tryAgain: "Tornar a intentar",
    nextExercise: "Següent exercici",
    explanation: "Explicació",
    selectAnswer: "Selecciona una resposta",
    earnedXP: "XP guanyats",
  },
  gl: {
    submit: "Enviar resposta",
    correct: "Correcto! 🎉",
    incorrect: "Incorrecto 😅",
    tryAgain: "Intentar de novo",
    nextExercise: "Seguinte exercicio",
    explanation: "Explicación",
    selectAnswer: "Selecciona unha resposta",
    earnedXP: "XP gañados",
  },
};

export default function ExerciseCard({
  exercise,
  exerciseId,
  onComplete,
  lang,
}: ExerciseCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const t = translations[lang];

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    setIsSubmitted(true);
    const correct = selectedAnswer === exercise.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      const xpReward = exercise.xpReward || 10;
      onComplete(xpReward);
    }
  };

  const handleReset = () => {
    setSelectedAnswer("");
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <div className="card-glass p-8 sm:p-10 rounded-3xl animate-slide-up">
      <div className="space-y-3 mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-purple-400">
          {t.selectAnswer}
        </p>
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          {exercise.question}
        </h3>
      </div>

      <fieldset className="mt-8 space-y-4">
        <legend className="sr-only">{exercise.question}</legend>
        {exercise.options.map((option) => {
          const optionState = isSubmitted
            ? option.id === exercise.correctAnswer
              ? "correct"
              : option.id === selectedAnswer
              ? "incorrect"
              : "default"
            : "default";

          return (
            <ExerciseOption
              key={option.id}
              id={`${exerciseId}-${option.id}`}
              name={exerciseId}
              value={option.id}
              label={option.text}
              checked={selectedAnswer === option.id}
              disabled={isSubmitted}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              state={optionState}
            />
          );
        })}
      </fieldset>

      {!isSubmitted ? (
        <div className="mt-8">
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transform hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
          >
            {t.submit}
          </button>
        </div>
      ) : (
        <div className="mt-8 space-y-6 animate-fade-in" aria-live="polite">
          <div
            className={`rounded-3xl border-2 px-8 py-6 backdrop-blur ${
              isCorrect
                ? "border-green-500/50 bg-green-500/10"
                : "border-red-500/50 bg-red-500/10"
            }`}
          >
            <p
              className={`text-2xl font-black mb-4 ${
                isCorrect ? "text-green-400" : "text-red-400"
              }`}
            >
              {isCorrect ? t.correct : t.incorrect}
            </p>
            {exercise.explanation && (
              <div className="mt-4 space-y-2">
                <p className="font-bold text-sm text-gray-300">{t.explanation}:</p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {exercise.explanation}
                </p>
              </div>
            )}
            {isCorrect && (
              <div className="mt-6 flex items-center gap-3 text-yellow-400 font-bold text-lg">
                <span className="text-3xl">⭐</span>
                <span>+{exercise.xpReward || 10} {t.earnedXP}</span>
              </div>
            )}
          </div>

          {!isCorrect && (
            <button
              onClick={handleReset}
              className="w-full px-8 py-4 bg-slate-800/50 backdrop-blur text-white font-bold rounded-2xl border-2 border-purple-500/30 hover:border-purple-500/60 hover:bg-slate-800/70 transform hover:scale-105 active:scale-95 transition-all"
            >
              {t.tryAgain}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
