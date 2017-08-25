import React, { Component } from 'react';
import '../App.css';

class Block extends Component {
  constructor(props) {
    super(props);

    this.state = {
      borderHovered: null,
      borderSelected: null
    };
  }

  block = e => e.target.closest('.block');

  handleMouseMove = (e) => {
    this.checkBorderHover(this.block(e), e.clientX, e.clientY);
  }

  handleFocus = (e) => {
  }

  handleBlur = (e) => {
  }

  handleDragOver = (e) => {
    this.block(e).style.borderBottom = "thick solid #080";
  }

  handleDragLeave = (e) => {
    this.block(e).style.border = null;
  }

  handleDrop = (e) => {
    this.block(e).style.border = null;
    this.props.setPatternsOnDrop(e, this.props.index + 1);
  }

  handleMouseDown = (e) => {
    console.log('mouse down');
    var block = this.block(e);
    var mode = this.state.borderHovered;
    this.setState({ borderSelected: mode }, () => {this.props.resizeMode(this.state.borderSelected, block)});
  }

  handleMouseUp = (e) => {
    console.log('mouse up');
    this.setState({ borderSelected: null }, () => {this.props.resizeMode(null, null)});
  }

  checkBorderHover = (block, clientX, clientY) => {
    var rect = block.getBoundingClientRect();
    var x = clientX - rect.left;
    var y = clientY - rect.top;

    if (x > rect.width || y > rect.height) {
      block.style.cursor = 'auto';
      this.setState({ borderHovered: null });
      return;
    }

    if (x > rect.width - 10 && y < rect.height - 10) {
      block.style.cursor = 'e-resize';
      this.setState({ borderHovered: 'e' });
    } else if (x < rect.width - 10 && y > rect.height - 10) {
      block.style.cursor = 's-resize';
      this.setState({ borderHovered: 's' });
    } else if (x > rect.width - 10 && y > rect.height - 10) {
      block.style.cursor = 'se-resize';
      this.setState({ borderHovered: 'se' });
    } else {
      block.style.cursor = 'auto';
      this.setState({ borderHovered: null });
    }
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
        onDrop={e => { e.stopPropagation(); this.handleDrop(e); }}  >
        {this.props.children}
      </div>
    );
  }
}

export default Block;
