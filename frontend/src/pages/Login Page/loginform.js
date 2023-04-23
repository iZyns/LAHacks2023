import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import "./loginform.css"

const clientId = "98463902310-vtjcv56ij03cduro13bj2mdjm2bvul5l.apps.googleusercontent.com";

const LoginForm = () => {
    const navigate = useNavigate();
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "98463902310-vtjcv56ij03cduro13bj2mdjm2bvul5l.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client: auth2', start)
    })

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const onSuccess = e => {
        navigate('/home')
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }

    return (
        <div className="page">
            <div className="signin">
            <h1>Sign In</h1>
            <input className="inputlogin" type="text" placeholder="username" />
            <input className="inputlogin" type="password" placeholder="password" />
            <div className="login-btn" onClick={popup}>
            <p className="signin-text">Sign In</p>
            </div>
            <p className="text">or Sign In With</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <p className="space"></p>
                <div className="google">
                    <GoogleLogin className="blue"
                        clientId="98463902310-vtjcv56ij03cduro13bj2mdjm2bvul5l.apps.googleusercontent.com"
                        buttonText=""
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false} 
                        icon={false}   
                        theme="dark"  
                    />
                </div>
            </div>

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>
            </div>
            <p className="or-text">or</p>
            <div className="signup">
                <h1>Sign Up</h1>
                <input classname="inputlogin" type="text" placeholder="username" />
                <input classname="inputlogin" type="email" placeholder="E-mail"></input>
                <input classname="inputlogin" type="password" placeholder="password" />
                <input classname="inputlogin" type="password" placeholder="re-enter password" />
                <button className="create-account" onClick={onSuccess}>Create Account</button>
            </div>
        </div>
    )
}

export default LoginForm