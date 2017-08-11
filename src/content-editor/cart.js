import React, { Component } from 'react';
import Patterns from './patterns/patterns';
import '../App.css';

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        This is Cart, pick boxes &amp; throw on Shelf
        <br/>
        {Patterns.all.map( widget => <Box content={widget.name}/>)}
      </div>
    );
  }
}

class Box extends Component {
  constructor(props){
    super(props);
  }

  setDragData = (e) => {
    e.dataTransfer.setData('pattern', this.props.content);
  }

  render() {
    return (
      <div className="box" draggable onDragStart={this.setDragData}>
        {this.props.content}
      </div>
    );
  }
}

export default Cart;
