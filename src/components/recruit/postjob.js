import React from "react";
import "./postjob.scss";
import Header from "../../components/homepage/banner/header";
function PostJob() {
  return (
    <div className="postajob">
      <div className="background">
        <Header />
      </div>
      <div className="form">
        <h2>Post a job</h2>
        <form>
          <label className="title">Job title</label>
          <input
            type="text"
            name="text"
            placeholder="Enter your job title"
          ></input>
          <label className="desciption">Description</label>
          <textarea placeholder="Enter job desciption"></textarea>
          <label className="title">Location</label>
          <input type="text" name="text" placeholder="Enter location"></input>
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
