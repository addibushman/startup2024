import React, { useState, useEffect } from 'react';

export const Wardrobe = () => {
  // Initialize the wardrobe with multiple outfit images (you can add more images)
  const [wardrobeItems, setWardrobeItems] = useState([
    'currentOutfit.png',
    'wardrobeOutfit2.png',
    'wardrobeOutfit3.png',
    'wardrobeOutfit4.png',
    'wardrobeOutfit5.png',
    'wardrobeOutfit6.png'
  ]);
  const [currentOutfitIndex, setCurrentOutfitIndex] = useState(0); // Index to track the current outfit being shown

  // Handle previous item navigation
  const handlePrevItem = () => {
    setCurrentOutfitIndex(
      (prevIndex) => (prevIndex - 1 + wardrobeItems.length) % wardrobeItems.length
    );
  };

  // Handle next item navigation
  const handleNextItem = () => {
    setCurrentOutfitIndex(
      (prevIndex) => (prevIndex + 1) % wardrobeItems.length
    );
  };

  // Handle save outfit functionality (implement your saving logic)
  const handleSaveOutfit = () => {
    alert('Outfit saved!');
    // Add logic to save the outfit, maybe to a backend or local storage
  };

  // Handle file upload functionality (upload new outfit)
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const newOutfitURL = URL.createObjectURL(file);
      setWardrobeItems((prevItems) => [...prevItems, newOutfitURL]); // Add the new outfit to wardrobe
    }
  };

  return (
    <div className="leopard-bg">
      <main className="container-fluid text-center">
        <div className="content-section">
          <h2 className="mt-4">My Closet</h2>
          <div id="user-info" className="mb-4">
            <p>Welcome, <span id="username">user</span>!</p>
          </div>
          <div id="outfit-display" className="mb-4">
            {/* Display the current outfit */}
            <img src={wardrobeItems[currentOutfitIndex]} alt="Current Outfit" />
          </div>
          <div id="wardrobe-controls" className="mb-4">
            <button
              id="prev-item"
              className="btn btn-primary control-button"
              onClick={handlePrevItem}
            >
              Previous Item
            </button>
            <button
              id="next-item"
              className="btn btn-primary control-button"
              onClick={handleNextItem}
            >
              Next Item
            </button>
            <button
              id="save-outfit"
              className="btn btn-success control-button"
              onClick={handleSaveOutfit}
            >
              Save Outfit
            </button>
            <button
              id="share-outfit"
              className="btn btn-info control-button"
            >
              Share Outfit
            </button>
          </div>
          <div id="upload-section">
            <h3>Add to Your Wardrobe</h3>
            <div className="input-group mb-3">
              <input
                type="file"
                className="form-control"
                id="upload-item"
                accept="image/*"
                onChange={handleFileUpload}
              />
              <button className="btn btn-outline-secondary" type="button" id="upload-button">
                Upload
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
