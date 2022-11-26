import axios from "axios";

export function ChangeCounter(data) {
  return {
    type: "ADD_COUNTER",
    payload: data,
  };
}
export function ChangeFav(data) {
  return {
    type: "ADD_Fav",
    payload: data,
  };
}
//thunk
// export function ChangeMovies() {
//   return (dispatch) => {
//     axios
//       .get(
//         "https://api.themoviedb.org/3/movie/popular?api_key=b02d9ad500f63e5b8ad2d64f29b1534a"
//       )
//       .then((res) => {
//         console.log(res);
//         dispatch({ type: "SET_ARTICLES", payload: res.data.results });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// }
