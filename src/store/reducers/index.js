import { combineReducers } from "redux";
import allJobsReducer from "./allJobsReducer";
import candidateJobReducer from "./candidatejobs";
const rootReducers = combineReducers({
  allJobsReducer: allJobsReducer,
  candidateJobReducer: candidateJobReducer,
});

export default rootReducers;
