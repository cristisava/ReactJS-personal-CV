import "./Findme.css";
import React from "react";
import fbicon from "../components/photos/fbicon.svg";
import instagramicon from "../components/photos/instagramicon.svg";
import gmailicon from "../components/photos/gmailicon.svg";
import githubicon from "../components/photos/githubicon.svg";

class Findme extends React.Component {
  render() {
    return (
      <div>
        <h1>You can follow me at</h1>
      <div class="cards-list">
        <div class="card 1">
          <div class="card_image"><img src={fbicon} alt="fblogo"></img> </div>
        </div>
        <div class="card 2">
          <div class="card_image"><img src={instagramicon} alt="fblogo"></img></div>
        </div>

        <div class="card 3">
          <div class="card_image"><img src={gmailicon} alt="fblogo"></img></div>
        </div>
        <div class="card 4">
          <div class="card_image"><img src={githubicon} alt="fblogo"></img></div>
        </div>
      </div>
      </div>
    );
  }
}

export default Findme;
