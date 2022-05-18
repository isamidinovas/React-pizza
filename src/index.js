import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/app.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <Router>
  //   <App />
  // </Router>

  <BrowserRouter>
    <App />
  </BrowserRouter>
);
