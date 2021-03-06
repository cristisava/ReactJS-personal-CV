import "./Findme.css";
import React from "react";
import fbicon from "../assets/fbicon.svg";
import instagramicon from "../assets/instagramicon.svg";
import gmailicon4 from "../assets/gmailicon4.svg";
import githubicon from "../assets/githubicon.svg";

class Findme extends React.Component {
  render() {
    return (
      <div>
        <h1 className="the-title">You can follow me at</h1>
        <div class="cards-list">
          <div class="card 1">
            <div class="card_image">
              <a
                href="https://www.facebook.com/Cristi.Rock"
                rel="noreferrer"
                target="_blank"
              >
                <img src={fbicon} alt="fblogo"></img>
              </a>
            </div>
          </div>
          <div class="card 2">
            <div class="card_image">
              <a
                href="https://www.instagram.com/cristisava69/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={instagramicon} alt="fblogo"></img>
              </a>
            </div>
          </div>
          <div class="card 3">
            <div class="card_image">
              <a href="mailto:cristirock69@gmail.com" target="_blank" rel="noreferrer">
              <img src={gmailicon4} alt="fblogo"></img> 
              </a>
            </div>
          </div>
          <div class="card 4">
            <div class="card_image">
              <a
                href="https://github.com/cristisava"
                rel="noreferrer"
                target="_blank"
              >
                <img src={githubicon} alt="fblogo"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Findme;
