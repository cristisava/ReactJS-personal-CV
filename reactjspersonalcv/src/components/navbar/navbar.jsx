import "./navbar.css";
import React from "react";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <ul className="Navbar">
        <li>
          <Link to="/aboutme"><div>About me</div></Link>
        </li>
        <li>
          <Link to="/myonlinecv"><div>My Online CV</div></Link>
        </li>
        <li>
          <div>My Github</div>
        </li>
        <li>
          <div>What i like</div>
        </li>
      </ul>
    );
  }
}

export default Navbar;
