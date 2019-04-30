//React
import React from "react";
import ReactDOM from "react-dom";

//Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from './reducers'

//CSS Reset
import "./index.css";

//Components
import App from "./App";

//dummy starter reducer 
// function reducer () {
//     state: {}
// }

//Redux Dev Tools 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const store = createStore(reducer,  
//  composeEnhancers
(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById("root")
);