// File: src/components/ChatArea.js
import React, { useState } from 'react';
import { FaPlus, FaSearch, FaLightbulb } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const ChatArea = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      console.log('Message sent:', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white">

      {/* Top bar */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <span className="font-semibold text-lg">ChatGPT</span>
      </div>

      {/* Middle content */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start p-6">
        <div className="text-center w-full max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6">What can I help with?</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg cursor-pointer transition">
              <div className="flex items-center gap-3">
                <FaSearch className="text-gray-300 text-xl" />
                <div>
                  <p className="font-semibold">Search</p>
                  <p className="text-xs text-gray-400 mt-1">Reason</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg cursor-pointer transition">
              <div className="flex items-center gap-3">
                <FaLightbulb className="text-gray-300 text-xl" />
                <div>
                  <p className="font-semibold">Deep Research</p>
                  <p className="text-xs text-gray-400 mt-1">Create image</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Chat input */}
      <div className="p-4 border-t border-gray-700">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex items-center bg-gray-700 rounded-lg p-2">
            <button
              type="button"
              className="flex items-center justify-center h-10 w-10 text-xl bg-gray-600 hover:bg-gray-500 rounded-lg text-gray-300"
            >
              <FaPlus  size={15}/> 
            </button>

            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ask anything..."
              className="flex-1 mx-2 bg-transparent text-white outline-none text-sm placeholder-gray-400"
            />

            <button
              type="submit"
              disabled={!inputValue.trim()}
              className={`flex items-center justify-center h-10 w-10 rounded-lg ${inputValue.trim()
                  ? 'bg-blue-600 hover:bg-blue-500 text-white'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
            >
              <FiSend />
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default ChatArea;
