import React from "react";
import "./banner.scss";
function Banner() {
  return (
    <div className="banner">
      <div className="header">
        <h1>MyJobs</h1>
        <button>Login/Signup</button>
      </div>
      <div className="text">
        <h1>Welcome to</h1>
        <h1>MyJobs</h1>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Banner;
