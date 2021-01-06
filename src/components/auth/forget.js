import React from "react";
import "./forget.scss";
function ForgetPassword() {
  return (
    <>
      <h2>Forget Password</h2>
      <form>
        <p>
          Enter your email associated to your account and we'll send you
          instructions to reset your password
        </p>
        <label className="email">Email Address</label>
        <input type="email" name="email" placeholder="Enter your email"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ForgetPassword;
