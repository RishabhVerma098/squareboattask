const candidateJobReducer = (state = null, action) => {
  switch (action.type) {
    case "CANDIDATE_AVAIL_JOBS":
      return [...action.payload];
    default:
      return state;
  }
};

export default candidateJobReducer;
