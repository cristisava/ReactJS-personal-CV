import "./App.css";
import React from "react";
import Header from "./components/header/header.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import logo from "./components/header/logo.jpg";

class App extends React.Component {
  render() {
    return (
      <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="some-info"> Hi, I'm Cristian Sava and I'm a future Front-End Developer</div>
      <img src={logo} alt="myself"></img>
      </div>
    )
  }
}

export default App;
