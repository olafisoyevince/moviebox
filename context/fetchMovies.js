// context/MyContext.js
import { createContext, useContext, useState } from "react";
import { fetchMovies } from "../utils/helpers";

// Create the context
const FetchMovies = createContext();

// Create a provider component
export function FetchMoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState({});

  const handleFetchMovies = async () => {
    const result = await fetchMovies();

    setSelectedMovies(result[0]);
    setMovies(result);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearchString(event.target.value);
  };

  const handleSearchMovies = async (searchString) => {
    try {
      const result = await fetchMovies(searchString);

      setSearchedMovies(result);
    } catch (error) {
      console.log("you will soon find what you are looking for, error");
    }
  };

  const contextValue = {
    movies,
    searchedMovies,
    selectedMovies,
    searchString,
    handleFetchMovies,
    handleSearchMovies,
    handleChange,
  };

  return (
    <FetchMovies.Provider value={contextValue}>{children}</FetchMovies.Provider>
  );
}

// Create a custom hook to access the context
export function useFetchMovies() {
  return useContext(FetchMovies);
}
