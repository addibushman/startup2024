import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Wardrobe from './components/Wardrobe';
import Friends from './components/Friends';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">As If Wardrobe<sup>&reg;</sup></a>
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/wardrobe" className="nav-link">Wardrobe</Link>
              <Link to="/friends" className="nav-link">Friends</Link>
              <Link to="/about" className="nav-link">About</Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

