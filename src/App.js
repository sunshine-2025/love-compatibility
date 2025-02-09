import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home-page/index';
import ResultPage from './result-analysis-page/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result-analysis-page" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
