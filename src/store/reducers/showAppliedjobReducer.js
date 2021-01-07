const showAppliedJobsReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_APPLIED":
      return action.payload;
    default:
      return state;
  }
};

export default showAppliedJobsReducer;
