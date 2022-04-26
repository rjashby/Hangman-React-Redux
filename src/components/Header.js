import React from "react";
import hangmanImg from "./../img/hangman.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>The Hangman Game</h1>
      <img src={hangmanImg} alt="hangman" />
    </React.Fragment>
  );
}

export default Header;