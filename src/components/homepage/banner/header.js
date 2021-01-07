import React, { useEffect, useState } from "react";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { showAppliedJobs } from "../../../store/actions";
import { Link, useHistory } from "react-router-dom";
function Header() {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  var sh = useSelector((state) => state.showAppliedJobsReducer);

  return (
    <div className="header">
      <Link to="/">
        <h1>MyJobs</h1>
      </Link>

      {localStorage.getItem("token") == null ? (
        <Link to="/auth/login">
          <button>Login/Signup</button>
        </Link>
      ) : (
        <div className="right">
          {localStorage.getItem("useRole") === "0" ? (
            <p style={{ color: "white", marginRight: "1rem" }}>Post a job</p>
          ) : (
            <p
              className="applied"
              onClick={() => dispatch(showAppliedJobs(!sh))}
              style={sh ? { color: "white" } : null}
            >
              Applied Jobs
            </p>
          )}
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
                  history.push("/candidate");
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
