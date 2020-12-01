import "./App.css";
import React from "react";
import Header from "./components/header/header.jsx";
import Navbar from "./components/navbar/navbar.jsx"

class App extends React.Component {
  render() {
    return (
      <div>
      <Header></Header>
      {/* <div className="some-info">Hi, I'm Cristian Sava, a future Front-End Developer.</div> */}
      <Navbar></Navbar>
      </div>
    )
  }
}

export default App;
