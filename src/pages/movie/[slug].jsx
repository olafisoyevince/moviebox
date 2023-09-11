import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const MOVIE_URL = "https://api.themoviedb.org/3/";

const MovieDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [movieDetails, setMovieDetails] = useState([]);

  // const fetchMovies = async () => {
  //   const data = await axios.get(`${MOVIE_URL}/movie/${slug}`, {
  //     params: {
  //       api_key: "efa513d74d3cc1b4ea99a9f021dc5d8e",
  //     },
  //   });

  //   setMovieDetails(data);
  // };

  // useEffect(() => {
  //   fetchMovies();
  // }, [slug]);

  // console.log(movieDetails);

  // {movieDetails && movieDetails.data?.title}

  return (
    <div className={` flex ${poppins.className} `}>
      <div className=" w-1/5">
        <Sidebar />
      </div>
      <div className=" p-9 w-4/5 ">
        <div className=" h-[500px] w-full">
          <img
            src="/Rectangle 29.png"
            alt=""
            className=" w-full h-full rounded-[40px] object-cover "
          />
        </div>

        <div className=" pt-10 flex">
          <div className=" w-[65%] flex flex-col gap-5">
            <div className="flex gap-3 items-center text-[#404040]">
              <p className=" font-bold text-2xl">Top Gun: Maverick</p>
              <span>•</span>
              <p className=" font-bold text-2xl"> 2022</p>
              <span>•</span>
              <p className=" font-bold text-2xl">PG-13</p>
              <span>•</span>
              <p className=" font-bold text-2xl">2h 10m</p>

              <div className=" px-2 py-1 border border-[#F8E7EB] text-[#B91C1C] rounded-3xl">
                Action
              </div>
              <div className=" px-2 py-1 border border-[#F8E7EB] text-[#B91C1C] rounded-3xl">
                Drama
              </div>
            </div>

            <p className=" text-xl font-normal text-[#333333]">
              After thirty years, Maverick is still pushing the envelope as a
              top naval aviator, but must confront ghosts of his past when he
              leads TOP GUN's elite graduates on a mission that demands the
              ultimate sacrifice from those chosen to fly it.
            </p>

            <div className="text-xl font-normal flex items-center gap-3">
              <p>Director : </p>
              <p className=" text-[#BE123C]">Joseph Kosinski</p>
            </div>
            <div className="text-xl font-normal flex items-center gap-3">
              <p>Writers : </p>
              <p className=" text-[#BE123C]">Joseph Kosinski</p>
            </div>
            <div className="text-xl font-normal flex items-center gap-3">
              <p>Stars : </p>
              <p className=" text-[#BE123C]">Joseph Kosinski</p>
            </div>
          </div>
          <div className=" w-[35%]">
            <div className=" flex justify-end">
              <img src="/Star.svg" alt="" />
              <p>8.5 | 350k</p>
            </div>

            <div className=" flex">
              <img src="/tickets.svg" alt="" />
              <p>See Showtimes</p>
            </div>
            <div className=" flex">
              <img src="/tickets.svg" alt="" />
              <p>See Showtimes</p>
            </div>

            <div>
              <img src="/" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
