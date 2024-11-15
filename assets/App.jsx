import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'; // Import Router and necessary components
import { Home } from './home'; // Import pages from assets
import { Wardrobe } from './wardrobe';
import { Friends } from './friends';
import { About } from './about';
import 'bootstrap/dist/css/bootstrap.min.css'; // For Bootstrap styling
import './app.css'; // Custom app styles


function app() {
  return (
    <Router>
      <div className="body bg-dark text-light">
        {/* Header with Navigation */}
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <div className="navbar-brand">
              As If Wardrobe<sup>&reg;</sup>
            </div>
            <menu className="navbar-nav">
              {/* Navigation Links */}
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
          </nav>
        </header>

        {/* Main Content Area */}
        <main>
          <Routes>
            {/* Define Routes for each page */}
            <Route path="/" element={<Home />} />
            <Route path="/wardrobe" element={<Wardrobe />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-muted">
          <div className="container-fluid">
            <span className="text-reset">Author Name(s)</span>
            <a className="text-reset" href="https://github.com/your-repo">
              Source
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default app;
