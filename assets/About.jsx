import React from 'react';

const About = () => {
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
            <img src="placeholder.png" alt="As If Wardrobe App" className="img-fluid" />
          </div>
          <p>
            "As If Wardrobe" is a wardrobe app, allowing one to scroll through different outfit options without
            shuffling through your clothes. We allow you to send your outfit ideas to your friends to help you pick the right one.
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
