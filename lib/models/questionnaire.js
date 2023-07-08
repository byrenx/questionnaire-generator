"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = exports.QuestionDifficulty = void 0;
var QuestionDifficulty;
(function (QuestionDifficulty) {
    QuestionDifficulty["REMEMBERING"] = "remembering";
    QuestionDifficulty["UNDERSTANDING"] = "understanding";
    QuestionDifficulty["APPLYING"] = "applying";
    QuestionDifficulty["ANALYZING"] = "analyzing";
    QuestionDifficulty["EVALUATING"] = "evaluating";
    QuestionDifficulty["CREATING"] = "creating";
})(QuestionDifficulty = exports.QuestionDifficulty || (exports.QuestionDifficulty = {}));
class Question {
    constructor(data) {
        this.question = data.question || '';
        this.difficulty = data.difficulty || QuestionDifficulty.REMEMBERING;
        this.choices = data.choices || [];
    }
}
exports.Question = Question;
