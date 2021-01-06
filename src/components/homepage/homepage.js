import React from "react";
import Banner from "./banner/banner";
import "./homepage.scss";
function Homepage() {
  return (
    <div className="homepage">
      <Banner />
      <div className="whyus">
        <h3>Why us</h3>
        <div className="whyus-grid">
          <div className="whyus-card">
            <h2>Get More Visibility</h2>
            <p>
              Ea nulla elit incididunt qui nostrud irure. Dolore voluptate
              labore velit do laboris veniam .
            </p>
          </div>
          <div className="whyus-card">
            <h2>Organize Your Candidates</h2>
            <p>
              Ea nulla elit incididunt qui nostrud irure. Dolore voluptate
              labore velit do laboris
            </p>
          </div>
          <div className="whyus-card">
            <h2>Verify their Ability</h2>
            <p>
              Ea nulla elit incididunt qui nostrud irure. Dolore voluptate
              labore velit do laboris .
            </p>
          </div>
        </div>
      </div>
      <div className="company"></div>
    </div>
  );
}

export default Homepage;
