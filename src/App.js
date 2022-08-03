
import React, { useState } from 'react';
import './App.css';
import users from "./users.json"

function App() {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("Guest");
  const loginhandler = (e) => {
    const loggedUser = users.find((user) => user.username === uname && user.password === password);
    if(loggedUser){
      setFirstName(loggedUser.firstname);
    }
    else {
      setFirstName("Guest");
    }
    
  }
  return (
    <div className="App">
      <div className="welcomeMessage">
          <p>Welcome, {firstName}</p>
      </div>
     <div>
          <input id="uname" type="text" placeholder="Enter user name" onChange={(e)=>setUname(e.target.value)}></input>
          <input id="psswd" type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}></input>
          <input className="primary-btn" type="submit" value="Login" onClick={loginhandler}></input>
      </div>
    </div>
  );
}

export default App;
