const MovieCard = ({ movie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

  // const date = new toUTCString(movie.release_date);

  const existingDate = movie.release_date; // Replace with your existing date string
  const dateObject = new Date(existingDate);
  const date = dateObject.toUTCString();

  return (
    <div data-testid="movie-card" className={`flex flex-col gap-3 relative`}>
      <img
        data-testid="movie-poster"
        src={`${IMAGE_PATH}/${movie.poster_path}`}
        alt=""
      />
      <p data-testid="movie-title" className=" text-lg font-bold">
        {movie.title}
      </p>
      <p
        data-testid="movie-release-date"
        className=" font-bold text-xs text-gray-400"
      >
        {date}
      </p>
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
