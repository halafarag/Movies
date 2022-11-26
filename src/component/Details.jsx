import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import instance from "./AxiosConfig/AxiosInstance";

export default function Details(props) {
  const params = useParams();
  console.log(props);

  //
  const [movies, setMovies] = useState({});
  //
  // const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=b02d9ad500f63e5b8ad2d64f29b1534a`
      )
      .then((res) => {
        console.log(res.data);
        console.log(res);
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //
  // function arr() {
  //   return movies.map((val) => {
  //     return val.id;
  //   });
  // }
  // // console.log(arr());
  console.log(movies);
  return (
    <>
      <div className="card m-auto" style={{ width: "30rem" }} key={movies.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h4 className="card-title text-center text-primary">
            {movies.title}
          </h4>
          <p className="card-text">{movies.overview}</p>
          <p className="card-text text-danger text-center">
            {" "}
            vote_average is :{movies.vote_average}
          </p>
          <p className="card-text text-success text-center">
            vote_count is :{movies.vote_count}
          </p>
        </div>
      </div>

      {/*  */}
    </>
  );
}
