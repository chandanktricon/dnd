import React, { Component } from 'react';
import Patterns from '../patterns/patterns';
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
    var tempState = this.handleDrop(e, true, i + 1);
    this.setState({ patterns: tempState}, () => {console.log(this.state.patterns)});
  }

  onDropOnShelf = (e) => {
    var tempState = this.handleDrop(e, false, this.state.patterns.length);
    this.setState({ patterns: tempState}, () => {console.log(this.state.patterns)});
  }

  handleDrop = (e, onBlock, index) => {
    var data = e.dataTransfer.getData('pattern');
    var dropped = Patterns.all.filter(pattern => pattern.name === data);
    var temp = [];
    temp = this.state.patterns.slice(0);
    temp.splice(index, 0, dropped[0]);

    return temp;
  }

  render() {
    var style = {
      resize: 'both'
    };

    return (
      <div className="shelf" onDragOver={this.onDragOverShelf} onDrop={this.onDropOnShelf} contentEditable="true">
        {this.state.patterns.map( 
          (pattern, i) => 
            <div style={this.style}
                  className="block"
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
