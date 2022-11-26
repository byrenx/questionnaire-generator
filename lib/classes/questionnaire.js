"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
class Question {
    constructor(data) {
        this.question = data.question || "";
        this.difficulty = data.difficulty || "remembering";
        this.choices = data.choices || [];
    }
}
exports.Question = Question;
