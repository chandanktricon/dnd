import React, { Component } from 'react';
import '../App.css';

class Block extends Component {
  constructor(props){
    super(props);

    this.state = {
      borderHover: null,
      borderSelected: null
    };
  }
  
  block = e => e.target.closest('.block'); 

  handleMouseMove = (e) => {
    var block = this.block(e);
    var rect = block.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    if(x > rect.width || y > rect.height) {
      block.style.cursor = 'auto';
      this.setState({ borderHover: null });
      return;
    }

    if(x > rect.width - 10 && y <  rect.height - 10) {
      block.style.cursor = 'e-resize';
      this.setState({ borderHover: 'x' });
    } else if(x < rect.width - 10 && y >  rect.height - 10) {
      block.style.cursor = 's-resize';
      this.setState({ borderHover: 'y' });
    } else if(x > rect.width - 10 && y >  rect.height - 10) {
      block.style.cursor = 'se-resize';
      this.setState({ borderHover: 'both' });
    } else {
      block.style.cursor = 'auto';
      this.setState({ borderHover: null });
    }
  }

  handleMouseDown = (e) => {
    console.log('down');
    var block = (this.state.borderHover) ? this.block(e) : null;
    this.props.resizeMode(this.state.borderHover, block);
  }

  handleMouseUp = (e) => {
    console.log('up');
    this.props.resizeMode(null, null);
  }

  handleFocus = (e) => {
    if(this.state.borderHover){
      var block = this.block(e);
      this.props.resizeMode(this.state.borderHover, block);
    }
  }

  handleBlur = (e) => {
    var block = this.block(e);
    this.props.resizeMode(null, null);
  }

  handleDragOver = (e) => {
    var block = this.block(e);
    block.style.borderBottom = "thick solid #080";
  }

  handleDragLeave = (e) => {
    var block = this.block(e);
    block.style.border = null;
  }

  handleDrop = (e) => {
    var block = this.block(e);
    block.style.border = null;
    this.props.setPatternsOnDrop(e, this.props.index + 1);
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
      onBlur={this.handleBlur}
      onDragOver={this.handleDragOver}
      onDragLeave={this.handleDragLeave}
      onDrop={ e => { e.stopPropagation(); this.handleDrop(e); } }  >
        {this.props.children}
      </div>
    );
  }
}

export default Block;
