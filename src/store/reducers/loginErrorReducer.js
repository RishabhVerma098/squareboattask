const loginErrorReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return action.payload;
    default:
      return state;
  }
};

export default loginErrorReducer;
