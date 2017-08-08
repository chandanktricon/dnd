import React, { Component } from 'react';
import '../../../App.css';

class Calendar extends Component {
  constructor(props){
    super(props);

    this.state = {
      borderRadius : true
    }
  }

  changeBorder = () => {
    this.setState({ borderRadius : !this.state.borderRadius});
  }

  render() {
    var radius = { borderRadius : (this.state.borderRadius)? '5px' : '20px' };
    return (
      <div style={radius} className="calendar" onClick={this.changeBorder} contentEditable="true">
        Awesome Calendar
      </div>
    );
  }
}

export default Calendar;
