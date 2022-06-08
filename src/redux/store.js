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

import { createStore, compose , applyMiddleware} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk)));

export default store;
