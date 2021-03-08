import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";

const intialState = {};

const middleware = [thunkMiddleware];

// const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTETION_COMPOSE__ ? window.__REDUX_DEVTOOLS_COMPOSE({

// })

// const composeEnhancers = compose

// const enhancers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
//
//debug
console.log("middleware", middleware);

export default store;
