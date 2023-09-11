import Image from "next/image";
import React from "react";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="h-[600px] w-full relative px-[10px] md:px-[30px] lg:px-[50px] xl:px-[100px] py-4 text-white">
      <img
        src="/herobg.png"
        alt=""
        className=" w-full h-full object-cover absolute top-0 left-0 -z-[1]"
      />

      <div className=" z-10 flex justify-between items-center">
        <div className=" flex items-center gap-6">
          <img src="/logo.png" alt="" />
          <h3 className=" font-bold text-2xl hidden md:block">MovieBox</h3>
        </div>

        <div className="relative hidden md:block">
          <input
            type="text"
            className=" bg-transparent border border-gray-300 md:w-[270px] lg:w-[400px] xl:w-[500px] outline-none pt-1 pb-1 pl-2 rounded-md placeholder:text-white"
            placeholder="What do you want to watch?"
          />

          <img
            src="/search.png"
            alt=""
            className=" absolute right-2 top-[10px] "
          />
        </div>

        <div className=" flex items-center gap-6">
          <h3 className="hidden lg:block">Signin</h3>
          <img src="/menu.png" alt="" />
        </div>
      </div>

      <div className=" flex flex-col justify-center gap-4 h-full text-white">
        <h1 className=" font-bold text-5xl leading-[60px] md:w-3/5 xl:w-2/5">
          John Wick 3 : Parabellum
        </h1>

        <div className=" flex items-center gap-7">
          <div className=" flex items-center gap-4">
            <img src="/imdb_logo.png" alt="" />
            <p>86.0 / 100</p>
          </div>
          <div className=" flex items-center gap-4">
            <img src="/rotten.png" alt="" />
            <p>86%</p>
          </div>
        </div>

        <p className=" md:w-2/4 lg:w-2/6 xl:w-1/4">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>

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
