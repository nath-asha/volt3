// src/utils/chatbot.ts
const predefinedAnswers: { [key: string]: string } = {
    'hello': 'Hello! How can I assist you?',
    'how are you': "I'm just a chatbot, but I'm here to help you!",
    'show me projects': 'please contact abc@gmail.com',
  };
  
  export function getChatbotResponse(input: string): string {
    const lowerInput = input.toLowerCase();
    return predefinedAnswers[lowerInput] || "I'm not sure how to respond to that.";
  }
  