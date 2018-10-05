import React, { Component } from 'react';
import './App.css';
import courtHouseImg from './courtHouseImg.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Graço: Make Your Friends Place Your Personal Warehouse</h1>
        </header>
        <p className="App-intro">
          <h2> How It Works:</h2>
            If you are moving out for the semester, have a long layover, or just tired of carrying your bags, now you
            have a place to drop store them.
        </p>
        <p>
          Avalible Storage Areas: Baltimore, MD
        </p>
        <div className="App-image">
          <img src={courtHouseImg} alt="Court House Aparments "/>
        </div>
        <p>
          1. 6605 Collinsdale Rd 2. 22 Acorn Circle
        </p>

      </div>

    );
  }
}

export default App;
