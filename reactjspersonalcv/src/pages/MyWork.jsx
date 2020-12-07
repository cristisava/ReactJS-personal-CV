import "./MyWork.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import React from "react";
import gameapp1 from "../components/photos/gameapp1.jpg";
import gameapp2 from "../components/photos/gameapp2.jpg";
import gameapp3 from "../components/photos/gameapp3.jpg";
import movieapp1 from "../components/photos/movieapp1.jpg";
import movieapp2 from "../components/photos/movieapp2.jpg";
import movieapp3 from "../components/photos/movieapp3.jpg";
import movieapp4 from "../components/photos/movieapp4.jpg";
import playergame1 from "../components/photos/playergame1.jpg";
import playergame2 from "../components/photos/playergame2.jpg";
import playergame3 from "../components/photos/playergame3.jpg";
import game1 from "../components/photos/game1.jpg";
import game2 from "../components/photos/game2.jpg";
import game3 from "../components/photos/game3.jpg";
import game4 from "../components/photos/game4.jpg";

class MyWork extends React.Component {
  render() {
    return (
      <div className="mywork">
        <div className="React-game-app">
          <a
            target="_blank"
            href="https://github.com/razvantimis/myIMDB-16.2"
            rel="noreferrer"
          >
            <h1>ReactJS Movie App</h1>
          </a>
          <p className="workp">
            This was our final project, the team project.We had to create a
            movie app, everyone had their individual task. Here are some
            screenshots of the projects and some lines of code.
          </p>
          <div className="image-slider">
            <AliceCarousel
              autoPlay="true"
              infinite="true"
              autoPlayInterval="1500"
            >
              <img src={movieapp1} className="sliderimg" alt="work1" />
              <img src={movieapp2} className="sliderimg" alt="work1" />
              <img src={movieapp3} className="sliderimg" alt="work1" />
              <img src={movieapp4} className="sliderimg" alt="work1" />
            </AliceCarousel>
          </div>
        </div>
        <div className="React-game-app">
          <a
            target="_blank"
            href="https://github.com/cristisava/ReactGameList"
            rel="noreferrer"
          >
            <h1>ReactJS Game App</h1>
          </a>
          <p className="workp">
            This is the Game App i made using ReactJS.The goal was to create a
            simple webpage where we show all the games fetched from an external
            API.
          </p>
          <div className="image-slider">
            <AliceCarousel
              autoPlay="true"
              infinite="true"
              autoPlayInterval="1500"
            >
              <img src={gameapp1} className="sliderimg" alt="work1" />
              <img src={gameapp2} className="sliderimg" alt="work1" />
              <img src={gameapp3} className="sliderimg" alt="work1" />
            </AliceCarousel>
          </div>
        </div>
        <div className="React-game-app">
          <a
            target="_blank"
            href="https://github.com/cristisava/playerGame"
            rel="noreferrer"
          >
            <h1>VanilaJS player game</h1>
          </a>
          <p className="workp">
            This is a simple JavaScript game that i created. The green ball
            that's in the box is moving when i press the arrows in the direction
            that i want.
          </p>
          <div className="image-slider">
            <AliceCarousel
              autoPlay="true"
              infinite="true"
              autoPlayInterval="1500"
            >
              <img src={playergame1} className="sliderimg" alt="work1" />
              <img src={playergame2} className="sliderimg" alt="work1" />
              <img src={playergame3} className="sliderimg" alt="work1" />
            </AliceCarousel>
          </div>
        </div>
        <div className="React-game-app">
          <a
            target="_blank"
            href="https://github.com/cristisava/gameList"
            rel="noreferrer"
          >
            <h1>VanilaJS game app</h1>
            <p className="workp">
              This is the Game App i made using VanilaJS.The goal was to create
              a simple webpage where we show all the games fetched from an
              external API.
            </p>
          </a>
          <div className="image-slider">
            <AliceCarousel
              autoPlay="true"
              infinite="true"
              autoPlayInterval="1500"
            >
              <img src={game1} className="sliderimg" alt="work1" />
              <img src={game2} className="sliderimg" alt="work1" />
              <img src={game3} className="sliderimg" alt="work1" />
              <img src={game4} className="sliderimg" alt="work1" />
            </AliceCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default MyWork;
