import { combineReducers } from "redux";
import allJobsReducer from "./allJobsReducer";
import candidateJobReducer from "./candidatejobs";
import showAppliedJobsReducer from "./showAppliedjobReducer";
import loginErrorReducer from "./loginErrorReducer";
import recuitersJobReducer from "./recuitersJobReducer";
const rootReducers = combineReducers({
  allJobsReducer: allJobsReducer,
  candidateJobReducer: candidateJobReducer,
  showAppliedJobsReducer: showAppliedJobsReducer,
  loginErrorReducer: loginErrorReducer,
  recuitersJobReducer: recuitersJobReducer,
});

export default rootReducers;
