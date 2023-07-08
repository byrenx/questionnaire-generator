export enum QuestionDifficulty {
    REMEMBERING = 'remembering',
    UNDERSTANDING = 'understanding',
    APPLYING = 'applying',
    ANALYZING = 'analyzing',
    EVALUATING = 'evaluating',
    CREATING = 'creating'
}

export interface Question {
    question: string;
    difficulty: QuestionDifficulty;
    choices: string[];
}

export class Question {
    public constructor(data: Partial<Question>) {
        this.question = data.question || '';
        this.difficulty = data.difficulty || QuestionDifficulty.REMEMBERING;
        this.choices = data.choices || [];
    }
}

export interface QuestionnaireGeneratorConfig {
    sets: number;
    itemsPerSet: number;
    distribution: { [key: string]: number };
}
