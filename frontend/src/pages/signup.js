import React from 'react';
import { gapi } from "gapi-script";
import { useEffect } from 'react';
import LoginForm from './Login Page/loginform';
  
const SignUp = () => {
  const clientId = "98463902310-vtjcv56ij03cduro13bj2mdjm2bvul5l.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
     gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
   gapi.load('client:auth2', start);
  });
  return (
    <div className="page">
      <LoginForm/>
    </div>
  );
};
  
export default SignUp;