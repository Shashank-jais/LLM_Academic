// File: src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        {/* ChatArea (take remaining space) */}
        <div className="flex-1 overflow-auto bg-black text-white">
          <ChatArea />
        </div>

      </div>
    </Router>
  );
}

export default App;