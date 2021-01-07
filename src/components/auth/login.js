import React, { useEffect, useState } from "react";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/actions";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const le = useSelector((state) => state.loginErrorReducer);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => log(values),
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Email invalid";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must alleast 6 char";
      }

      return errors;
    },
  });

  const log = (values) => {
    dispatch(
      loginUser({
        email: values.email,
        password: values.password,
      })
    ).then(() => {
      history.push("/candidate");
    });
  };

  return (
    <>
      <h2>Login</h2>
      {/* <p style={{ color: "red", fontSize: "0.7rem" }}>
        {loginError ? le : null}
      </p> */}
      <form onSubmit={formik.handleSubmit}>
        <label className="email">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        <label className="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
        <button type="submit" onClick={(e) => log(e)}>
          Login
        </button>
      </form>
      <p>
        New to MyJobs ?{" "}
        <Link to="/auth/signup">
          <span>Create Account</span>
        </Link>
      </p>
    </>
  );
}

export default Login;
