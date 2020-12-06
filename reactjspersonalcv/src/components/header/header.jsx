import "./header.css";
import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div class="topnav" id="myTopnav">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/myonlinecv">
            <p>Online CV</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
          <Link to="/aboutme">
            <p>About Me</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
