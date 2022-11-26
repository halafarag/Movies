import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { Favourite, MoviesReducer } from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducer from "./combineReducer";
const store = createStore(Favourite);
// const store = createStore(
//   combineReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

export default store;
