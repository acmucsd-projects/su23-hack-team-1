import { useState } from "react";
import "./signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/Signup", { username, password })
      .then((result) => {
        navigate("/Login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <body className="signup-form"> 
        <div className="container"> 
            <form >
                <h2> Sign Up</h2>
                <p className="user_header">Username</p>
                <input
                type="text"
                placeholder="Enter username"
                onChange={(e) => setUserName(e.target.value)}
                />
                <p className="pass_header">Password</p>
                <input
                type="text"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                />
                 <div className= "submit">
                <button type="submit" className="submit-btn" onSubmit={handleSubmit}>
                Sign Up
                </button>
                </div>
                <Link to="/Login" className="btn2">
                Already have an account? Log in
                </Link>
            </form>
        </div>
    </body>
)
}
export default Signup;
