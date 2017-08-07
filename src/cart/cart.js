import React, { Component } from 'react';
import Box from './box';
import Patterns from '../patterns/patterns';
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

export default Cart;
