import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submission?", email, password);
  };

  return (
    <div>
      <h3 className="App-link">Log In</h3>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <label htmlFor="email">email</label>
        <input value={email} type="email" placholder="email" onChange={(event) => setEmail(event.target.value)} />
        {/* 'htmlFor=password' makes the user input appear as stars and not letters, very neat */}
        <label htmlFor="password">password</label>
        <input
          value={password}
          type="password"
          placholder="password"
          id="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" className="link-button my-2">Log In</button>
      </form>
      <button onClick={() => props.onFormSwitch('signup')} className="link-button my-4">Don't already have an account? Sign up here.</button>
    </div>
  );
};
