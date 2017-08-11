import React, { Component } from 'react';
import Patterns from './patterns/patterns';
import '../App.css';

class Shelf extends Component {
  constructor(props){
    super(props);

    this.state = {
      patterns: [],
      itemIndex: 0,
      focusBlockIndex: null,
      focusBlockWidth: null,
      focusBlockInitalClientX: null
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
    e.target.closest('.block').style.border = "5px solid #dd4";
  }

  handleBlur = (e) => {
    e.target.closest('.block').style.border = "0";
    this.setState({ focusBlockIndex: null, focusBlockWidth: null, focusBlockInitalClientX: null});
  }

  handleMouseOver = (e) => {
    if(document.activeElement === e.target.closest('.block')){
      return;
    }
    e.target.closest('.block').style.border = "2px solid #eec";
  }

  handleMouseOut = (e) => {
    if(document.activeElement === e.target.closest('.block')){
      return;
    }
    e.target.closest('.block').style.border = "0";
  }

  handleMouseDown = (e) => {
    var block = e.target.closest('.block');
    var rect = e.target.closest('.block').getBoundingClientRect();
    var x = e.clientX - rect.left;
    console.log(rect.left);
    console.log(rect.width);
    // this.setState({ focusBlockWidth: rect.width, focusBlockInitalClientX: x});
    console.log(this.props);
  }

  handleMouseUp = (e) => {
    console.log(e.target.closest('.block').getBoundingClientRect());
    this.setState({ focusBlockWidth: null, focusBlockInitalClientX: null});
  }

  handleMouseMove = (e) => {
    if(!this.state.focusBlockWidth || !this.state.focusBlockInitalClientX) return;

    var block = e.target.closest('.block');
    var rect = e.target.closest('.block').getBoundingClientRect();
    var x = e.clientX - rect.left;
    // block.style.width = `${x}px`;

    console.log(rect.width + '  ' + x);
  }

  getWidth(i) {

  }

  render() {
    return (
      <div id="shelf"
          className="shelf" 
          onClick={()=>{console.log(document.getElementById('shelf'))}}
          onDragOver={this.onDragOverShelf} 
          onDrop={this.onDropOnShelf}>
        {this.state.patterns.map( 
          (pattern, i) => 
            <div className="block"
                  contentEditable="true"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                  onMouseDown={this.handleMouseDown}
                  onMouseUp={this.handleMouseUp}
                  onMouseMove={this.handleMouseMove}
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
