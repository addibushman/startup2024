import React from 'react';
import CurrentOutfit from '../public/currentOutfit.png';

export const Wardrobe = () => {
    return (
        <div className="leopard-bg">
          <main className="container-fluid text-center">
            <div className="content-section">
              <h2 className="mt-4">My Closet</h2>
              <div id="user-info" className="mb-4">
                <p>Welcome, <span id="username">user</span>!</p>
              </div>
              <div id="outfit-display" className="mb-4">
              <img src={CurrentOutfit} alt="Current Outfit" />;
              </div>
              <div id="wardrobe-controls" className="mb-4">
                <button id="prev-item" className="btn btn-primary control-button">Previous Item</button>
                <button id="next-item" className="btn btn-primary control-button">Next Item</button>
                <button id="save-outfit" className="btn btn-success control-button">Save Outfit</button>
                <button id="share-outfit" className="btn btn-info control-button">Share Outfit</button>
              </div>
              <div id="upload-section">
                <h3>Add to Your Wardrobe</h3>
                <div className="input-group mb-3">
                  <input type="file" className="form-control" id="upload-item" accept="image/*" />
                  <button className="btn btn-outline-secondary" type="button" id="upload-button">Upload</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    };
