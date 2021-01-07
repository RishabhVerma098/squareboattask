import React from "react";
import "./auth.scss";
import Login from "./login";
import Signup from "./signup";
//import Forget from "./forget";
//import Reset from "./reset";
import Header from "../../components/homepage/banner/header";
function Auth() {
  return (
    <div className="auth">
      <div className="background">
        <Header />
      </div>
      <div className="form">
        <Signup />
      </div>
    </div>
  );
}

export default Auth;
