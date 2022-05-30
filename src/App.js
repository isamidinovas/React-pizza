import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { connect } from "react-redux";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { setPizzas } from "./redux/actions/pizzas";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get("http://localhost:3000/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

//С помощью классового коспонента

// class App extends React.Component {
//   componentDidMount() {
//     axios.get("http://localhost:3001/db.json").then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }
//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home items={this.props.items} />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   };
// };
//export default connect(mapStateToProps, mapDispatchToProps)(App);
