import {useState} from "react";
import {Link} from "react-router-dom";
import './Signup.css'


function Signup(){
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log(username);
    }
    return(
        <>
        <form onSubmit ={handleSubmit}>
            <label htmlFor="username">username</label>
            <input value={username} type="username" placeholder ="Enter a username!" id="user" name="user" />
            <label htmlFor="password">password</label>
            <input value={password} type="password" placeholder="*******" id= "password" name="password"/>
            <button>Sign Up </button>
        </form>
        <button> Already have an account? Login here!</button>
        </>
    )
}

export default Signup;