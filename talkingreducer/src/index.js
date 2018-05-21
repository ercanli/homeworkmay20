import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const redux = require('redux');

// Reducers specify how the application's state changes in response to actions sent to the store.
// Remember that actions only describe what happened, but don't describe how the application's state changes.
// A reducer is a pure function that takes the previous state and an action, and returns the next state.
//
// (previousState, action) => newState

// Implement the function `talkingReducer` to make the below code print the expected output.

const talkingReducer = (state = 0, { type, text }) => {
  //export default (state = 0, { type, text }) => {
  switch (type) {
    case 'GREETING':
      return (state = 'Hello');
    case 'QUESTION':
      switch (text) {
        case 'How are you?':
          return (state = "I'm doing well");
        case 'How old are you?':
          return (state = 28);
      }
      return (state = 'How are you');
    case 'QUESTION':
  }
};

//https://readest.codaisseur.com/courses/intermediate-bootcamp/05-redux-i/05-labs/01-move
//https://redux.js.org/recipes/structuring-reducers/refactoring-reducers-example
//https://stackoverflow.com/questions/40033443/redux-use-action-object-method-in-reducer-instead-of-switch

const store = redux.createStore(talkingReducer);

store.dispatch({ type: 'GREETING' });

// Expected output: "Hello"
console.log(store.getState());

store.dispatch({ type: 'QUESTION', text: 'How are you?' });

// Expected output: "I'm doing well"
console.log(store.getState());

store.dispatch({ type: 'QUESTION', text: 'How old are you?' });

// Expected output: 28
console.log(store.getState());
