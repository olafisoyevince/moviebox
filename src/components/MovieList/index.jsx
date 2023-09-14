import React, { useState } from "react";
import MovieCard from "../MovieCard";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"] });

const MovieList = ({ movies, title }) => {
  const [likeStates, setLikeStates] = useState(
    Array(movies.length).fill(false)
  );

  const toggleLike = (index) => {
    const newLikeStates = [...likeStates];
    newLikeStates[index] = !newLikeStates[index];
    setLikeStates(newLikeStates);
  };

  return (
    <div
      className={`px-[10px] md:px-[30px] lg:px-[50px] xl:px-[100px] ${dm_sans.className}`}
    >
      <div className=" flex items-center justify-between pt-20 pb-12">
        <div className="flex">
          <h1 className=" font-bold text-4xl ">{title}</h1>

          {/* {searchString && (
            <p className={` font-bold text-4xl ${textColor}`}>
              &nbsp;{searchString}
            </p>
          )} */}
        </div>

        {/* <div className=" flex items-center gap-3">
          <p className=" text-rose-700">See More </p>
          <i>
            <img src="/arrow-right.png" alt="" />
          </i>
        </div> */}
      </div>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-16">
        {movies === null ? (
          <p>Loading...</p>
        ) : movies.length > 0 ? (
          movies.slice(0, 10).map((movie, index) => (
            <div
              className={`relative ${likeStates[index] ? "grayscale" : ""}`}
              key={movie.id}
            >
              <img
                src="/Favorite.svg"
                alt=""
                className=" absolute right-2 top-1 z-10"
                onClick={() => toggleLike(index)}
              />
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))
        ) : (
          <>
            <span className="">No movies matched your searched input</span>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieList;
