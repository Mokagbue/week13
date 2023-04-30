import React, { useState } from "react";

export const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submission?", email, password);
  };

  return (
    <div>
      <h3 className="App-link">Sign Up</h3>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <label>username</label>
        <input value={username} name="username" id="username" placholder="username" onChange={(event) => setUsername(event.target.value)} />
        <label htmlFor="emial">email</label>
        <input value={email} type="email" placholder="email" onChange={(event) => setEmail(event.target.value)} />
       <label htmlFor="password">password</label>
        <input
          value={password}
          type="password"
          placholder="password"
          id="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" className="link-button my-2">Sign Up</button>
      </form>
      <button onClick={() => props.onFormSwitch('login')} className="link-button my-4">Already have an account? Login here.</button>
    </div>
  );
};
