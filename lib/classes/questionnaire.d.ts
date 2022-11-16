export declare type QuestionDifficulty = "easy" | "moderate" | "hard";
export declare type QuestionType = "multiple-choice" | "binary" | "open";
export interface Question {
    questionContent: string;
    difficulty: QuestionDifficulty;
    questionType: QuestionType;
    options?: string[];
}
export declare class Question {
    constructor(data: Partial<Question>);
}
export interface QuestionnaireGeneratorConfig {
    sets: number;
    itemsPerSet: number;
    distribution: {
        [key: string]: number;
    };
}
