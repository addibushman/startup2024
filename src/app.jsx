import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'; // Import Router and necessary components
import { Home } from './home'; 
import { Wardrobe } from './wardrobe';
import { Friends } from './friends';
import { About } from './about';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'; 


function app() {
  return (
    <Router>
    
        
        <header className="container-fluid">
            <div className="navbar-brand">
              As If Wardrobe<sup>&reg;</sup>
            </div>
            <menu className="navbar-nav">
            
              <li className="nav-item">
                <NavLink className="nav-link" to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/wardrobe" activeClassName="active">
                  Wardrobe
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/friends" activeClassName="active">
                  Friends
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
            </menu>
        </header>

    
        <main>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/wardrobe" element={<Wardrobe />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer>
          <a href="https://github.com/addibushman/startup2024" target="_blank" rel="noopener noreferrer">
            link to Addisyn's GitHub
          </a>
        </footer>
    </Router>
  );
}

export default app;
