import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="row">
        <div className="column left">
          <h1>Grow your Professional skill</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="column right">
          <div class="grid-container">
            <div class="grid-item"><img src="Homeimage.webp" className="image" alt="image"/></div>
            <div class="grid-item"><img src="Homeimage1.webp" className="image" alt="image1"/></div>
            {/* <div class="grid-item"><img src="Homeimage2.webp" className="image" alt="image2"/></div> */}
            {/* <div class="grid-item"><img src="Homeimage3.webp" className="image" alt="image3"/></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
