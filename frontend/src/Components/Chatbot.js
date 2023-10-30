"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/Chatbot.tsx
const react_1 = __importStar(require("react"));
const chatbot_1 = require("../utils/chatbot");
require("./chatbot.css"); // Import the CSS file at the top of your Chatbot.tsx
const Chatbot = () => {
    const [input, setInput] = (0, react_1.useState)('');
    const [response, setResponse] = (0, react_1.useState)('');
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    const handleChatbotSubmit = () => {
        const chatbotResponse = (0, chatbot_1.getChatbotResponse)(input);
        setResponse(chatbotResponse);
        setInput('');
    };
    return (react_1.default.createElement("div", { className: "chatbox" },
        react_1.default.createElement("div", { className: "chatbot-chat" },
            react_1.default.createElement("div", { className: "chatbot-response" }, response && react_1.default.createElement("div", { className: "chatbot-message" },
                "Chatbot: ",
                response)),
            react_1.default.createElement("div", { className: "chatbot-input" },
                react_1.default.createElement("input", { type: "text", className: "chatbot-input-field", value: input, onChange: handleInputChange, placeholder: "Your message..." }),
                react_1.default.createElement("button", { className: "chatbot-send-button", onClick: handleChatbotSubmit }, "Send")))));
};
exports.default = Chatbot;
