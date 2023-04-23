import React, { Component } from "react";
import { useState } from 'react';
  
const Chat = () => {
  const [msg, setMsg] = useState("");
  const [msgTxt, setMsgTxt] = useState(null);
  const [show, setShow] = useState(false);


  const handleMsg = (i) => {
    setMsg(i.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true);
    setMsgTxt(msg);
    setMsg("");
  }

  return (
    <div>
      <br/><br/><br/>
      <h1>Algebra Study Space</h1>
      <b>Current Users:</b>&nbsp; 7

      <div className = "align-left">
        <b>Bob:</b>&nbsp; I love math.
      </div>
      <div className = "align-left">
        <b>Mason:</b>&nbsp; What do the numbers mean?
      </div>
      <div className = "align-left">
        <b>Joe:</b>&nbsp; Mama.
      </div>
      <div className = "align-left">
        {show ? (<p><b>You:</b> {msgTxt}</p>) : null}
      </div>
      

      <div className = "footer">
        <form style={{display: "flex", flexDirection: "row"}} onSubmit={handleSubmit}>
          <input 
            style={{flex: "1"}}
            type="text"
            value={msg}
            onChange={handleMsg}
            placeholder="Type your message here."/>
        </form>
      </div>      
    </div>
  );
};
  
export default Chat;