import "./App.scss";
import Homepage from "./components/homepage/homepage";
import CandidateHome from "./components/candidate/home/home";
import Auth from "./components/auth/auth";
import Postjob from "./components/recruit/postjob";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" id="home">
      <Router forceRefresh={true}>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>

          <Route path="/candidate" exact>
            <CandidateHome />
          </Route>

          <Route path="/postjob">
            <Postjob />
          </Route>

          <Route path="/auth/:type" component={Auth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
