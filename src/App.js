import React, { Component } from 'react';
import './App.css';
import Shelf from './content-editor/shelf';
import Cart from './content-editor/cart';

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
