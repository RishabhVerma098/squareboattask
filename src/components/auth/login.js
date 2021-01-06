import React from "react";
import "./login.scss";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/actions";
function Login() {
  const dispatch = useDispatch();
  const log = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({
        email: "sharad@gmail.com",
        password: "sharad",
      })
    );
  };
  return (
    <>
      <h2>Login</h2>
      <form>
        <label className="email">Email Address</label>
        <input type="email" name="email" placeholder="Enter your email"></input>
        <label className="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        ></input>
        <button type="submit" onClick={(e) => log(e)}>
          Login
        </button>
      </form>
      <p>
        New to MyJobs ? <span>Create account</span>
      </p>
    </>
  );
}

export default Login;
