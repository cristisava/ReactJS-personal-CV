import "./homepage.css";
import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="Header">
          <div className="Content">
            Hi, I'm <span className="clr">Cristian Sava, </span>
            <Typical
              loop={Infinity}
              steps={[
                "future front-end developer",
                1000,
                "22 years old",
                1000,
                "full time student",
                1000,
              ]}
            />
          </div>
        </div>
        <div className="info">
          This is my first personal portfolio, created using Reactjs.
          Hope you like it.
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
