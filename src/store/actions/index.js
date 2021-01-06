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
        console.log(res.data);
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
        console.log(res.data);
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
        console.log(res.data);
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
        console.log(res.data);
        dispatch(candidateAvailableJob(res.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
