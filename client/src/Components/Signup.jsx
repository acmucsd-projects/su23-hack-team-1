import {useState} from "react";
import {Link} from "react-router-dom";
//import "./signup.css"
import axios from 'axios'

function Signup(){
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit= (e) =>{
        e.preventDefault();
        axios.post('', {username, password}) 
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return(
        <div className="sign-up">
        <div className="div">
            <img className="log-in" alt="Log in" src="log-in.png" />
            <h1 className="already-have-an">
                <span className="text-wrapper">Already have an account? </span>
                <span className="span">Log in</span>
                <span className="text-wrapper">&nbsp;</span>
            </h1>
            <div className="overlap-group">
                <div className="ellipse" />
                <img className="image" alt="Image" src="image-3.png" />
            </div>
            <img className="cloud" alt="Cloud" src="cloud.svg" />
            <img className="img" alt="Cloud" src="image.svg" />
        </div>
    </div>
    );
}

export default Signup;


