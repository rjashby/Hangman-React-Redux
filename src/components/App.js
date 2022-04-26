// import React from "react";
import Header from "./Header";
import HangmanControl from "./HangmanControl";
import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

class App extends Component {
  onChange = (input) => {
    console.log("Input changed", input);
  }

  onKeyPress = (button) => {
    console.log("Button pressed", button);
  }
  render(){
    return (
      <React.Fragment>
        <Header />
        <HangmanControl />
        <hr/>
        <Keyboard
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
    </React.Fragment>
    );
  }
}

export default App;