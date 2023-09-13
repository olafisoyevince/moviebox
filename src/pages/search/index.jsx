import MovieList from "@/components/MovieList";
import { useFetchMovies } from "../../../context/fetchMovies";
import { DM_Sans } from "next/font/google";
import { BiSearch } from "react-icons/bi";

const dm_sans = DM_Sans({ subsets: ["latin"] });

const Search = () => {
  const { searchedMovies, handleSearchMovies, handleChange, searchString } =
    useFetchMovies();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearchMovies(searchString);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Prevent the default behavior of the Enter key (form submission)
      event.preventDefault();

      // Trigger the button click event
      document.getElementById("myButton").click();
    }
  };

  return (
    <>
      <div
        className={`z-10 flex justify-between items-center px-[10px] md:px-[30px] lg:px-[50px] xl:px-[100px] ${dm_sans.className}`}
      >
        <div className=" flex items-center gap-6">
          <img src="/logo.png" alt="" />
          <h3 className=" font-bold text-2xl hidden md:block">MovieBox</h3>
        </div>

        <form onSubmit={handleSubmit} className="relative hidden md:block mt-6">
          <input
            type="text"
            className=" bg-transparent border border-black  md:block md:w-[270px] lg:w-[400px] xl:w-[500px] outline-none pt-1 pb-1 pl-2 rounded-md placeholder:black"
            placeholder="What do you want to watch?"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />

          <button id="myButton" type="submit">
            <BiSearch className=" absolute right-2 top-[10px] " />
          </button>
        </form>

        <form onSubmit={handleSubmit} className="relative md:hidden">
          <input
            type="text"
            className=" bg-transparent border border-black w-40  outline-none pt-1 pb-1 pl-2 rounded-md placeholder:text-black"
            placeholder="Search"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />

          <button id="myButton" type="submit">
            <BiSearch className=" absolute right-2 top-[10px] " />
          </button>
        </form>

        <div className=" flex items-center gap-6">
          <h3 className="hidden lg:block">Signin</h3>
          <img src="/menu.png" alt="" />
        </div>
      </div>
      <MovieList
        movies={searchedMovies}
        title={"Search Results for "}
        textColor={"text-rose-700"}
      />
    </>
  );
};

export default Search;
