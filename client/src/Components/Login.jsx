import React from 'react'
import "./login.css"
import axios from 'axios'
import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";

function Login(){
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit= (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/Login', {username, password}) 
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate('/Home')
            }
        })
        .catch(err => console.log(err))
    }


    return(
        // <div classname="auth-form-container">
        //     <form className='signup-form' onSubmit={handleSubmit}>
        //         <label htmlFor="username">username</label>
        //         <input value={username} onChange={(e) => setUserName(e.target.value)}type="username" placeholder="Enter username" />
        //         <label htmlFor="password">password</label>
        //         <input value={password} oncChange={(e) => setPassword(e.target.value)}type="password" placeholder="Enter password" />
        //     </form>
        // </div>
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="username"
              placeholder="Enter username"
              autoComplete="off"
              name="username"
              className="form-control rounded-0"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          </form>
          <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Already have an account? Sign Up
          </Link>
        
      </div>
    </div>
    )
}

export default Login;


