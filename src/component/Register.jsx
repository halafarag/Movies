import React from "react";
import { useFormik } from "formik";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9]+@[A-Z0-9]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      //   validate name
      if (!values.name) {
        errors.name = "Required";
      }
      //userName

      if (!values.userName) {
        errors.userName = "Required";
      } else if (
        !/[A-Z]/i.test(values.userName) ||
        values.userName.split(" ").length !== 1
      ) {
        errors.userName = "Invalid userName";
      }
      //password
      if (!values.password) {
        errors.password = "Required";
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          values.password
        )
      ) {
        errors.password = "Invalid password ";
      }
      //
      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Invalid confirmPassword";
      }
      return errors;
    },
  });
  return (
    <>
      <h1>Register form</h1>
      <div style={{ width: "350px", margin: "auto" }}>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail3"
              aria-describedby="emailHelp"
              onChange={formik.handleChange}
              value={formik.values.name}
              name="name"
            />
            {formik.errors.name ? (
              <div className="text-danger">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
            />
            {formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={formik.values.userName}
              name="userName"
              onChange={formik.handleChange}
            />
            {formik.errors.userName ? (
              <div className="text-danger">{formik.errors.userName}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail4"
              aria-describedby="emailHelp"
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
            />
            {formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              name="confirmPassword"
            />
            {formik.errors.confirmPassword ? (
              <div className="text-danger">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Register;
