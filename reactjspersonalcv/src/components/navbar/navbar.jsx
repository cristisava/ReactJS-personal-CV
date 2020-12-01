import "./navbar.css";
import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <ul className="Navbar">
          <li>
              <div>About me</div>
          </li>
          <li>
              <div>My Online CV</div>
          </li>
          <li>
              <div>My Github</div>
          </li>
          <li>
              <div>What i like</div>
          </li>
      </ul>
    )
  }
}

export default Navbar;