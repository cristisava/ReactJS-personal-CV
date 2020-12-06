import "./homepage.css";
import eu from "../header/eu.jpg";
import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import logo8 from "../header/logo8.jpg";
import logo9 from "../header/logo9.jpg";
import logo10 from "../header/logo10.jpg";
import logo11 from "../header/logo11.jpg";


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="Header">
          <img src={eu} className="eu" alt="poza"></img>
          <div className="Content">
            Hi, I'm Cristian Sava, future Front-End Developer
          </div>
        </div>
        <div className="image-slider">
        <AliceCarousel autoPlay="true" infinite="true" autoPlayInterval="2000">
      <img src={logo8} className="sliderimg" alt="work1"/>
      <img src={logo9} className="sliderimg" alt="work1"/>
      <img src={logo10} className="sliderimg" alt="work1"/>
      <img src={logo11} className="sliderimg" alt="work1"/>
        </AliceCarousel>
        </div>
      </div>
    );
  }
}

export default HomePage;
