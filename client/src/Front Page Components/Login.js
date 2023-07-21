import React, {useEffect, useState} from "react"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"

function Login() {

    const[email,applyEmail]=useState('')
    const[password,applyPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
        }
        catch(e){
            console.log(e)
        }
    }
    return (
        <div className = "login">

            <h1>Log In</h1>

            <form action="POST">
                <input type="email" onChange={(e)=>{applyEmail(e.target.value)}} placeholder = "Email" name=""  id=""/>
                <input type="password" onChange={(e)=>{applyPassword(e.target.valie)}} placeholder = "Password" name="" id=""/>
            <input type="submit" onClick={submit}/>
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/Sign Up">Signup Page</Link>
        </div>
    )
}