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

  handleDrop = (e) => {
    this.setPatternsOnDrop(e, this.state.patterns.length);
  }

  setPatternsOnDrop = (e, index) => {
    var data = e.dataTransfer.getData('patternName');
    if(!data) return null;

    var dropped = Patterns.all.filter(pattern => pattern.name === data);
    var newPatterns = [];
    newPatterns = this.state.patterns.slice(0);
    newPatterns.splice(index, 0, dropped[0]);

    this.setState({ patterns: newPatterns });
  }

  handleMouseMove = (e) => {
    this.resize(e, this.state.resizeMode, this.state.activeBlock);
  }

  resizeMode = (mode, block) => {
    this.setState({ resizeMode: mode, activeBlock: block });
  }

  resize = (e, mode, block) => {
    if(!mode)
      return;
    
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
  }

  render() {
    return (
      <div id="shelf"
      className="shelf"
      onDragOver={(e) => { e.preventDefault(); }} 
      onDrop={this.handleDrop}
      onMouseMove={this.handleMouseMove}>
        {this.state.patterns.map( 
          (pattern, i) => 
            <Block key={i}
              index={i}
              displayCss={{ display: pattern.props.display ? pattern.props.display : 'block' }}
              resizeMode={this.resizeMode}
              setPatternsOnDrop={this.setPatternsOnDrop}>
              <pattern.component/>
            </Block>
          )
        }
      </div>
    );
  }
}

export default Shelf;
