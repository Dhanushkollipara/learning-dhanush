import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Todo from './Todo';
import Counter from './Counter';
import Params from './Params';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/params/:id" element={<Params />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
