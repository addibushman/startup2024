import React from 'react';

const Friends = () => {
  return (
    <div className="leopard-bg">
      <main className="container-fluid text-center">
        <div className="content-section">
          <h2 className="mt-4">Friends' Outfits</h2>
          <div id="friends-feed" className="row">
            <div className="col-md-6 mb-4">
              <div className="friend-outfit card">
                <img src="winterOutfit.png" alt="Friend's Outfit" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">Dionne's fabulous look!</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="friend-outfit card">
                <img src="winterOutfit2.png" alt="Friend's Outfit" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">Tai's cool ensemble!</p>
                </div>
              </div>
            </div>
          </div>
          <div id="outfit-reactions" className="mt-4">
            <h3>Recent Activity</h3>
            <ul className="list-group">
              <li className="list-group-item">Dionne liked your outfit</li>
              <li className="list-group-item">Tai commented on your look</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Friends;
