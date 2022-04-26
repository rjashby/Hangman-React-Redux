import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from "prop-types";
import randomWord from "./Words.js"
import Keyboard from './Keyboard.js';

class HangmanControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {

    };
  }

  stateGame = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'START_GAME',
    }
    dispatch(action);
    this.setState({
    
    });
  }

  splitWord = (word) => {
    let spaceArray = [];
    let spaces = word.split("")
    for (let i = 0; i < spaces.length; i++) {
      if (spaces[i] == "-") {
        spaceArray.push("- ")
      } else {
      spaceArray.push("_ ");
      }
    }
    return spaceArray;
  }

  render(){
    let myWord = randomWord().toUpperCase();
    return (
      <React.Fragment>
        <h3>Hi There! Welcome to Hangman</h3>
        <h3>{myWord}</h3>
        <h3>{this.splitWord(myWord)}</h3>
        <p>{Keyboard}</p>
        <button onClick={this.startGame}>Start New Game</button>
      </React.Fragment>
    );
  }
}

HangmanControl.propTypes = {
    
};

// const mapStateToProps = state => {
//   return {

//   }
// }

// HangmanControl = connect(mapStateToProps)(HangmanControl);

export default HangmanControl;