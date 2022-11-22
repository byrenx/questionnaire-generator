export type QuestionDifficulty =
  | "remembering"
  | "understanding"
  | "applying"
  | "evaluating";

export interface Question {
  question: string;
  difficulty: QuestionDifficulty;
  choices: string[];
}

export class Question {
  public constructor(data: Partial<Question>) {
    this.question = data.question || "";
    this.difficulty = data.difficulty || "remembering";
    this.choices = data.choices || [];
  }
}

export interface QuestionnaireGeneratorConfig {
  sets: number;
  itemsPerSet: number;
  distribution: { [key: string]: number };
}
