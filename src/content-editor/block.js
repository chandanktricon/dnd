import React, { Component } from 'react';
import '../App.css';

class Block extends Component {
  constructor(props){
    super(props);

    this.state = {
      borderSelected: false
    };
  }

  handleMouseOver = (e) => {
    if(document.activeElement === e.target.closest('.block'))
      return;
    e.target.closest('.block').style.border = "2px solid #eec";
  }

  handleMouseOut = (e) => {
    if(document.activeElement === e.target.closest('.block'))
      return;
    e.target.closest('.block').style.border = "0";
  }

  handleMouseDown = (e) => {
    console.log('down');
    this.setState({ borderSelected: true });
    var block = e.target.closest('.block');
    this.props.resizeMode(true, block);
  }

  handleMouseUp = (e) => {
    console.log('up');
    this.setState({ borderSelected: false });
    this.props.resizeMode(false, null);
  }

  handleFocus = (e) => {
    e.target.closest('.block').style.border = "5px solid #dd4";
    if(this.state.borderSelected){
      var block = e.target.closest('.block');
      this.props.resizeMode(true, block);
    } else {
      this.props.resizeMode(false, null);
    }
  }

  handleBlur = (e) => {
    e.target.closest('.block').style.border = "0";
    this.props.resizeMode(false, null);
  }

  render() {
    return (
      <div className="block"
      style={this.props.displayCss}
      contentEditable="true"
      onMouseOver={this.handleMouseOver}
      onMouseOut={this.handleMouseOut}
      onMouseDown={this.handleMouseDown}
      onMouseUp={this.handleMouseUp}
      onFocus={this.handleFocus}
      onBlur={this.handleBlur}>
        {this.props.children}
      </div>
    );
  }
}

export default Block;
