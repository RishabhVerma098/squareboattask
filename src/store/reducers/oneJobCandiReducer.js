const oneJobCandiReducer = (state = [], action) => {
  switch (action.type) {
    case "ONE_JOB_CANDI":
      return [...action.payload];
    default:
      return state;
  }
};

export default oneJobCandiReducer;
