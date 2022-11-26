// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ChangeMovies } from "../Store/Action";

// export  function ThunkMovies() {
//   //   const [movies, setMovies] = useState([]);
//   const movies = useSelector((state) => {
//     state.movies;
//   });
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(ChangeMovies());
//   }, []);
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row ">
//           {movies.map((movie, index) => {
//             return (
//               <>
//                 <div
//                   className="card border border-0 "
//                   style={{ width: "18rem", height: "35rem" }}
//                   key={movie.id}
//                 >
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//                     className="card-img-top"
//                     alt="..."
//                   ></img>
//                   <div className="card-body">
//                     <h5 className="card-title text-center mb-3">
//                       {movie.title}
//                     </h5>
//                   </div>
//                 </div>
//               </>
//             );
//           })}{" "}
//         </div>
//       </div>
//     </>
//   );
// }
