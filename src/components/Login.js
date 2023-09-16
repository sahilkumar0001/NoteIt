import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, seterror] = useState(false);
  const onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const login = async () => {
    const { email, password } = user;
    const url = "http://localhost:5000/api/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.status === 200) {
      const id = await response.json();
      localStorage.setItem("auth", id._id);
      navigate("/");
    } else {
      seterror(true);
    }
  };
  return (
    <div className="container">
      <div
        className={`alert alert-danger alert-dismissible fade show align-left ${
          error ? "" : "d-none"
        }`}
        role="alert"
        style={{ width: "40%", position: "absolute", top: "55px", left: "0" }}
      >
        <strong>Enter valid credentials!</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <h2 className="text-center">Login</h2>
      <div
        className="login container  m-auto w-70 p-5"
        style={{ width: "55%", minWidth: "500px" }}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            onChange={onchange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onchange}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={login}>
          Submit
        </button>
      </div>
      <h5 className="text-center">
        Don't have an account?
        <Link to="/register" className="link-success">
          Register
        </Link>
      </h5>
      <div id="emailHelp" className="form-text text-center pt-3">
        Demo account: email=demo@gmail.com, password=demo
      </div>
    </div>
  );
}

export default Login;
