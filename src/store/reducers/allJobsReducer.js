const allJobsReducer = (state = null, action) => {
  switch (action.type) {
    case "ALL_JOBS":
      return [...action.payload];
    default:
      return state;
  }
};

export default allJobsReducer;
