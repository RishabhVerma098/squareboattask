import axios from "axios";

export const url = "https://jobs-api.squareboat.info/api/v1";

/**
 * @param description : register a user
 * @param url : /auth/register
 * @param dispatch :
 */

export const registerUser = (body) => {
  return function (dispatch) {
    return axios
      .post(`${url}/auth/register`, body)
      .then((res) => {
        //dispatch(dummy(res.data.data));

        localStorage.setItem("name", res.data.data.name);
        localStorage.setItem("email", res.data.data.email);
        localStorage.setItem("id", res.data.data.id);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("useRole", res.data.data.userRole);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };
};

// // * called by dummyAction()
// export const dummy = (data) => {
//   return {
//     type: "DUMMY",
//     payload: data,
//   };
// };

export const loginUser = (body) => {
  return function (dispatch) {
    return axios
      .post(`${url}/auth/login`, body)
      .then((res) => {
        localStorage.setItem("name", res.data.data.name);
        localStorage.setItem("email", res.data.data.email);
        localStorage.setItem("id", res.data.data.id);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("useRole", res.data.data.userRole);
      })
      .catch(function (error) {
        if (error.response.data.code === 401) {
          dispatch(loginError(error.response.data.message));
        } else {
          dispatch(loginError(null));
        }
      });
  };
};

export const loginError = (data) => {
  return {
    type: "LOGIN_ERROR",
    payload: data,
  };
};

export const fetchAllJobs = () => {
  return function (dispatch) {
    return axios
      .get(`${url}/jobs`)
      .then((res) => {
        dispatch(alljobs(res.data.data));
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };
};

// * called by fetchAllJobs()
export const alljobs = (data) => {
  return {
    type: "ALL_JOBS",
    payload: data,
  };
};

export const fetchCandidateAvailableJobs = (token) => {
  return function (dispatch) {
    var config = {
      method: "get",
      url: `${url}/candidates/jobs`,
      headers: {
        Authorization: token,
      },
    };

    return axios(config)
      .then(function (res) {
        dispatch(candidateAvailableJob(res.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// * called by fetchCandidateAvailableJobs() and fetchCandidateAppliedJobs()
export const candidateAvailableJob = (data) => {
  return {
    type: "CANDIDATE_AVAIL_JOBS",
    payload: data,
  };
};

export const fetchCandidateAppliedJobs = (token) => {
  return function (dispatch) {
    var config = {
      method: "get",
      url: `${url}/candidates/jobs/applied`,
      headers: {
        Authorization: token,
      },
    };

    return axios(config)
      .then(function (res) {
        if (res.data.message === "You have not applied to any jobs.") {
          dispatch(candidateAppliedJob([]));
        } else {
          //MADE A CHANGE HERE
          dispatch(candidateAppliedJob(res.data.data));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const candidateAppliedJob = (data) => {
  return {
    type: "CANDIDATE_APPL_JOBS",
    payload: data,
  };
};

export const showAppliedJobs = (show) => {
  return {
    type: "SHOW_APPLIED",
    payload: show,
  };
};

export const applyToJob = (token, jobId) => {
  return function (dispatch) {
    var config = {
      method: "post",
      url: `${url}/candidates/jobs`,
      data: { jobId: jobId },
      headers: {
        Authorization: token,
      },
    };

    return axios(config)
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };
};

export const fetchRecuitersJob = (token) => {
  return function (dispatch) {
    var config = {
      method: "get",
      url: `${url}/recruiters/jobs`,
      headers: {
        Authorization: token,
      },
    };

    return axios(config)
      .then(function (res) {
        if (res.data.message === "No jobs posted") {
          dispatch(recuitersJob([]));
        } else {
          dispatch(recuitersJob(res.data.data.data));
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };
};

export const recuitersJob = (data) => {
  return {
    type: "RECUITER_JOB",
    payload: data,
  };
};

export const postajob = (token, body) => {
  console.log(token, body);
  return function (dispatch) {
    var config = {
      method: "post",
      url: `${url}/jobs`,
      data: {
        title: body.title,
        description: body.description,
        location: body.location,
      },
      headers: {
        Authorization: token,
      },
    };

    return axios(config)
      .then(function (res) {
        console.log(res.data);
        // if (res.data.message === "No jobs posted") {
        //   dispatch(recuitersJob([]));
        // } else {
        //   dispatch(recuitersJob(res.data.data.data));
        // }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };
};
