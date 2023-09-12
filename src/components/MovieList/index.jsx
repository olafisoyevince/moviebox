import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import Link from "next/link";
import { useFetchMovies } from "../../../context/fetchMovies";
// import { fetchMovies } from "../../../utils/helpers";

const MovieList = ({ movies, title }) => {
  return (
    <div className="px-[10px] md:px-[30px] lg:px-[50px] xl:px-[100px]">
      <div className=" flex items-center justify-between pt-20 pb-12">
        <h1 className=" font-bold text-4xl">{title}</h1>

        <div className=" flex items-center gap-3">
          <p className=" text-rose-700">See More </p>
          <i>
            <img src="/arrow-right.png" alt="" />
          </i>
        </div>
      </div>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-16">
        {movies === null ? (
          <p>Loading...</p>
        ) : movies.length > 0 ? (
          movies.slice(0, 10).map((movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} />
            </Link>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
