import React, { Component } from 'react';
import '../App.css';

class Block extends Component {
  constructor(props){
    super(props);

    this.state = {
      borderSelected: null
    };
  }
  
  block = e => e.target.closest('.block'); 

  handleMouseMove = (e) => {
    var block = this.block(e);
    var rect = block.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    console.log(x + ' ' + this.state.borderSelected);

    if(x > rect.width || y > rect.height) {
      block.style.cursor = 'auto';
      this.setState({ borderSelected: null });
      return;
    }

    if(x > rect.width - 10 && y <  rect.height - 10) {
      block.style.cursor = 'e-resize';
      this.setState({ borderSelected: 'x' });
    } else if(x < rect.width - 10 && y >  rect.height - 10) {
      block.style.cursor = 's-resize';
      this.setState({ borderSelected: 'y' });
    } else if(x > rect.width - 10 && y >  rect.height - 10) {
      block.style.cursor = 'se-resize';
      this.setState({ borderSelected: 'both' });
    } else {
      block.style.cursor = 'auto';
      this.setState({ borderSelected: null });
    }
  }

  handleMouseDown = (e) => {
    console.log('down');
    var block = (this.state.borderSelected) ? this.block(e) : null;
    this.props.resizeMode(this.state.borderSelected, block);
  }

  handleMouseUp = (e) => {
    console.log('up');
    this.props.resizeMode(this.state.borderSelected, null);
  }

  handleFocus = (e) => {
    if(!this.state.borderSelected){
      this.props.resizeMode(this.state.borderSelected, null);
    } else {
      var block = this.block(e);
      this.props.resizeMode(this.state.borderSelected, block);
    }
  }

  handleBlur = (e) => {
    var block = this.block(e);
    this.props.resizeMode(this.state.borderSelected, null);
  }

  render() {
    return (
      <div className="block"
      style={this.props.displayCss}
      contentEditable="true"
      onMouseMove={this.handleMouseMove}
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
