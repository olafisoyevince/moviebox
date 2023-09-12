// context/MyContext.js
import { createContext, useContext, useState } from "react";
import { fetchMovies } from "../utils/helpers";

// Create the context
const FetchMovies = createContext();

// Create a provider component
export function FetchMoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState({});

  const handleFetchMovies = async () => {
    const result = await fetchMovies();

    setSelectedMovies(result[0]);
    setMovies(result);
  };

  const handleSearchMovies = async (searchString) => {
    const result = await fetchMovies(searchString);

    setMovies(result);
  };

  const contextValue = {
    movies,
    selectedMovies,
    handleFetchMovies,
    handleSearchMovies,
  };

  return (
    <FetchMovies.Provider value={contextValue}>{children}</FetchMovies.Provider>
  );
}

// Create a custom hook to access the context
export function useFetchMovies() {
  return useContext(FetchMovies);
}
