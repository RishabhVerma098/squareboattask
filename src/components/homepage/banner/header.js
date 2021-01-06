import React from "react";
import "./header.scss";
function Header() {
  return (
    <div className="header">
      <h1>MyJobs</h1>
      <button>Login/Signup</button>
      {/* <div className="right">
        <p className="applied">Applied Jobs</p>
        <div className="avatar">
          <p>P</p>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
