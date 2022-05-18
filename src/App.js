import React, { useEffect, useState } from "react";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";

import axios from "axios";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/db.json")
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={pizzas} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
