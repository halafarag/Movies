import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ChangeIcon from "../Store/Reducer";

export default function Favouraties() {
  const movies = useSelector((state) => state.favourites);
  console.log(movies);

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          {movies.map((movie, index) => {
            return (
              <>
                <div
                  className="card border border-0 "
                  style={{ width: "18rem", height: "35rem" }}
                  key={movie.id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title text-center mb-3">
                      {movie.title}
                    </h5>
                  </div>
                </div>
              </>
            );
          })}{" "}
        </div>
      </div>
    </>
  );
}
