import React, { Component } from 'react';
import './App.css';
import courtHouseImg from './courtHouseImg.jpg'
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component ={Home} exact />
          <Route path="/about" component ={About}  />

        </Switch>
      </BrowserRouter>
      //   <div className="App-image">
      //     <img src={courtHouseImg} alt="Court House Aparments "/>
      //   </div>
    );
  }
}

export default App;
