import React, { useEffect, useState } from "react";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { showAppliedJobs } from "../../../store/actions";
function Header() {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  var sh = useSelector((state) => state.showAppliedJobsReducer);

  return (
    <div className="header">
      <h1>MyJobs</h1>

      {localStorage.getItem("token") == null ? (
        <button>Login/Signup</button>
      ) : (
        <div className="right">
          <p
            className="applied"
            onClick={() => dispatch(showAppliedJobs(!sh))}
            style={sh ? { color: "white" } : null}
          >
            Applied Jobs
          </p>
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
