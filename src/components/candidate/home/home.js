import React, { useEffect } from "react";
import "./home.scss";
import Header from "../../../components/homepage/banner/header";
import Recuit from "./recuithome";
import {
  fetchAllJobs,
  fetchCandidateAvailableJobs,
  fetchCandidateAppliedJobs,
  showAppliedJobs,
  applyToJob,
} from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  var token = localStorage.getItem("token");
  const history = useHistory();
  var candidatejobs = useSelector((state) => state.candidateJobReducer);
  var showApplied = useSelector((state) => state.showAppliedJobsReducer);
  var allJobs = useSelector((state) => state.allJobsReducer);

  useEffect(() => {
    dispatch(fetchCandidateAvailableJobs(token));
  }, []);

  useEffect(() => {
    if (showApplied) {
      dispatch(fetchCandidateAppliedJobs(token));
    } else {
      dispatch(fetchCandidateAvailableJobs(token));
    }
  }, [showApplied]);

  useEffect(() => {
    if (token === null) {
      dispatch(fetchAllJobs());
    }
  }, [token]);

  const seeAlljobs = () => {
    dispatch(showAppliedJobs(false));
  };

  const apply = (id) => {
    dispatch(applyToJob(token, id)).then(() => {
      history.push("/candidate");
    });
  };

  return (
    <div className="home">
      <div className="background">
        <Header />
      </div>
      <div className="container">
        {token === null ? (
          <h2>All jobs</h2>
        ) : showApplied ? (
          <h2>Jobs you have applied to</h2>
        ) : (
          <h2>Jobs for you</h2>
        )}

        {token !== null ? (
          localStorage.getItem("useRole") === "0" ? (
            <Recuit />
          ) : candidatejobs.length === 0 ? (
            <div className="nojobs">
              <p>Your applied jobs will show here</p>
              <button onClick={() => seeAlljobs()}>See all jobs</button>
            </div>
          ) : (
            <div className="job-grid">
              {candidatejobs?.map((job) => {
                return (
                  <div className="job-card">
                    <h2>{job.title}</h2>
                    <p>{job.description}</p>
                    <div className="bottom-card">
                      <p>{job.location}</p>
                      {showApplied ? (
                        <button
                          disabled={true}
                          style={{ backgroundColor: "gray" }}
                        >
                          Apply
                        </button>
                      ) : (
                        <button onClick={() => apply(job.id)}>Apply</button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )
        ) : (
          <div className="job-grid">
            {allJobs?.map((job) => {
              return (
                <div className="job-card">
                  <h2>{job.title}</h2>
                  <p>{job.description}</p>
                  <div className="bottom-card">
                    <p>{job.location}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
