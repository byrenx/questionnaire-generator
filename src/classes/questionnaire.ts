export type QuestionDifficulty = "easy" | "moderate" | "hard";

export type QuestionType = "multiple-choice" | "binary" | "open";

export interface Question {
  questionContent: string;
  difficulty: QuestionDifficulty;
  questionType: QuestionType;
  options?: string[];
}

export class Question {
  public constructor(data: Partial<Question>) {
    Object.assign(this, data);
  }
}

export interface QuestionnaireGeneratorConfig {
  sets: number;
  itemsPerSet: number;
  distribution: { [key: string]: number };
}
