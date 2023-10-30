"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChatbotResponse = void 0;
// src/utils/chatbot.ts
const predefinedAnswers = {
    'hello': 'Hello! How can I assist you?',
    'how are you': "I'm just a chatbot, but I'm here to help you!",
    'show me projects': 'please contact abc@gmail.com',
};
function getChatbotResponse(input) {
    const lowerInput = input.toLowerCase();
    return predefinedAnswers[lowerInput] || "I'm not sure how to respond to that.";
}
exports.getChatbotResponse = getChatbotResponse;
