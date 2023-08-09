import React from 'react'
import "./login.css"
import axios from 'axios'
function Login(){
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit= (e) =>{
        e.preventDefault();
        axios.post('', {username, password}) 
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }


    return(
    <div className="label">  
        <h1 className="text-wrapper">Log In</h1>
    </div>
    )
}

export default Login;


