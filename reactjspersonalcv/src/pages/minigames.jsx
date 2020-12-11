import React from 'react';
import "./minigames.css";
import { Link } from 'react-router-dom';

class Minigames extends React.Component {
    render() {
      return (
        <div>
            <h1 className="title-games">Choose a game you want to play</h1>
            <Link to="/snakegame"><div className="games">Snake game</div></Link>
            <div className="games">Rock, paper, scissors</div>
            <div className="games">Hangman</div>
        </div>
      );
    }
  }
  
  export default Minigames;