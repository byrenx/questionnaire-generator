export declare enum QuestionDifficulty {
    REMEMBERING = "remembering",
    UNDERSTANDING = "understanding",
    APPLYING = "applying",
    ANALYZING = "analyzing",
    EVALUATING = "evaluating",
    CREATING = "creating"
}
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
