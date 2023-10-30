"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/Chatbot.tsx
const react_1 = require("react");
const chatbot_1 = require("../utils/chatbot");
require("./Chatbot.css"); // Import the CSS file at the top of your Chatbot.tsx
require("./Chatbot.css"); // Import the CSS file at the top of your Chatbot.tsx
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
    return className = "chatbot" >
        className;
    "chatbot-chat" >
        className;
    "chatbot-response" >
        { response } && Chatbot;
    {
        response;
    }
    /div>}
        < /div>
        < div;
    className = "chatbot-input" >
        type;
    "text";
    value = { input };
    onChange = { handleInputChange };
    placeholder = "Your message..."
        /  >
        onClick;
    {
        handleChatbotSubmit;
    }
     > Send < /button>
        < /div>
        < /div>
        < /div>;
};
;
;
exports.default = Chatbot;
