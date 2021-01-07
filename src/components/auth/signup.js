import React, { useState } from "react";
import "./signup.scss";
import { registerUser } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
function Signup() {
  const [role, setRole] = useState(1);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      skill: "",
    },
    onSubmit: (values) => register(values),
    validate: (values) => {
      //value.fullname , ...
      //error.fullname , ...
      let errors = {};
      if (!values.fullname) {
        errors.fullname = "Full name is required";
      } else if (values.fullname.length < 6) {
        errors.fullname = "Name should be of atleast 6 char";
      }

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

      if (!values.confirmPassword) {
        errors.confirmPassword = "This field is also required";
      } else if (values.password != values.confirmPassword) {
        errors.confirmPassword = "Password does not match";
      }

      if (!values.skill) {
        errors.skill = "Skill field is required";
      }
      return errors;
    },
  });

  const register = (values) => {
    dispatch(
      registerUser({
        email: values.email,
        userRole: role,
        password: values.password,
        confirmPassword: values.confirmPassword,
        name: values.fullname,
        skills: values.skill,
      })
    );
  };

  return (
    <>
      <h2>Signup</h2>
      <div className="role">
        <button
          style={
            role === 0
              ? { backgroundColor: "#43afff" }
              : { backgroundColor: "#f0f0f0", color: "black" }
          }
          onClick={() => setRole(0)}
        >
          Recruiter
        </button>
        <button
          className="candi"
          style={
            role === 1
              ? { backgroundColor: "#43afff" }
              : { backgroundColor: "#f0f0f0", color: "black" }
          }
          onClick={() => setRole(1)}
        >
          Candidate
        </button>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <label className="fullname">Full name</label>
        <input
          type="text"
          name="fullname"
          placeholder="Enter your full name"
          onChange={formik.handleChange}
          value={formik.values.fullname}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.fullname && formik.errors.fullname ? (
          <div className="error">{formik.errors.fullname}</div>
        ) : null}
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
        <div className="passwords-row">
          <div className="password">
            <label>Create Password</label>
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
          </div>
          <div className="confirm-password password">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter your password again"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
            ></input>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="error">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
        </div>
        <label className="skill">Skills</label>
        <input
          type="text"
          name="skill"
          placeholder="Enter your Skills"
          onChange={formik.handleChange}
          value={formik.values.skill}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.skill && formik.errors.skill ? (
          <div className="error">{formik.errors.skill}</div>
        ) : null}
        <button type="submit">Login</button>
      </form>
      <p>
        Have an account ?{" "}
        <Link to="/auth/login">
          <span>login</span>
        </Link>
      </p>
    </>
  );
}

export default Signup;
