import React from 'react';

export const About = () => {
  return (
    <div className="leopard-bg">
      <main className="container-fluid text-center">
        <div className="content-section">
          <h2 className="mt-4">About As If Wardrobe</h2>
          <div id="app-description">
            <p>
              As If Wardrobe brings the iconic closet app from the 1995 movie 'Clueless' to life in a modern way.
              Stay true to the '90s theme while planning your outfits seamlessly without sorting through your wardrobe manually.
            </p>
            <p>
              Plan your outfits for the week, collaborate with friends, and channel your inner Cher!
            </p>
          </div>
          <div id="app-image" className="my-4">
            <img src="./assets/placeholder.png" alt="As If Wardrobe App" className="img-fluid" />
          </div>
          <p>
            "As If Wardrobe" is a wardrobe app, allowing one to scroll through different outfit options without
            shuffling through your clothes. You simply upload pictures of your wardrobe, and create your outfit.
            We also allow you to send your outfit ideas to your friends to help you pick the right one.
          </p>
          <p>
            "As If Wardrobe" comes from the iconic 90's movie, Clueless, where every girl dreamed they could have a closet
            and wardrobe app like Cher. Staying true to the 90's theme, "As If Wardrobe" will feature leopard print, big play and pause buttons,
            and be totally gorg!
          </p>
          <div id="quote" className="mt-4 quote-box">
            <div className="quote">"Ugh, as if!"</div>
            <div className="author">Cher Horowitz</div>
          </div>
        </div>
      </main>
    </div>
  );
};


export default About;
