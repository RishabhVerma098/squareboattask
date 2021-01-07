import React from "react";
import "./postjob.scss";
import Header from "../../components/homepage/banner/header";

import { postajob } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
function PostJob() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      location: "",
    },
    onSubmit: (values) => console.log(values),
    validate: (values) => {
      let errors = {};
      if (!values.title) {
        errors.title = "Title is required";
      }

      if (!values.desciption) {
        errors.description = "Desciption is required";
      }

      if (!values.location) {
        errors.location = "location is required";
      }

      return errors;
    },
  });

  const post = (e) => {
    e.preventDefault();
    dispatch(
      postajob(localStorage.getItem("token"), {
        title: formik.values.title,
        description: formik.values.description,
        location: formik.values.location,
      })
    ).then(() => {
      history.push("/candidate");
    });
  };

  return (
    <div className="postajob">
      <div className="background">
        <Header />
      </div>
      <div className="form">
        <h2>Post a job</h2>
        <form onSubmit={formik.handleSubmit}>
          <label className="title">Job title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter your job title"
            onChange={formik.handleChange}
            value={formik.values.title}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.title && formik.errors.title ? (
            <div className="error">{formik.errors.title}</div>
          ) : null}
          <label className="desciption">Description</label>
          <textarea
            name="description"
            placeholder="Enter job desciption"
            onChange={formik.handleChange}
            value={formik.values.description}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.desciption && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
          <label className="title">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            onChange={formik.handleChange}
            value={formik.values.location}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.location && formik.errors.location ? (
            <div className="error">{formik.errors.location}</div>
          ) : null}
          <button type="submit" onClick={(e) => post(e)}>
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
