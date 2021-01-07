import React, { useState } from "react";
import "./header.scss";
function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className="header">
      <h1>MyJobs</h1>

      {localStorage.getItem("token") == null ? (
        <button>Login/Signup</button>
      ) : (
        <div className="right">
          <p className="applied">Applied Jobs</p>
          <div className="avatar">
            <p>{localStorage.getItem("name")[0].toUpperCase()}</p>
          </div>
          <p style={{ color: "red" }} onClick={() => setShow(!show)}>
            down
          </p>
          {show ? (
            <div style={{ position: "absolute", top: "110%", right: "0%" }}>
              <button
                className="logout"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Logout
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Header;
