import { combineReducers } from "redux";
import allJobsReducer from "./allJobsReducer";
import candidateJobReducer from "./candidatejobs";
import showAppliedJobsReducer from "./showAppliedjobReducer";
import loginErrorReducer from "./loginErrorReducer";
const rootReducers = combineReducers({
  allJobsReducer: allJobsReducer,
  candidateJobReducer: candidateJobReducer,
  showAppliedJobsReducer: showAppliedJobsReducer,
  loginErrorReducer: loginErrorReducer,
});

export default rootReducers;
