import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../MovieCard";
import Link from "next/link";

const MovieList = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/popular`, {
      params: {
        api_key: "efa513d74d3cc1b4ea99a9f021dc5d8e",
      },
    });

    setMovies(results);
    console.log(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="px-[10px] md:px-[30px] lg:px-[50px] xl:px-[100px]">
      <div className=" flex items-center justify-between pt-20 pb-12">
        <h1 className=" font-bold text-4xl">Featured Movies</h1>

        <div className=" flex items-center gap-3">
          <p className=" text-rose-700">See More </p>
          <i>
            <img src="/arrow-right.png" alt="" />
          </i>
        </div>
      </div>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-16">
        {movies.slice(0, 10).map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
