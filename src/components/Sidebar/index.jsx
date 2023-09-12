import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"] });

const Sidebar = () => {
  return (
    <div
      className={` border h-[auto] rounded-tr-[45px] rounded-br-[45px]  ${dm_sans.className}`}
    >
      <div className=" flex items-center gap-6  justify-center py-8">
        <img src="/logo.png" alt="" />
        <h3 className=" font-bold text-base md:text-xl xl:text-2xl hidden md:block">
          MovieBox
        </h3>
      </div>

      <div className=" flex flex-col gap-5">
        <div className=" flex items-center md:gap-1 lg:gap-2 xl:gap-3 h-20 pl-9">
          <div className=" min-w-[20%]">
            <img src="/home.svg" alt="" className=" mx-auto" />
          </div>
          <h3 className=" font-semibold text-lg hidden md:block">Home</h3>
        </div>

        <div className=" flex items-center md:gap-1 lg:gap-2 xl:gap-3 h-20 pl-9 bg-[#BE123C1A] border-r-4 text-[#BE123C] border-r-[#BE123C]">
          <div className=" min-w-[20%]">
            <img src="/projector.svg" alt="" className=" mx-auto" />
          </div>
          <h3 className=" text-left font-semibold text-lg hidden md:block">
            Movies
          </h3>
        </div>

        <div className=" flex items-center md:gap-1 lg:gap-2 xl:gap-3 h-20 pl-9">
          <div className=" min-w-[20%]">
            <img src="/tv.svg" alt="" className=" mx-auto" />
          </div>
          <h3 className=" font-semibold text-lg hidden md:block">TV Series</h3>
        </div>

        <div className=" flex items-center md:gap-1 lg:gap-2 xl:gap-3 h-20 pl-9">
          <div className=" min-w-[20%]">
            <img src="/calender.svg" alt="" className=" mx-auto" />
          </div>
          <h3 className=" font-semibold text-lg hidden md:block">Upcoming</h3>
        </div>

        <div className=" md:mx-2 lg:mx-5 xl:mx-8 pt-8 px-4 pb-5 border rounded-3xl border-[#BE123CB2] bg-[#F8E7EB66]">
          <p className=" text-[#333333CC] font-semibold text-[15px]">
            Play movie quizes and earn free tickets
          </p>

          <p className=" text-[#666666] font-medium text-xs py-3">
            50k people are playing now
          </p>

          <button className=" text-[#BE123C] bg-[#BE123C33] px-3 py-1 rounded-3xl mx-auto ">
            Start playing
          </button>
        </div>

        <div className=" flex items-center md:gap-1 lg:gap-2 xl:gap-3 h-20 pl-9">
          <div className=" min-w-[20%]">
            <img src="/logout.png" alt="" className=" mx-auto" />
          </div>
          <h3 className=" font-semibold text-lg hidden md:block">Logout</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
