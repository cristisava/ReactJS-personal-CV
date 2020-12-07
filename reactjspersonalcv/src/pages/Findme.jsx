import "./Findme.css";
import React from "react";

class Findme extends React.Component {
  render() {
    return (
        <div className="container">
  <div className="items">
    <div className="icon-wrapper">
      <i className="fa fa-file-text-o">
      </i>
    </div>
    <div className="project-name">
      <p>FACEBOOK</p>
    </div>
  </div>
  <div className="items">
    <div className="icon-wrapper">
      <i className="fa fa-th-list"></i>
    </div>
    <div className="project-name">
      <p>INSTAGRAM</p>
    </div>
  </div>
  <div className="items">
    <div className="icon-wrapper">
      <i className="fa fa-th-large"></i>
    </div>
    <div className="project-name">
      <p>GITHUB</p>
    </div>
  </div>  
</div>
    );
  }
}

export default Findme;
