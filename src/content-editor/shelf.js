import React, { Component } from 'react';
import Patterns from './patterns/patterns';
import '../App.css';

class Shelf extends Component {
  constructor(props){
    super(props);

    this.state = {
      patterns: [],
      itemIndex: 0
    };
  }

  onDragOverShelf = (e) => {
    e.preventDefault();
  }

  onDropOnBlock = (i, e) => {
    var tempState = this.handleDrop(e, i + 1);
    this.setState({ patterns: tempState}, () => {console.log(this.state.patterns)});
  }

  onDropOnShelf = (e) => {
    var tempState = this.handleDrop(e, this.state.patterns.length);
    this.setState({ patterns: tempState}, () => {console.log(this.state.patterns)});
  }

  handleDrop = (e, index) => {
    var data = e.dataTransfer.getData('pattern');
    var dropped = Patterns.all.filter(pattern => pattern.name === data);
    var temp = [];
    temp = this.state.patterns.slice(0);
    temp.splice(index, 0, dropped[0]);

    return temp;
  }

  handleFocus = (e) => {
    e.target.closest('.block').style.outline = "#dd4 solid thick";
  }

  handleBlur = (e) => {
    e.target.closest('.block').style.outline = "0";
  }

  handleMouseOver = (e) => {
    if(document.activeElement === e.target.closest('.block')){
      return;
    }
    e.target.closest('.block').style.outline = "#eec solid";
  }

  handleMouseOut = (e) => {
    if(document.activeElement === e.target.closest('.block')){
      return;
    }
    e.target.closest('.block').style.outline = "0";
  }

  render() {
    return (
      <div className="shelf" onDragOver={this.onDragOverShelf} onDrop={this.onDropOnShelf}>
        {this.state.patterns.map( 
          (pattern, i) => 
            <div className="block"
                  contentEditable="true"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                  onDrop={(e) => { e.preventDefault(); e.stopPropagation(); return this.onDropOnBlock(i, e); }}
                  key={i}>
              <pattern.component/>
            </div>
          )
        }
      </div>
    );
  }
}

export default Shelf;
