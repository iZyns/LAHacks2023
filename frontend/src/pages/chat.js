import React, { Component } from "react";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
  
const Chat = () => {
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMsg("");
  }

  return (
    <div>
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
      {/* <div className = "align-left">
        <b>You:</b>&nbsp; {msg}
      </div> */}

      <div className = "footer">
        <form style={{display: "flex", flexDirection: "row"}} onSubmit={handleSubmit}>
          <input 
            style={{flex: "1"}}
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Type your message here."/>
        </form>
      </div>      
    </div>
  );
};
  
export default Chat;