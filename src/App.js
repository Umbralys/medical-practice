import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MedicalPractice from './components/MedicalPractice';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MedicalPractice />} />
      </Routes>
    </Router>
  );
}

export default App;
