import "./homepage.css";
import eu from "../header/eu.jpg";
import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/mywork">
            <button>Check my work!</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
