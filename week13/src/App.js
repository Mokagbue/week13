import React, { useState } from "react";
import "./App.css";
import Nav from "./components/layout/nav.js";
import Footer from "./components/layout/footer.js";
import { Login } from "./components/auth/login.js";
import { Signup } from "./components/auth/signup.js";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  // the default form will be login

  const toggleForms = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <>
      <Nav />
      <div className="container App-header">
      {currentForm === "login" ? <Login onFormSwitch={toggleForms} /> : <Signup onFormSwitch={toggleForms} />}
      </div>
      <Footer />
    </>
  );
}

export default App;
