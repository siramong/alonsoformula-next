export type Language = "es" | "ca" | "gl";

export interface ContentSection {
  type: "text" | "image" | "list" | "heading";
  content?: string;
  src?: string;
  alt?: string;
  items?: string[];
  level?: number;
}

export interface ExerciseOption {
  id: string;
  text: string;
}

export interface Exercise {
  type: "multiple_choice" | "true_false";
  question: string;
  options: ExerciseOption[];
  correctAnswer: string;
  explanation?: string;
  xpReward?: number;
}

export interface TopicContent {
  title: string;
  description: string;
  sections: ContentSection[];
  exercises?: Exercise[];
}

export interface UserProgress {
  totalXP: number;
  completedExercises: string[];
  topicProgress: Record<string, number>;
}
