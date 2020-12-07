import "./footer.css";
import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
        <div class="bottomnav" id="myBottomnav">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/myonlinecv">
            <p>Online CV</p>
          </Link>
          <Link to="/findme">
            <p>Find Me</p>
          </Link>
          <Link to="/aboutme">
            <p>About Me</p>
            </Link>
        </div>
        // <div class="bottomnav" id="myBottomnav">
        //   <p> © 2020 Copyright Cristian Sava </p>
        // </div>
    );
  }
}

export default Footer;
