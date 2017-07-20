import React from 'react';
import {  render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import store from './controller/store'

const rootElement = document.getElementById('root')
store.subscribe(()=>{
  console.log('state changed',store.getState());
})
render(
   <Provider store = {store}>
      <App />
   </Provider>,
   rootElement
)
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


/*
// To understand Redux
import { applyMiddleware, createStore} from 'redux'
const reducer = function (state, action) {
  if (action.type === "Acc") {
    return state + action.payload
  }else if(action.type === "Dec"){
    return state - action.payload
  }
  return state
}

const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
  action.type = "Dec"
  next(action)
}
const middleware = applyMiddleware(logger);

const store = createStore(reducer,1,middleware);

store.subscribe(()=>{
  console.log('state changed',store.getState());
})

store.dispatch({type: "Acc", payload: 1})
store.dispatch({type: "Acc", payload: 5})
store.dispatch({type: "Acc", payload: 1})
store.dispatch({type: "Dec", payload: 2})
*/
