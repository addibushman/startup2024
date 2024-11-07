import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Wardrobe from './components/Wardrobe';
import Friends from './components/Friends';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
