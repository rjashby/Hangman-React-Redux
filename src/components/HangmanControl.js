import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class HangmanControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      
    };
  }

  render(){
    return (
      <React.Fragment>
       
      </React.Fragment>
    );
  }
}

HangmanControl.propTypes = {
    
};

const mapStateToProps = state => {
  return {

  }
}

HangmanControl = connect(mapStateToProps)(HangmanControl);

export default HangmanControl;