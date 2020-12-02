import "./header.css";
import React from "react";
import eu from "../header/eu.jpg"

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
         <div className="Content">
         <img src={eu} className="eu" alt="poza"></img>
          Hi, I'm Cristian Sava, future Front-End Developer
        </div>
      </div>
    );
  }
}

export default Header;