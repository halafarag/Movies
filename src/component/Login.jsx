import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    emailAderss: "",
    password: "",
  });
  //
  const changInput = (evt) => {
    if (evt.target.name === "emailAderss") {
      setUser({ ...user, emailAderss: evt.target.value });
    } else if (evt.target.name === "password") {
      setUser({ ...user, password: evt.target.value });
    }
  };
  return (
    <>
      <hr />
      <h1>login Form</h1>
      <form style={{ width: "350px", margin: "auto" }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.emailAderss}
            name="emailAderss"
            onChange={(e) => {
              changInput(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={user.password}
            name="password"
            onChange={(e) => {
              changInput(e);
            }}
          />
        </div>

        <button type="submit" className="btn btn-success ">
          Submit
        </button>
      </form>
    </>
  );
}
