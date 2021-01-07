import React from "react";
import "./auth.scss";
import Login from "./login";
import Signup from "./signup";
//import Forget from "./forget";
//import Reset from "./reset";
import Header from "../../components/homepage/banner/header";
function Auth(props) {
  const type = props.match.params.type.toString();
  return (
    <div className="auth">
      <div className="background">
        <Header />
      </div>
      <div className="form">{type === "login" ? <Login /> : <Signup />}</div>
    </div>
  );
}

export default Auth;
