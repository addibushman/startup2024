import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Wardrobe from './Wardrobe';
import Friends from './Friends';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';

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

