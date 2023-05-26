import React, { useState } from "react";

import {Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [error, seterror] = useState(false)
  const [user, setUser] = useState({username:"", email: "", password: "" });
  const onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const register = async () => {
    const {username, email, password } = user;
    const url = "http://localhost:5000/api/auth/createuser";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({username, email, password })
    });
    if ( response.status === 200) {
      const id = await response.json();
      localStorage.setItem("auth",id._id);
      navigate("/")
    }
    else{
      seterror(true)
    }
  };
  return (
    <div className="container">
      <div className={`alert alert-danger alert-dismissible fade show align-left ${(error)?"":"d-none"}`} role="alert" style={{    width: "40%",
    position: "absolute",
    top: "55px",
    left: "0"}}>
  <strong>User Already Exists, Try logging in!</strong>
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
      <h2 className="text-center">Register</h2>
      <div
        className="login container  m-auto w-70 p-5"
        style={{ width: "60%", maxWidth: "500px" }}
      >
       <div className="mb-3">
            <label htmlFor="email" className="form-label">
              UserName
            </label>
            <input
              type="username"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              name="username"
              onChange={onchange}
            />
            
          </div>
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

          <button type="submit" className="btn btn-primary m-auto" onClick={register}>
            Submit
          </button>
        
      </div>
      <h5 className="text-center">Already have an account?<Link to="/login" className="link-success" >Login</Link></h5>
    </div>
  );
}

export default Login;
