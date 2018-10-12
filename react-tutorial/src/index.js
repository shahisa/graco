import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Amplify from 'aws-amplify';
// import awsmobile from './YOUR-PATH-TO/aws-exports';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// Amplify.configure(awsmobile);
