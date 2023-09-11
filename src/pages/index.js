import Image from "next/image";
import { DM_Sans } from "next/font/google";
import Hero from "@/components/Hero";
import MovieList from "@/components/MovieList";
import Footer from "@/components/Footer";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${dm_sans.className}`}>
      <Hero />

      <MovieList />

      <Footer />
    </main>
  );
}
