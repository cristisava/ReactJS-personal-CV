import "./header.css";
import React from "react";
import eu from "../header/eu.jpg";

class Header extends React.Component {
  render() {
    return (
      <div>
      <div class="topnav" id="myTopnav">
        <p>Home</p>
        <p>Online CV</p>
        <p>Contact</p>
        <p>About Me</p>
      </div>
      <div className="Header">
          <img src={eu} className="eu" alt="poza"></img>
          <div className="Content">
           Hi, I'm Cristian Sava, future Front-End Developer
         </div>
       </div>
      </div>
       
    );
  }
}

export default Header;
