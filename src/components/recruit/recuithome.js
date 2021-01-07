import React, { useEffect, useState } from "react";
import { fetchRecuitersJob } from "../../store/actions/";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { fetchOneJobCandi } from "../../store/actions";
import Pagination from "react-js-pagination";
import "./recuit.scss";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    height: "600px",
  },
};
function Recruit() {
  const dispatch = useDispatch();
  var token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchRecuitersJob(token, 1));
  }, []);

  var rjobs = useSelector((state) => state.recuitersJobReducer);
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  var onejob = useSelector((state) => state.oneJobCandiReducer);

  const fetchCandiJobs = (jobId) => {
    dispatch(fetchOneJobCandi(jobId, token)).then(() => {
      openModal();
    });
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    let c = 0;
    for (let i = 0; i < onejob.length; i++) {
      c = c + 1;
    }
    setCount(c);
  }, [onejob]);

  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    dispatch(fetchRecuitersJob(token, pageNumber));
  };

  return (
    <>
      {rjobs.length === 0 ? (
        <div className="nojobs">
          <p>No jobs posted by you</p>
          <Link to="/postjob">
            <button>Post a job</button>
          </Link>
        </div>
      ) : (
        <div className="job-grid">
          {rjobs?.data?.map((job) => {
            return (
              <div className="job-card">
                <h2>{job.title}</h2>
                <p>{job.description}</p>
                <div className="bottom-card">
                  <p>{job.location}</p>
                  <button onClick={() => fetchCandiJobs(job.id)}>View</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="overlay"
      >
        <h3 className="modal-head">Applicants for this job</h3>

        <p>Total {count} applicants</p>

        <div className="modal-contain">
          {onejob.map((job) => {
            return (
              <div className="modal-card">
                <div className="upper">
                  <div className="ava">
                    <p>{job.name[0].toUpperCase()}</p>
                  </div>
                  <div className="value">
                    <p className="name">{job.name}</p>
                    <p>{job.email}</p>
                  </div>
                </div>
                <div className="lower">
                  <p className="skil">Skills</p>
                  <p>{job.skills}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
      <div className="page">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={rjobs?.metadata?.limit}
          totalItemsCount={rjobs?.metadata?.count}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          innerClass="pager"
        />
      </div>
    </>
  );
}

export default Recruit;
