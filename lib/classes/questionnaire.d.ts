export declare type QuestionDifficulty = "remembering" | "understanding" | "applying" | "evaluating";
export interface Question {
    question: string;
    difficulty: QuestionDifficulty;
    choices: string[];
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
