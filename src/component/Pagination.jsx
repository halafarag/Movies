import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function Pagination(props) {
  //   const history = useHistory();
  const params = useParams();
  console.log(props);
  const [fiveMovies, setFiveMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=b02d9ad500f63e5b8ad2d64f29b1534a&page=4?limit=5"
      )
      .then((res) => {
        console.log(res.data.results);
        setFiveMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        {" "}
        {fiveMovies.map((movie) => {
          return <h1> {movie.title}</h1>;
        })}
      </div>
    </>
  );
}
