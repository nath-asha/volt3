// src/components/Navbar.tsx
import React, { useState } from 'react';
import Chatbot from './Chatbot';

const Navbar = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  return (
    <nav>
      <div className='h_full'>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg back">
            <div className='navbar-brand head' id="Recipe">
              <a className='nav-link spaced' href='/' id='text'>Home</a>
              <a className='nav-link spaced' href='/Services' id='text'>Services</a>
              <a className='nav-link spaced' href='/Projects' id='text'>Projects</a>
              <a className='nav-link spaced' href='/About' id='text'>About</a>
              <a className='nav-link spaced' href='/Contact' id='text'>Contact</a>
            </div>
            <button onClick={toggleChatbot} id='chatbot-button'>Chatbot</button>
          </nav>
        </div>
      </div>
      {chatbotVisible && <Chatbot />}
    </nav>
  );
};

export default Navbar;
