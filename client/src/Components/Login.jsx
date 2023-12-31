import React from "react";
import "./forms.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/Login", { username, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/Pantry")
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-form"> 
    <div className="container"> 
      <h1 className="header"> Econauts</h1>
        <form onSubmit={handleSubmit}>
            <h2> Log In</h2>
            <p className="user_header">Username</p>
            <input
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUserName(e.target.value)}
            />
            <p className="pass_header">Password</p>
            <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            />
             <div className= "submit">
            <button type="submit" className="submit-btn" >
            Log in
            </button>
            </div>
            <Link to="/Signup" className= "btn2">
            Don't have an account? Sign up
            </Link>
        </form>
    </div>
</div>
  );
}

export default Login;
