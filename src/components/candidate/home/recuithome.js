import React, { useEffect } from "react";
import "./recuit.scss";
import { fetchRecuitersJob } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
function Recruit() {
  const dispatch = useDispatch();
  var token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchRecuitersJob(token));
  }, []);

  var rjobs = useSelector((state) => state.recuitersJobReducer);

  return (
    <>
      {rjobs.length === 0 ? (
        <div className="nojobs">
          <p>No jobs posted by you</p>
          <button>Post a job</button>
        </div>
      ) : (
        <div className="job-grid">
          {rjobs?.map((job) => {
            return (
              <div className="job-card">
                <h2>{job.title}</h2>
                <p>{job.description}</p>
                <div className="bottom-card">
                  <p>{job.location}</p>
                  <button>View Candidates</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Recruit;
