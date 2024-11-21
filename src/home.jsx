import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export const Home = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  // Fetch data from the backend
  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);  // Set message from the API response
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/wardrobe');
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    
    navigate('/wardrobe');
  };

  return (
    <div className="leopard-bg">
      <main className="container-fluid text-center">
        <div className="content-section">
          <h1>Welcome to As If Wardrobe</h1>
          <p>Your '90s inspired digital closet</p>
          <form>
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input
                className="form-control"
                type="text"
                id="email"
                placeholder="email@email.com"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🔒</span>
              <input
                className="form-control"
                type="password"
                id="password"
                placeholder="password"
              />
            </div>
            <div className="d-flex justify-content-between">
            
              <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            
              <button type="submit" className="btn btn-secondary" onClick={handleCreateAccount}>
                Create Account
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
