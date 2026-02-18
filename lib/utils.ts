import type { Language, UserProgress } from "./types";

const STORAGE_KEY = "alonsoformula_progress";

export function getProgress(): UserProgress {
  if (typeof window === "undefined") {
    return {
      totalXP: 0,
      completedExercises: [],
      topicProgress: {},
    };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading progress:", error);
  }

  return {
    totalXP: 0,
    completedExercises: [],
    topicProgress: {},
  };
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Error saving progress:", error);
  }
}

export function addXP(amount: number): void {
  const progress = getProgress();
  progress.totalXP += amount;
  saveProgress(progress);
}

export function markExerciseComplete(exerciseId: string): void {
  const progress = getProgress();
  if (!progress.completedExercises.includes(exerciseId)) {
    progress.completedExercises.push(exerciseId);
    saveProgress(progress);
  }
}

export function isExerciseCompleted(exerciseId: string): boolean {
  const progress = getProgress();
  return progress.completedExercises.includes(exerciseId);
}

export function updateTopicProgress(topicId: string, percentage: number): void {
  const progress = getProgress();
  progress.topicProgress[topicId] = percentage;
  saveProgress(progress);
}

export const languageNames: Record<Language, string> = {
  es: "Español",
  ca: "Català",
  gl: "Galego",
};

export const translations = {
  es: {
    home: "Inicio",
    topics: "Temas",
    exercises: "Ejercicios",
    progress: "Progreso",
    xp: "Puntos XP",
    correct: "¡Correcto!",
    incorrect: "Incorrecto",
    tryAgain: "Intentar de nuevo",
    nextExercise: "Siguiente ejercicio",
    complete: "Completado",
  },
  ca: {
    home: "Inici",
    topics: "Temes",
    exercises: "Exercicis",
    progress: "Progrés",
    xp: "Punts XP",
    correct: "Correcte!",
    incorrect: "Incorrecte",
    tryAgain: "Tornar a intentar",
    nextExercise: "Següent exercici",
    complete: "Completat",
  },
  gl: {
    home: "Inicio",
    topics: "Temas",
    exercises: "Exercicios",
    progress: "Progreso",
    xp: "Puntos XP",
    correct: "Correcto!",
    incorrect: "Incorrecto",
    tryAgain: "Intentar de novo",
    nextExercise: "Seguinte exercicio",
    complete: "Completado",
  },
};
