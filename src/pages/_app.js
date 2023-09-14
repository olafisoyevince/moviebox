import "@/styles/globals.css";
import { FetchMoviesProvider } from "../context/fetchMovies";

export default function App({ Component, pageProps }) {
  return (
    <FetchMoviesProvider>
      <Component {...pageProps} />
    </FetchMoviesProvider>
  );
}
