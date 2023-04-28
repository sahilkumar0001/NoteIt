import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
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
      body: JSON.stringify({ email, password })
    });
    
    if (await response.status === 200) {
      navigate("/")
    }
    else{
      alert("Enter valid credentials!")
    }
  };
  return (
    <>
      <h2 className="text-center p-5">Login</h2>
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
    </>
  );
}

export default Login;
