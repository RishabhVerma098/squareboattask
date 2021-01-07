import React from "react";
import "./banner.scss";
import Header from "./header";
import Photo from "./photo.jpg";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className="banner">
      <Header />
      <div className="text">
        <h1>Welcome to</h1>
        <h1>MyJobs</h1>
        <Link to="/candidate">
          <button>Get Started</button>
        </Link>
      </div>
      <img src={Photo} alt="im"></img>
    </div>
  );
}

export default Banner;
