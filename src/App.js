import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shelf from './shelf/shelf';
import Cart from './cart/cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Shelf/>
        <Cart/>
      </div>
    );
  }
}

export default App;
