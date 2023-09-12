import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (searchString) => {
  try {
    const type = searchString ? "search/movie" : "movie/top_rated";
    const response = await axios.get(`${API_URL}/${type}`, {
      params: {
        api_key: "efa513d74d3cc1b4ea99a9f021dc5d8e",
        query: searchString,
      },
    });
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error("Error fetching movies: " + error.message);
  }
};
