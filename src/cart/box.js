import React, { Component } from 'react';
import '../App.css';

class Box extends Component {
  constructor(props){
    super(props);
  }

  setDragData = (e) => {
    var data = e.dataTransfer.setData('pattern', this.props.content);
  }

  render() {
    return (
      <div className="box" draggable onDragStart={this.setDragData}>
        {this.props.content}
      </div>
    );
  }
}

export default Box;
