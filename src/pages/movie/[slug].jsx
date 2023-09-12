import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const MOVIE_URL = "https://api.themoviedb.org/3/";

const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

const MovieDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);

  const [movieDetails, setMovieDetails] = useState([]);

  const fetchMovies = async () => {
    try {
      const data = await axios.get(`${MOVIE_URL}/movie/${slug}`, {
        params: {
          api_key: "efa513d74d3cc1b4ea99a9f021dc5d8e",
        },
      });

      // console.log(result);

      setMovieDetails(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [slug]);

  console.log(movieDetails, "moviedrtails");

  return (
    <div className={` flex ${poppins.className} `}>
      {movieDetails === null ? (
        <p>Loading...</p>
      ) : movieDetails.data ? (
        <>
          <div className=" p-3 md:p-6 xl:p-9 w-full ">
            <div className=" h-[450px] w-full">
              <img
                src={`${IMAGE_PATH}${movieDetails.data?.backdrop_path}`}
                alt=""
                className=" w-full h-full rounded-[40px] object-cover "
              />
            </div>

            <div className=" pt-10 lg:flex gap-5">
              <div className=" w-full lg:w-[60%] flex flex-col gap-8">
                <div className=" gap-3 items-center text-[#404040]">
                  <div className=" flex flex-col gap-1">
                    <div className=" flex">
                      <label
                        htmlFor="title"
                        className="font-bold text-base lg:text-lg"
                      >
                        Title:&nbsp;
                      </label>

                      <p
                        data-testid="movie-title"
                        className=" font-bold text-base lg:text-lg"
                      >
                        {movieDetails.data?.title}
                      </p>
                    </div>
                    {/* <span>•</span> */}
                    <div className=" flex">
                      <label className="font-bold text-base lg:text-lg">
                        Release Date:&nbsp;
                      </label>
                      <p
                        data-testid="movie-release-date"
                        className=" font-bold text-base lg:text-lg"
                      >
                        {movieDetails.data?.release_date}
                      </p>
                    </div>
                    <div className=" flex">
                      <label className="font-bold text-base lg:text-lg">
                        Runtime: &nbsp;
                      </label>
                      <p
                        data-testid="movie-runtime"
                        className=" font-bold text-base lg:text-lg"
                      >
                        {movieDetails.data.runtime} min
                      </p>
                    </div>
                  </div>

                  <div className=" flex pt-4 gap-2 xl:pt-0">
                    {movieDetails.data?.genres.map((genre) => (
                      <div
                        key={genre.id}
                        className=" px-2 py-1 border border-[#F8E7EB] text-[#B91C1C] rounded-3xl"
                      >
                        {genre.name}
                      </div>
                    ))}
                  </div>
                </div>

                <p
                  data-testid="movie-overview"
                  className=" text-base lg:text-lg font-normal text-[#333333]"
                >
                  {movieDetails.data?.overview}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>No details found</p>
      )}
    </div>
  );
};

export default MovieDetails;
