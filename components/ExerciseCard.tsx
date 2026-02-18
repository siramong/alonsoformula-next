"use client";

import { useState } from "react";
import type { Exercise } from "@/lib/types";

interface ExerciseCardProps {
  exercise: Exercise;
  exerciseId: string;
  onComplete: (xp: number) => void;
  lang: "es" | "ca" | "gl";
}

const translations = {
  es: {
    submit: "Enviar respuesta",
    correct: "¡Correcto!",
    incorrect: "Incorrecto",
    tryAgain: "Intentar de nuevo",
    nextExercise: "Siguiente ejercicio",
    explanation: "Explicación",
    selectAnswer: "Selecciona una respuesta",
  },
  ca: {
    submit: "Enviar resposta",
    correct: "Correcte!",
    incorrect: "Incorrecte",
    tryAgain: "Tornar a intentar",
    nextExercise: "Següent exercici",
    explanation: "Explicació",
    selectAnswer: "Selecciona una resposta",
  },
  gl: {
    submit: "Enviar resposta",
    correct: "Correcto!",
    incorrect: "Incorrecto",
    tryAgain: "Intentar de novo",
    nextExercise: "Seguinte exercicio",
    explanation: "Explicación",
    selectAnswer: "Selecciona unha resposta",
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
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        {exercise.question}
      </h3>

      <div className="space-y-3 mb-4">
        {exercise.options.map((option) => (
          <label
            key={option.id}
            className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedAnswer === option.id
                ? "border-primary-500 bg-primary-50"
                : "border-gray-300 hover:border-primary-300"
            } ${isSubmitted ? "pointer-events-none" : ""}`}
          >
            <input
              type="radio"
              name={exerciseId}
              value={option.id}
              checked={selectedAnswer === option.id}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={isSubmitted}
              className="mr-3"
            />
            <span className="text-gray-700">{option.text}</span>
          </label>
        ))}
      </div>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={!selectedAnswer}
          className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {t.submit}
        </button>
      ) : (
        <div>
          <div
            className={`p-4 rounded-lg mb-4 ${
              isCorrect
                ? "bg-green-100 border border-green-300"
                : "bg-red-100 border border-red-300"
            }`}
          >
            <p
              className={`font-semibold ${
                isCorrect ? "text-green-800" : "text-red-800"
              }`}
            >
              {isCorrect ? t.correct : t.incorrect}
            </p>
            {exercise.explanation && (
              <p className="mt-2 text-gray-700">
                <strong>{t.explanation}:</strong> {exercise.explanation}
              </p>
            )}
          </div>

          {!isCorrect && (
            <button
              onClick={handleReset}
              className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              {t.tryAgain}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
