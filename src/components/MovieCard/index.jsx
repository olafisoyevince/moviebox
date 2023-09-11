import React, { useEffect } from "react";
import axios from "axios";

const MovieCard = ({ movie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  // const GENRE_PATH = "https://api.themoviedb.org/3/genre";

  // const fetchGenres = async () => {
  //   const {
  //     data: { results },
  //   } = await axios.get(`${GENRE_PATH}/1`, {
  //     params: {
  //       api_key: "efa513d74d3cc1b4ea99a9f021dc5d8e",
  //     },
  //   });

  //   // setMovies(results);
  //   console.log(results);
  // };

  // useEffect(() => {
  //   fetchGenres();
  // }, []);

  return (
    <div className=" flex flex-col gap-3">
      <img src={`${IMAGE_PATH}/${movie.poster_path}`} alt="" />
      <p className=" font-bold text-xs text-gray-400">USA, 2016 - Current</p>
      <p className=" text-lg font-bold">{movie.title}</p>
      <div className=" flex items-center gap-7">
        <div className=" flex items-center gap-1 md:gap-2">
          <img src="/imdb_logo.png" alt="" />
          <p className=" text-xs">86.0 / 100</p>
        </div>
        <div className=" flex items-center gap-1 md:gap-2">
          <img src="/rotten.png" alt="" />
          <p className=" text-xs">86%</p>
        </div>
      </div>
      <p className=" font-bold text-xs text-gray-400">
        Action, Adventure, Horror
      </p>
    </div>
  );
};

export default MovieCard;
