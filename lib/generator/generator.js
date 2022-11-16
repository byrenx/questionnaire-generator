"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQuestionnaireSets = void 0;
const lodash_1 = require("lodash");
const generateQuestionnaireSets = (questions, config) => {
    // initialize output
    // generate grouping of questions by diffulty
    const generateQuestionDiffultyMap = () => {
        let questionsMapping = {};
        for (const question of questions) {
            if (!questionsMapping[question.difficulty])
                questionsMapping[question.difficulty] = [question];
            else
                questionsMapping[question.difficulty].push(question);
        }
        return questionsMapping;
    };
    const generateSingleSet = () => {
        const questionnairesMap = generateQuestionDiffultyMap();
        let questionnaires = [];
        const { distribution, itemsPerSet } = config;
        for (const key in distribution) {
            const items = itemsPerSet * (distribution[key] / 100);
            const randomQuestions = (0, lodash_1.sampleSize)(questionnairesMap[key], items);
            questionnaires.push(...randomQuestions);
        }
        return questionnaires;
    };
    let questionnaireSets = {};
    let setKey = 65; //A
    // iterate per set
    const { sets } = config;
    for (let index = 0; index < sets; index++) {
        const key = String.fromCharCode(setKey);
        questionnaireSets[key] = generateSingleSet();
        setKey += 1;
    }
    return questionnaireSets;
};
exports.generateQuestionnaireSets = generateQuestionnaireSets;
