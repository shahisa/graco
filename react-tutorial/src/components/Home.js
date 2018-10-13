import React from "react";
import courtHouseImg from '../courtHouseImg.jpg'


const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title"> EZ Storage: Make Your Friends Place Your Personal Warehouse</h1>
      </header>
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
  )
};


export default Home;
