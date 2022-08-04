
import React, { useState } from 'react';
import './App.css';
import users from "./users.json";
import { useCookies } from "react-cookie";

function App() {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const loginhandler = (e) => {
    const loggedUser = users.find((user) => user.username === uname && user.password === password);
    if(loggedUser){
      setFirstName(loggedUser.firstname);
      setIsLoggedIn(true);
      setCookie("user", JSON.stringify({username: loggedUser.username, firstname: loggedUser.firstname}), {path:"/"});
    }
  }

  const logoutHandler = (e) => {
    if(isLoggedIn){
      setIsLoggedIn(false);
      removeCookie("user", {path:"/"});
    }
  }
  return (
    <div className="App">
      {!isLoggedIn ? <div className="LoginSection">
          <input id="uname" type="text" placeholder="Enter username" onChange={(e)=>setUname(e.target.value)}></input>
          <input id="psswd" type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}></input>
          <input className="primary-btn" type="submit" value="Login" onClick={loginhandler}></input>
      </div> : <div><h3>Welcome, {firstName}</h3> <input className="secondary-btn" type="submit" value="Sign out" onClick={logoutHandler}></input></div>}
    </div>
  );
}

export default App;
