import "./homepage.css";
import eu from "../header/eu.jpg";
import React from "react";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="Header">
          <img src={eu} className="eu" alt="me"></img>
          <div className="Content">
            Hi, I'm <span className="clr">Cristian Sava</span>, future Front-End
            Developer
          </div>
        </div>
        <div className="bttn">
          <button>Check my work!</button>
        </div>
      </div>
    );
  }
}

export default HomePage;
