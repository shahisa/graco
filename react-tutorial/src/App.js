import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Graço: Make Your Friends Place Your Personal Warehouse</h1>
        </header>
        <p className="App-intro">
          Avalible Storage Areas: Baltimore, MD
        </p>
        <p>1. 6605 Collinsdale Rd 2. 22 Acorn Circle</p>
      </div>
    );
  }
}

export default App;
