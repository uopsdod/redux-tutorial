import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux libraries
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
// Redux my libraries
import MyPageOneReducer from './MyPageOne/redux/reducers'

// combineReducers method seems to do lots of stuff that I don't understand 
const store = createStore(combineReducers({ MyPageOneState : MyPageOneReducer}))

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
