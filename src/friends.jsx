import React, { useState } from 'react';
import winterOutfit from '../public/winterOutfit.png';
import winterOutfit2 from '../public/winterOutfit2.png';

export const Friends = () => {
  const [likesOutfit1, setLikesOutfit1] = useState(0);
  const [likesOutfit2, setLikesOutfit2] = useState(0);

 
  const likeOutfit1 = () => setLikesOutfit1(likesOutfit1 + 1);
  const likeOutfit2 = () => setLikesOutfit2(likesOutfit2 + 1);

  return (
    <div className="leopard-bg">
      <main className="container-fluid text-center">
        <div className="content-section">
          <h2 className="mt-4">Friends' Outfits</h2>

          
          <div id="friends-feed" className="row">
            <div className="col-md-6 mb-4">
              <div className="friend-outfit card">
                <img
                  src={'winterOutfit.png'}
                  alt="Winter Outfit 1"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">Dionne's fabulous look!</p>
                  <button onClick={likeOutfit1} className="btn btn-warning">
                    Like {likesOutfit1}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="friend-outfit card">
                <img
                  src={'winterOutfit2.png'}
                  alt="Winter Outfit 2"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">Tai's cool ensemble!</p>
                  <button onClick={likeOutfit2} className="btn btn-warning">
                    Like {likesOutfit2}
                  </button>
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
