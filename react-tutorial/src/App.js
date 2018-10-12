import React, { Component } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Home = () => (
  <div>
    <h2>Home</h2>


          <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Graço: Make Your Friends Place Your Personal Warehouse</h1>
            </header>
            <p className="App-intro">
              <h2> How It Works:</h2>
                If you are moving out for the semester, going on internship, studying abroad or whatever life throws at you can request a person
                store your stuff.



            </p>
            <p>
              Avalible Storage Areas: Baltimore, MD
            </p>
            <p>
              1. 6605 Collinsdale Rd 2. 22 Acorn Circle
            </p>
          </div>


  </div>
);

const About = () => (
  <div>

  <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
    <div className="example">
      <h1>React Stripe Elements Example</h1>
      <Elements>
        <CheckoutForm />
      </Elements>
    </div>
  </StripeProvider>

  // </div>
  //  //render() {
  //
  //
  //
  // // }
  //
  // </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about"><button>About</button></Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);
export default BasicExample;
