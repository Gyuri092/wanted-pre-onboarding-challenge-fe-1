import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Auth from './pages/Auth';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Reset />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
