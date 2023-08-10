import {useState} from "react";
//import "./signup.css"
import axios from 'axios'
import {useNavigate} from "react-router-dom";

function Signup(){
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const handleSubmit= (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/Signup', {username, password})
        .then(result => console.log(result))
        navigate('/login')
        .catch(err => console.log(err))
    }

    return(
        <div classname="auth-form-container">
            <form className='signup-form' onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input value={username} onChange={(e) => setUserName(e.target.value)}type="username" placeholder="Enter username" />
                <label htmlFor="password">password</label>
                <input value={password} oncChange={(e) => setPassword(e.target.value)}type="password" placeholder="Enter password" />
            </form>
        </div>
    
    );
}

export default Signup;


