import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export const Home = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');


  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    const data = await response.json();
    console.log(data.message);
    navigate('/wardrobe');
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data.message);
    navigate('/wardrobe');
  };

  return (
    <div className="leopard-bg">
      <main className="container-fluid text-center">
        <div className="content-section">
          <h1>Welcome to As If Wardrobe</h1>
          <p>Your '90s inspired digital closet</p>

          
          <p>{message}</p>

          
          <form>
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input className="form-control" type="text" id="email" placeholder="email@email.com" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🔒</span>
              <input className="form-control" type="password" id="password" placeholder="password" />
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