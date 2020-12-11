import "./MyOnlineCV.css";
import React from "react";
import eu from "../components/header/eu.jpg";

class MyOnlineCV extends React.Component {
  render() {
    return (
      <div>
        <h1 className="the-title">My personal CV</h1>
        <div className="container-cv">
          <header className="cv-title">
            <img src={eu} className="cvImage" alt="Profile"></img>
            <div className="cv-header">
              <h1 className="titles-cv2">Cristian Sava</h1>
            </div>
          </header>
          <div className="content">
            <div className="left">
              <div className="left-side">
                <h2 className="titles-cv">Contact</h2>
                <ul>
                  <li>Email</li>
                  <li>cristirock69@gmail.com</li>
                  <li>Phone number</li>
                  <li>0740425776</li>
                  <li>LinkedIn</li>
                  <li>Cristian-Vasile Sava</li>
                </ul>
              </div>
              <div className="left-side">
                <h2 className="titles-cv">Languages</h2>
                <span>English - Advanced</span>
                <span>Romanian - Native</span>
              </div>
              <div className="left-side">
                <h2 className="titles-cv">Personal Skills</h2>
                <ul>
                  <li>Creativity.</li>
                  <li>Collaboration.</li>
                  <li>Empathy.</li>
                  <li>Decision Making.</li>
                  <li>Problem Solving.</li>
                  <li>Comunication</li>
                  <li>Conflict Resolution.</li>
                  <li>Active Listening.</li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="right-side">
                <h2 className="titles-cv">Profile</h2>
                <p>
                  I am an energetic, ambitious person who has developed a mature
                  and responsible approach to any task that I undertake, or
                  situation that I am presented with. At the moment, I'm a
                  student and I'm interested in Front-End Web Development. I
                  have basic knowledge of HTML, CSS, Javascript and I also fell
                  in love with ReactJS. I am really looking forward to following
                  a career in this domain.
                </p>
              </div>
              <div className="right-side">
                <h2 className="titles-cv">Work experience</h2>
                <ul>
                  <li>Bartender at "Sala de nunti Pedagogic"</li>
                  <li>2017-2018</li>
                  <li>Salesman at "LikeABox" -Iulius Mall</li>
                  <li>2018-present</li>
                </ul>
              </div>
              <div className="right-side">
                <h2 className="titles-cv">Education</h2>
                <ul>
                  <li>
                    Faculty of Economic Science and Business Administration
                  </li>
                  <li>2018-present</li>
                </ul>
              </div>
              <div className="right-side">
                <h2 className="titles-cv">Courses</h2>
                <ul>
                  <h3>Introduction to IT - The Informal School of IT</h3>
                  <li>Jun 2020 - Jul 2020</li>
                  <h3>Front-end Web Development, The Informal School of IT</h3>
                  <li>Jul 2020 - Dec 2020</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyOnlineCV;
