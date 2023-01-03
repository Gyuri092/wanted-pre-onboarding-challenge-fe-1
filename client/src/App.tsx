import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Auth from './pages/Auth';
import Main from './pages/Main';
import Todo from './pages/Todo';

function App() {
  return (
    <>
      <Reset />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/todos" element={<Todo />} />
          <Route path="/todos/:id" element={<Todo />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
