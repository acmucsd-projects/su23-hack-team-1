import {useState} from "react";
import "./signup.css"
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom";
function Signup(){
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const handleSubmit= (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/Signup', {username, password})
        .then(result => {
            navigate('/login')
        }).catch(err => console.log(err))
    }

    return(
        <div className="bg">
            <div className="bg-wrapper">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
            <div className="label">
                <label htmlFor="username">
                Username
                </label>
                <input
                    type="text"
                    placeholder="Enter username"
                    autoComplete="off"
                    name="username"
                    classname="input"
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div className="label">
                <label htmlFor="password">
                Password
                </label>
                <input
                    type="text"
                    placeholder="Enter password"
                    autoComplete="off"
                    name="password"
                    className="input"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn-success">
            Sign Up
            </button>  
            </form>
            <Link to="/Login" className="button-style">
            Already have an account? Sign in
            </Link>
            </div>
        </div>
    );
}

export default Signup;


