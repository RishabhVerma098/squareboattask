import React from "react";
import "./reset.scss";
function Reset() {
  return (
    <>
      <h2>Reset Password</h2>
      <p>Enter your new Password below</p>
      <form>
        <label className="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        ></input>
        <label>Confirm Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password again"
        ></input>
        <button type="submit">Reset</button>
      </form>
    </>
  );
}

export default Reset;
