import { combineReducers } from "redux";
import allJobsReducer from "./allJobsReducer";
import candidateJobReducer from "./candidatejobs";
import showAppliedJobsReducer from "./showAppliedjobReducer";
const rootReducers = combineReducers({
  allJobsReducer: allJobsReducer,
  candidateJobReducer: candidateJobReducer,
  showAppliedJobsReducer: showAppliedJobsReducer,
});

export default rootReducers;
