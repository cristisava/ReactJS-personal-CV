import "./MyWork.css";
import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import logo8 from "../components/header/logo8.jpg";
import logo9 from "../components/header/logo9.jpg";
import logo10 from "../components/header/logo10.jpg";
import logo11 from "../components/header/logo11.jpg";

class MyWork extends React.Component {
  render() {
    return (
      <div className="mywork">
         <div><div className="image-slider">
        <AliceCarousel autoPlay="true" infinite="true" autoPlayInterval="1500">
      <img src={logo8} className="sliderimg" alt="work1"/>
      <img src={logo9} className="sliderimg" alt="work1"/>
      <img src={logo10} className="sliderimg" alt="work1"/>
      <img src={logo11} className="sliderimg" alt="work1"/>
        </AliceCarousel>
        </div></div>
      </div>
    );
  }
}

export default MyWork;