import React, { Component } from 'react';
import Patterns from './patterns/patterns';
import Block from './block';
import '../App.css';

class Shelf extends Component {
  constructor(props){
    super(props);

    this.state = {
      patterns: [],
      activeBlock: null,
      resizeMode: null
    };
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  onDrop = (e) => {
    var tempState = this.dropPayload(e, this.state.patterns.length);
    if(!tempState) return;
    this.setState({patterns: tempState}, () => {console.log(this.state.patterns)});
  }

  dropPayload = (e, index) => {
    var data = e.dataTransfer.getData('pattern');
    if(!data) return null;

    var dropped = Patterns.all.filter(pattern => pattern.name === data);
    var payload = [];
    payload = this.state.patterns.slice(0);
    payload.splice(index, 0, dropped[0]);

    return payload;
  }

  handleMouseMove = (e) => {
    this.resize(e, this.state.resizeMode);
    console.log(this.state.resizeMode);
  }

  resizeMode = (mode, block) => {
    console.log(mode);
    this.setState({ resizeMode: mode, activeBlock: block });
  }

  resize = (e, mode) => {
    if(!mode)
      return;

    var block = this.state.activeBlock;
    var rect = block.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    if(mode === 'x')
      block.style.width = (x > 50) ?  `${x}px` : block.style.width;
    if(mode === 'y')
      block.style.height = (y > 50) ?  `${y}px` : block.style.height;
    if(mode === 'both') {
      block.style.width = (x > 50) ?  `${x}px` : block.style.width;
      block.style.height = (y > 50) ?  `${y}px` : block.style.height;
    }

    // console.log(rect.width + '  ' + x);
    // console.log(this.state.resizeMode);
  }

  render() {
    return (
      <div id="shelf"
      className="shelf"
      onDragOver={this.onDragOver} 
      onDrop={this.onDrop}
      onClick={(e) => {e.stopPropagation()}}
      onMouseMove={this.handleMouseMove}>
        {this.state.patterns.map( 
          (pattern, i) => 
            <Block key={i}
            displayCss={{ display: pattern.props.display? pattern.props.display : 'block' }}
            resizeMode={this.resizeMode}>
              <pattern.component/>
            </Block>
          )
        }
      </div>
    );
  }
}

export default Shelf;
