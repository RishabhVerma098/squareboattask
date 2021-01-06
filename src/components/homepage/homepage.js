import React from "react";
import Banner from "./banner/banner";
import "./homepage.scss";
function Homepage() {
  return (
    <div className="homepage">
      <Banner />
      <div className="whyus"></div>
      <div className="company"></div>
    </div>
  );
}

export default Homepage;
