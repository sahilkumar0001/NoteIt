import React from 'react'
import {Link,useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  let path=useLocation().pathname;
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"#e3f2fd"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to={`${(localStorage.getItem("auth"))?"/":"/login"}`}>NoteIt</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className={`nav-link ${(path==="/")?"active":""} `} aria-current="page" to={`${(localStorage.getItem("auth"))?"/":"/login"}`}>Home</Link>
        <Link className={`nav-link ${(path==="/about")?"active":""}`} to={`${(localStorage.getItem("auth"))?"/about":"/login"}`}>About</Link>
        <Link className={`nav-link ${(path==="/pricing")?"active":""}`} to={`${(localStorage.getItem("auth"))?"/pricing":"/login"}`}>Pricing</Link>
        
      </div>
      <form className="float-end d-flex">
          <Link className={`btn btn-outline-success ${(localStorage.getItem("auth"))?"d-none":"d-block"}`} type="button" to="/login">Login</Link>
          <button className={`btn btn-outline-success ${(localStorage.getItem("auth"))?"d-block":"d-none"}` } onClick={()=>{localStorage.removeItem("auth");navigate("/login")}}>Logout</button>
    </form>
    </div>
      
  </div>
</nav>
    </>
  )
}

export default Navbar