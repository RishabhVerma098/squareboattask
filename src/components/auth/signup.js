import React from "react";
import "./signup.scss";
import { registerUser } from "../../store/actions";
import { useDispatch } from "react-redux";

function Signup() {
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    dispatch(
      registerUser({
        email: "rahul@gmail.com",
        userRole: 1,
        password: "rahul123",
        confirmPassword: "rahul123",
        name: "rahul",
        skills: "HTML, CSS, JS",
      })
    );
  };

  return (
    <>
      <h2>Signup</h2>
      <form>
        <div className="role">
          <button>Recruiter</button>
          <button className="candi">Candidate</button>
        </div>
        <label className="fullname">Full name</label>
        <input
          type="text"
          name="fullname"
          placeholder="Enter your full name"
        ></input>
        <label className="email">Email Address</label>
        <input type="email" name="email" placeholder="Enter your email"></input>
        <div className="passwords-row">
          <div className="password">
            <label>Create Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            ></input>
          </div>
          <div className="confirm-password password">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password again"
            ></input>
          </div>
        </div>
        <label className="skill">Skills</label>
        <input type="text" name="skill" placeholder="Enter your Skills"></input>
        <button type="submit" onClick={(e) => register(e)}>
          Login
        </button>
      </form>
      <p>
        Have an account ? <span>login</span>
      </p>
    </>
  );
}

export default Signup;
