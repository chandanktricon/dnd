import React, { Component } from 'react';
import '../../../App.css';

class Converter extends Component {
  constructor(props){
    super(props);

    this.state = {
      bgc : false
    }
  }

  changeBGC = () => {
    this.setState({ bgc : !this.state.bgc});
  }

  render() {
    var colors = (this.state.bgc)? { backgroundColor :  '#3f8', color:  'red'} : { backgroundColor :  'white', color: 'black'};
    return (
      <div style={colors} className="converter" onClick={this.changeBGC}>
        Awesome Converter
      </div>
    );
  }
}

export default Converter;
