import React from "react";

const Footer = () => {
  return (
    <div className=" text-center flex flex-col gap-8 pt-32 pb-16">
      <div className="flex gap-8 md:gap-14 justify-center">
        <img src="/facebook.svg" alt="" />
        <img src="/instagram.svg" alt="" />
        <img src="/twitter.svg" alt="" />
        <img src="/youtube.svg" alt="" />
      </div>

      <div className=" flex justify-center flex-col sm:flex-row gap-8 md:gap-14 font-bold text-sm md:text-lg">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>

      <p className=" font-bold text-sm md:text-lg text-gray-500">
        © 2021 MovieBox by Adriana Eka Prayudha{" "}
      </p>
    </div>
  );
};

export default Footer;
