import React, {useEffect, useState} from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import "./loginform.css"

const clientId = "98463902310-vtjcv56ij03cduro13bj2mdjm2bvul5l.apps.googleusercontent.com";

const LoginForm = () => {
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
        alert("User signed in")
        console.log(e)
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }

    return (
        <div className="page">
            <div className="signin">
            <h1>Sign In</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
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
                        isSignedIn={true} 
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
                <input type="text" placeholder="username" />
                <input type="email" placeholder="E-mail"></input>
                <input type="password" placeholder="password" />
                <input type="password" placeholder="re-enter password" />
                <button className="create-account"><p className="create-text">Create Account</p></button>
            </div>
        </div>
    )
}

export default LoginForm