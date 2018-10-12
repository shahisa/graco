import React, { Component } from 'react';
import './App.css';
import courtHouseImg from './courtHouseImg.jpg'
import {BrowserRouter, Route} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component ={Home} exact />
          <Route path="/about" component ={About}  />

        </div>
      </BrowserRouter>
      //   <div className="App-image">
      //     <img src={courtHouseImg} alt="Court House Aparments "/>
      //   </div>
    );
  }
}

export default App;
