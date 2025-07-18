import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectShowcase from './components/ProjectShowcase';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/showcase" element={<ProjectShowcase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;