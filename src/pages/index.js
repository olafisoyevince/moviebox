import { useEffect } from "react";
import { DM_Sans } from "next/font/google";
import Hero from "@/components/Hero";
import MovieList from "@/components/MovieList";
import Footer from "@/components/Footer";
import { useFetchMovies } from "../../context/fetchMovies";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  const { movies, handleFetchMovies } = useFetchMovies();

  // console.log(movies, "movies from movielist");

  useEffect(() => {
    handleFetchMovies();
  }, []);

  return (
    <main className={` ${dm_sans.className}`}>
      <Hero />

      <MovieList movies={movies} title={"Featured Movies"} />

      <Footer />
    </main>
  );
}
