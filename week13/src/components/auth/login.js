import React, { useState } from "react";

function Login({Login, onFormSwitch}) {
  const [userLoginInfo, setUserLoginInfo] = useState({email:"", password:""});
 
  const handleSubmit = (event) => {
    event.preventDefault();
    Login(userLoginInfo);
  };


  return (
    <>
      <div>
        <h3 className="App-link">Log In</h3>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <label htmlFor="email">email</label>
          <input
            type="email"
            placeholder="guest@acnh.com"
            onChange={(event) => setUserLoginInfo({...userLoginInfo, email: event.target.value})}
            value={userLoginInfo.email}
            className="inputStyle"
          />
          {/* 'htmlFor=password' makes the user input appear as stars and not letters, very neat */}
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="snooty1234"
            id="password"
            name="password"
            onChange={(event) => setUserLoginInfo({...userLoginInfo, password: event.target.value})}
            value={userLoginInfo.password}
            className="inputStyle"
          />
          <button type="submit" className="link-button my-2" >
            Log In
          </button>
        </form>
        <button
          onClick={() => onFormSwitch("signup")}
          className="link-button my-4"
        >
          Don't already have an account? Sign up here.
        </button>
      </div>
      
      
    </>
  );
};

export default Login;