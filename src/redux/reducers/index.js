import { combineReducers } from "redux";
import filters from "./filters";
import pizzas from "./pizzas";
import cart from "./cart";

//Собирали редюсеры на один целый редю.
const rootReducer = combineReducers({
  filters,
  pizzas,
  cart
});

export default rootReducer;
