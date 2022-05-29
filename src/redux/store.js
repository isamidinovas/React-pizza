// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./reducers";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import logger from "redux-logger";
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger))
// );

// window.store = store;
// export default store;

import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;
export default store;
