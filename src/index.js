import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import "./scss/app.scss";
import App from "./App";
import { Button } from "./components";
import { Provider } from "react-redux";

const inc = () => {
  store.dispatch({
    type: "Добавить",
  });
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <Router>
  //   <App />
  // </Router>
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
