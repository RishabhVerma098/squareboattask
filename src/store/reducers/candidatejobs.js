const candidateJobReducer = (state = {}, action) => {
  switch (action.type) {
    case "CANDIDATE_AVAIL_JOBS":
      return { ...action.payload };
    case "CANDIDATE_APPL_JOBS":
      return { ...action.payload };
    default:
      return state;
  }
};

export default candidateJobReducer;
