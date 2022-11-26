import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import instance from "./AxiosConfig/AxiosInstance";
import { useDispatch } from "react-redux";
import { ChangeCounter, ChangeFav } from "../Store/Action";

export default function Movies(props) {
  const dispatch = useDispatch();

  // console.log(props);
  //
  const changeFav = (id) => {
    let counter = 0;
    let favourites = [];
    let newArr = [...movies];
    for (const movie of newArr) {
      if (movie.id === id) {
        movie.fav = !movie.fav;
      }
      if (movie.fav === true) {
        counter++;
        favourites.push(movie);
      }
    }
    // console.log(id);
    console.log(counter);
    setMovies(newArr);
    dispatch(ChangeCounter(counter));
    dispatch(ChangeFav(favourites));
    console.log(favourites);
  };
  //

  const params = useParams();
  //
  const [movies, setMovies] = useState([]);
  //
  const [pages, setPages] = useState(1);
  //
  function goPrevious() {
    setPages((prevState) => {
      if (prevState === 0) {
        return 20;
      } else {
        return prevState - 1;
      }
    });
  }
  //
  function goNext() {
    setPages((prevState) => {
      if (prevState === 20) {
        return 0;
      } else {
        return prevState + 1;
      }
    });
  }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=b02d9ad500f63e5b8ad2d64f29b1534a&page=${pages}`
      )
      .then((res) => {
        // console.log(res);
        // console.log(res.data.results);
        //push in array
        const newMovies = res.data.results.map((movie) => {
          return {
            ...movie,
            fav: false,
          };
        });
        setMovies(newMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pages]);
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
                  <a
                    onClick={() => {
                      changeFav(movie.id);
                    }}
                  >
                    {movie.fav ? (
                      <i class="bi bi-star-fill"></i>
                    ) : (
                      <i className="bi bi-star"></i>
                    )}
                  </a>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title text-center mb-3">
                      {movie.title}
                    </h5>
                    <Link
                      to={`/Details/${movie.id}`}
                      className="btn btn-dark w-100 "
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </>
            );
          })}{" "}
        </div>
      </div>
      <div className="m-auto text-center px-5">
        <button
          className="btn btn-success m-5 w-25"
          onClick={() => {
            goPrevious();
          }}
        >
          Previous
        </button>
        <button
          className="btn btn-success m-5 w-25"
          onClick={() => {
            goNext();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
