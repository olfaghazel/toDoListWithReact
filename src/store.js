import { createStore } from "redux";
import buttonReducer from "./Reducers/reducer";

const store = createStore(
  buttonReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
