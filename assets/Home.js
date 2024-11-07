import React from 'react';

const Home = () => {
  return (
    <div className="leopard-bg">
      <main className="container-fluid text-center">
        <div className="content-section">
          <h1>Welcome to As If Wardrobe</h1>
          <p>Your '90s inspired digital closet</p>
          <form method="get" action="/wardrobe">
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input className="form-control" type="text" placeholder="email@email.com" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🔒</span>
              <input className="form-control" type="password" placeholder="password" />
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">Login</button>
              <button type="submit" className="btn btn-secondary">Create Account</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
