import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ManifestoPage from './pages/ManifestoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manifiesto" element={<ManifestoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
