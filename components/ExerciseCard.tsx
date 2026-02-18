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
    <Card gradient className="p-8 sm:p-10 animate-slide-up">
      <div className="space-y-3 mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-primary-600">
          {t.selectAnswer}
        </p>
        <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
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
          <PrimaryButton
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="w-full"
          >
            {t.submit}
          </PrimaryButton>
        </div>
      ) : (
        <div className="mt-8 space-y-6 animate-fade-in" aria-live="polite">
          <div
            className={`rounded-3xl border-2 px-6 py-6 backdrop-blur ${
              isCorrect
                ? "border-success-300 bg-success-50 shadow-lg"
                : "border-warning-300 bg-warning-50 shadow-lg"
            }`}
          >
            <p
              className={`text-xl font-black ${
                isCorrect ? "text-success-900" : "text-warning-900"
              }`}
            >
              {isCorrect ? t.correct : t.incorrect}
            </p>
            {exercise.explanation && (
              <div className="mt-4 space-y-2">
                <p className="font-bold text-sm text-gray-800">{t.explanation}:</p>
                <p className="text-gray-800 leading-relaxed">
                  {exercise.explanation}
                </p>
              </div>
            )}
            {isCorrect && (
              <div className="mt-4 flex items-center gap-2 text-success-900 font-bold">
                <span className="text-2xl">⭐</span>
                <span>+{exercise.xpReward || 10} {t.earnedXP}</span>
              </div>
            )}
          </div>

          {!isCorrect && (
            <SecondaryButton onClick={handleReset} className="w-full">
              {t.tryAgain}
            </SecondaryButton>
          )}
        </div>
      )}
    </Card>
  );
}
