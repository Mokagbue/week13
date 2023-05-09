import React, { useState } from "react";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/layout/nav.js";
import Footer from "./components/layout/footer.js";
import Login from "./components/auth/login.js";
import { Signup } from "./components/auth/signup.js";
import StarRating from "./components/func/starrating";
import Villagers from "./components/func/villagers";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  // the default form will be login
  const [user, setUser] = useState({ email: "", password: "" });

  const toggleForms = (formName) => {
    setCurrentForm(formName);
  };
  //This checks to see if the input values match our guest users information, for Login
  const check = (userInfo) => {
    console.log("User Information", userInfo);
    if (
      userInfo.email === guest.email &&
      userInfo.password === guest.password
    ) {
      setUser({
        email: userInfo.email,
        password: userInfo.password,
      });
    } else {
      console.log("Login Failed");
    }
  };

  //This is our guest user
  const guest = {
    email: "guest@acnh.com",
    password: "snooty1234",
  };

  const pageRender = () => {
    if (user.email === guest.email && user.password === guest.password) {
      return <StarRating /> ;
    } else if (currentForm === "login") {
      return <Login onFormSwitch={toggleForms} Login={check} />;
    } else if (currentForm !== "login") {
      return <Signup onFormSwitch={toggleForms} />;
    }
  };

  return (
    <>
    <Nav />
      <div className="container App-header">{pageRender()}</div>
      <Footer />
    </>
  );
}

export default App;
