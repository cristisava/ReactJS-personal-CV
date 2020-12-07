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
      </div>
    );
  }
}

export default Footer;
