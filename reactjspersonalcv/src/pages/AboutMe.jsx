import "./AboutMe.css";
import React from "react";
import { Link } from 'react-router-dom';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about">
         <Link to="/"><div>Home</div></Link>
      </div>
    );
  }
}

export default AboutMe;