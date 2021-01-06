import React, { useEffect } from "react";
import "./home.scss";
import Header from "../../../components/homepage/banner/header";
import {
  fetchAllJobs,
  fetchCandidateAvailableJobs,
  fetchCandidateAppliedJobs,
} from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  const alljobs = useSelector((state) => state.candidateJobReducer);
  useEffect(() => {
    dispatch(fetchCandidateAppliedJobs(localStorage.getItem("token")));
  }, []);

  //console.log(alljobs);

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
          {alljobs?.map((job) => {
            return (
              <div className="job-card">
                <h2>{job.title}</h2>
                <p>{job.description}</p>
                <div className="bottom-card">
                  <p>{job.location}</p>
                  <button>Apply</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
