const intailState = {
  Counter: 0,
  num: 0,
  favourites: [],
};
export function Favourite(state = intailState, action) {
  // console.log(action.payload);
  switch (action.type) {
    case "ADD_COUNTER":
      return { ...state, Counter: action.payload };
    case "ADD_Fav":
      return { ...state, favourites: action.payload };
    default:
      return { ...state };
  }
}
//thunk
// export function MoviesReducer(state = [], action) {
//   switch (action.type) {
//     case "SET_ARTICLES":
//       return action.payload;
//     default:
//       return state;
//   }
// }
