const recuitersJobReducer = (state = [], action) => {
  switch (action.type) {
    case "RECUITER_JOB":
      return [...action.payload];
    default:
      return state;
  }
};

export default recuitersJobReducer;
