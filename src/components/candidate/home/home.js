import React, { useEffect, useState } from "react";
import "./home.scss";
import Header from "../../../components/homepage/banner/header";
import Recuit from "../../recruit/recuithome";
import {
  fetchAllJobs,
  fetchCandidateAvailableJobs,
  fetchCandidateAppliedJobs,
  showAppliedJobs,
  applyToJob,
} from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Pagination from "react-js-pagination";
function Home() {
  const dispatch = useDispatch();
  var token = localStorage.getItem("token");
  const history = useHistory();
  var candidatejobs = useSelector((state) => state.candidateJobReducer);
  var showApplied = useSelector((state) => state.showAppliedJobsReducer);
  var allJobs = useSelector((state) => state.allJobsReducer);

  useEffect(() => {
    dispatch(fetchCandidateAvailableJobs(token, 1));
  }, []);

  useEffect(() => {
    if (showApplied) {
      dispatch(fetchCandidateAppliedJobs(token, 1));
    } else {
      dispatch(fetchCandidateAvailableJobs(token, 1));
    }
  }, [showApplied]);

  useEffect(() => {
    if (token === null) {
      dispatch(fetchAllJobs(1));
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

  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    // console.log(`active page is ${pageNumber}`);
    // this.setState({activePage: pageNumber});
    setActivePage(pageNumber);

    if (token === null) {
      dispatch(fetchAllJobs(pageNumber));
    } else if (!showApplied) {
      dispatch(fetchCandidateAvailableJobs(token, pageNumber));
    } else {
      dispatch(fetchCandidateAppliedJobs(token, pageNumber));
    }
  };

  console.log(activePage);
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
        ) : localStorage.getItem("useRole") === "0" ? (
          <h2>Jobs posted by you</h2>
        ) : (
          <h2>Jobs for you</h2>
        )}

        {token !== null ? (
          localStorage.getItem("useRole") === "0" ? (
            <Recuit />
          ) : Object.keys(candidatejobs).length === 0 ? (
            <div className="nojobs">
              <p>Your applied jobs will show here</p>
              <button onClick={() => seeAlljobs()}>See all jobs</button>
            </div>
          ) : (
            <div className="job-grid">
              {candidatejobs?.data?.map((job) => {
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
            {allJobs?.data?.map((job) => {
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
      <div className="page">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={
            token === null
              ? allJobs?.metadata?.limit
              : candidatejobs?.metadata?.limit
          }
          totalItemsCount={
            token === null
              ? allJobs?.metadata?.count
              : candidatejobs?.metadata?.count
          }
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          innerClass="pager"
        />
      </div>
    </div>
  );
}

export default Home;
