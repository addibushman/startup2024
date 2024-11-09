import React from 'react';

const Wardrobe = () => {
  return (
    <div className="leopard-bg">
      <main className="container-fluid text-center">
        <div className="content-section">
          <h2 className="mt-4">My Closet</h2>
          <div id="user-info" className="mb-4">
            <p>Welcome, <span id="username">user</span>!</p>
          </div>
          <div id="outfit-display" className="mb-4">
            <img src="currentOutfit.png" alt="Current Outfit" className="img-fluid" />
          </div>
          <div id="wardrobe-controls" className="mb-4">
            <button id="prev-item" className="btn btn-primary">Previous Item</button>
            <button id="next-item" className="btn btn-primary">Next Item</button>
            <button id="save-outfit" className="btn btn-success">Save Outfit</button>
            <button id="share-outfit" className="btn btn-info">Share Outfit</button>
          </div>
          <div id="upload-section">
            <h3>Add to Your Wardrobe</h3>
            <div className="input-group mb-3">
              <input type="file" className="form-control" accept="image/*" />
              <button className="btn btn-outline-secondary" type="button">Upload</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wardrobe;
