import React from 'react'
import './Login.css';

function Login(){
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log(username);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input value={username} type="username" placeholder ="Enter a username!" id="user" name="user" />
            <label htmlFor="password">password</label>
            <input value={password} type="password" placeholder="*******" id= "password" name="password"/>
            <button>Login </button>
        </form>
        <button> First time? Sign up here!</button>
        </>
    )
}

export default Login;