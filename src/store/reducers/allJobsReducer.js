const allJobsReducer = (state = {}, action) => {
  switch (action.type) {
    case "ALL_JOBS":
      console.log(action.payload);
      return { ...action.payload };
    default:
      return state;
  }
};

export default allJobsReducer;
