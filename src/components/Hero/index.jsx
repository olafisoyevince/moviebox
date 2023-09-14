import Image from "next/image";
import React, { useState } from "react";
import { DM_Sans } from "next/font/google";
import { useFetchMovies } from "../../context/fetchMovies";
import { useRouter } from "next/router";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

const dm_sans = DM_Sans({ subsets: ["latin"] });

const IMAGE_PATH = "https://image.tmdb.org/t/p/original/";

const Hero = () => {
  const router = useRouter();

  const { handleSearchMovies, selectedMovies, handleChange, searchString } =
    useFetchMovies();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearchMovies(searchString);

    router.push("/search");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Prevent the default behavior of the Enter key (form submission)
      event.preventDefault();

      // Trigger the button click event
      document.getElementById("myButton").click();
    }
  };

  return (
    <div
      className="h-[600px] bg-cover bg-no-repeat w-full px-[10px] md:px-[30px] lg:px-[50px] xl:px-[100px] py-4 md:py-2 text-white"
      style={{
        backgroundImage: `url('${IMAGE_PATH}${selectedMovies.backdrop_path}')`,
      }}
    >
      <div className=" z-10 flex justify-between items-center">
        <Link href="/" className=" flex items-center gap-6">
          <img src="/logo.png" alt="" />
          <h3 className=" font-bold text-2xl hidden md:block">MovieBox</h3>
        </Link>

        <form onSubmit={handleSubmit} className="relative hidden md:block mt-6">
          <input
            type="text"
            className=" bg-transparent border border-gray-300  md:block md:w-[270px] lg:w-[400px] xl:w-[500px] outline-none pt-1 pb-1 pl-2 rounded-md placeholder:text-white"
            placeholder="What do you want to watch?"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />

          <button id="myButton" type="submit">
            <BiSearch className=" absolute right-2 top-[10px] text-white" />
          </button>
        </form>

        <form onSubmit={handleSubmit} className="relative md:hidden">
          <input
            type="text"
            className=" bg-transparent border border-gray-300 w-40  outline-none pt-1 pb-1 pl-2 rounded-md placeholder:text-white"
            placeholder="Search"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />

          <button id="myButton" type="submit">
            <BiSearch className=" absolute right-2 top-[10px] text-white" />
          </button>
        </form>

        <div className=" flex items-center gap-6">
          <h3 className="hidden lg:block">Signin</h3>
          <img src="/menu.png" alt="" />
        </div>
      </div>

      <div className=" flex flex-col justify-center gap-4 h-full text-white">
        <h1 className=" font-bold text-5xl leading-[60px] md:w-3/5 xl:w-2/5">
          {selectedMovies.title}
        </h1>

        <div className=" flex items-center gap-7">
          <div className=" flex items-center gap-4">
            <img src="/imdb_logo.png" alt="" />
            <p>86.0 / 100</p>
          </div>
          <div className=" flex items-center gap-4">
            <img src="/rotten.png" alt="" />
            <p>{selectedMovies.vote_average}/10</p>
          </div>
        </div>

        <p className=" md:w-2/4 lg:w-2/6 xl:w-1/4">{selectedMovies.overview}</p>

        <button
          className={` bg-rose-700 w-[168px] py-2 rounded-md flex gap-3 border-none items-center justify-center ${dm_sans.className} `}
        >
          <img src="/play.png" alt="" />
          <p className=" uppercase">watch trailer</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
