import React from "react";
import "./home.scss";
import Header from "../../../components/homepage/banner/header";
function Home() {
  return (
    <div className="home">
      <div className="background">
        <Header />
      </div>
      <div className="container">
        <h2>Jobs for you</h2>
        {/* <div className="nojobs">
          <p>Your applied jobs will show here</p>
          <button>See all jobs</button>
        </div> */}
        <div className="job-grid">
          <div className="job-card">
            <h2>Title</h2>
            <p>
              Minim ut nulla mini Ut et Incididunt irure velit consequat
              dolor.occaecat velit dolore.Esse ad consequat veniam amet et
              nulla.
            </p>
            <div className="bottom-card">
              <p>Location</p>
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
