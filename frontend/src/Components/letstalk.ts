// src/components/Chatbot.tsx
import React, { useState } from 'react';
import { getChatbotResponse } from '../utils/chatbot';
import './Chatbot.css'; // Import the CSS file at the top of your Chatbot.tsx

const Chatbot: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleChatbotSubmit = () => {
    const chatbotResponse = getChatbotResponse(input);
    setResponse(chatbotResponse);
    setInput('');
  };

  return (
    <div className="chatbot">
      <div className="chatbot-chat">
        <div className="chatbot-response">
          {response && <div>Chatbot: {
            response}
          </div>}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Your message..."
          />
          <button onClick={handleChatbotSubmit}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
