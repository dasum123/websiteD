import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = (customText = input) => {
    if (customText.trim()) {
      const userMessage = { sender: 'user', text: customText };
      let botMessage;

      const lowerText = customText.toLowerCase();

      if (lowerText.includes('flight')) {
        botMessage = {
          sender: 'bot',
          text: (
            <span>
              Sure! You can book your flights on{' '}
              <a href="https://www.skyscanner.com" target="_blank" rel="noopener noreferrer">
                Skyscanner
              </a>.
            </span>
          ),
        };
      } else if (lowerText.includes('flix')) {
        botMessage = {
          sender: 'bot',
          text: (
            <span>
              Absolutely! Visit{' '}
              <a href="https://www.flixbus.com" target="_blank" rel="noopener noreferrer">
                FlixBus
              </a>{' '}
              to book your ticket.
            </span>
          ),
        };
      } else {
        botMessage = {
          sender: 'bot',
          text: 'I’m here to help! Can you clarify your question?',
        };
      }

      setMessages((prev) => [...prev, userMessage, botMessage]);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleQuickOption = (optionText) => {
    handleSendMessage(optionText);
  };

  // ✅ Clear function
  const handleClearMessages = () => {
    setMessages([
      { sender: 'bot', text: 'Hello! How can I assist you today?' },
    ]);
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen ? (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>Chat with Virtual Divi</span>
            <button className="minimize-btn" onClick={toggleChat}>_</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.sender}`}>
                {typeof message.text === 'string' ? <p>{message.text}</p> : <p>{message.text}</p>}
              </div>
            ))}

            {messages.length === 1 && (
              <div className="chat-quick-options">
                <button onClick={() => handleQuickOption('I need help with flight tickets')}>
                  ✈️ Flight Tickets
                </button>
                <button onClick={() => handleQuickOption('I need help with FlixBus tickets')}>
                  🚌 FlixBus Tickets
                </button>
              </div>
            )}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
            />
            <button onClick={() => handleSendMessage()}>Send</button>
            {/* ✅ Clear button */}
            <button onClick={handleClearMessages} className="clear-btn">Clear</button>
          </div>
        </div>
      ) : (
        <div className="chatbot-icon" onClick={toggleChat}>
          <img src="/chatbot-icon.jpg" alt="Chatbot" />
        </div>
      )}
    </div>
  );
}

export default Chatbot;
