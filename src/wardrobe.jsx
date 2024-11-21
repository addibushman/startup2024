import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import winterOutfit from '../public/winterOutfit.png';
export const Wardrobe = () => {
  const [outfit, setOutfit] = useState(winterOutfit);
  const [friendsList, setFriendsList] = useState([
    { id: 1, name: 'Dionne' },
    { id: 2, name: 'Tai' },
    { id: 3, name: 'Cher' },
  ]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleShareOutfit = () => {
    if (selectedFriend) {
      alert(`Outfit shared with ${selectedFriend.name}`);
      setIsModalOpen(false);
    } else {
      alert('Please select a friend to share the outfit with.');
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
            <img
              src={outfit}
              alt="Current Outfit"
              className="img-fluid"
            />
          </div>

          <div id="wardrobe-controls" className="mb-4">
            <button id="prev-item" className="btn btn-primary control-button">
              Previous Item
            </button>
            <button id="next-item" className="btn btn-primary control-button">
              Next Item
            </button>
            <button id="save-outfit" className="btn btn-success control-button">
              Save Outfit
            </button>
            {/* Share Outfit Button */}
            <button
              id="share-outfit"
              className="btn btn-info control-button"
              onClick={() => setIsModalOpen(true)}
            >
              Share Outfit
            </button>
          </div>

          {isModalOpen && (
            <div className="modal" style={{ display: 'block' }}>
              <div className="modal-content">
                <h3>Select a Friend to Share Outfit</h3>
                <ul>
                  {friendsList.map((friend) => (
                    <li key={friend.id}>
                      <button onClick={() => setSelectedFriend(friend)}>
                        {friend.name}
                      </button>
                    </li>
                  ))}
                </ul>
                <button onClick={handleShareOutfit}>Share</button>
                <button onClick={() => setIsModalOpen(false)}>Close</button>
              </div>
            </div>
          )}

          <div id="upload-section">
            <h3>Add to Your Wardrobe</h3>
            <div className="input-group mb-3">
              <input type="file" className="form-control" id="upload-item" accept="image/*" />
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
