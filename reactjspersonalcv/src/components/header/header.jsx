import "./header.css";
import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
        <div class="topnav" id="myTopnav">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/myonlinecv">
            <p>Online CV</p>
          </Link>
          <Link to="/mywork">
            <p>My Work</p>
          </Link>
          <Link to="/findme">
            <p>Find Me</p>
          </Link>
        </div>
    );
  }
}

export default Header;
