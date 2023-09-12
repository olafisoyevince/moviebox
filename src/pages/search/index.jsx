import { useEffect } from "react";
import MovieList from "@/components/MovieList";
import { useFetchMovies } from "../../../context/fetchMovies";

const Search = () => {
  const { movies, handleFetchMovies } = useFetchMovies();

  useEffect(() => {
    handleFetchMovies();
  }, []);

  return <MovieList movies={movies} title={"Featured Movies"} />;
};

export default Search;
