import React from "react";
import "./banner.scss";
import Header from "./header";
function Banner() {
  return (
    <div className="banner">
      <Header />
      <div className="text">
        <h1>Welcome to</h1>
        <h1>MyJobs</h1>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Banner;
