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
            navigate('/Login')
        }).catch(err => console.log(err))
    }

    return(
        <div className="container-forms">
            <div class="form-content">
            <img src="https://cdn.discordapp.com/attachments/905224437517918298/1140505260855668736/refrigerator-icon.png" className="img1" alt="" width="300" height="303"/>
            <img src="https://cdn.discordapp.com/attachments/905224437517918298/1140507290382909541/Ellipse.png" alt="" className="img2" width="200" height="200" />
            <form onSubmit={handleSubmit}>
            <header>Sign Up</header>
                <div className="field-input">
                <p>Username</p>
                <input
                    type="text"
                    placeholder="Enter username"
                    autoComplete="off"
                    name="username"
                    classname="user"
                    onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="field-input">
                <p>Password</p>
                <input
                    type="text"
                    placeholder="Enter password"
                    autoComplete="off"
                    name="password"
                    className="pass"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn">
            Sign Up
            </button>
            <a href="http://localhost:3001/Login" className="button-style">Already have an account? Log in</a>

            </form>

            {/* <Link to="/Login" className="button-style">
            Already have an account? Log in
            </Link>  */}
            </div>
        </div>
    );
}

export default Signup;


