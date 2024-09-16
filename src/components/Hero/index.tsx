import React from "react";
import style from "./slide.module.css";

const index = () => {
  return (
    <div className="h-[100vh] bg-[url('/assets/hero-bg.jpg.webp')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className={`w-3/4 lg:w-1/2 ${style.slideInLeft}`}>
        <p className="text-[#85898B] font-semibold">Welcome to Glint</p>
        <p className="text-white text-5xl font-semibold leading-relaxed">
          We are a creative group of people who design influential brands and
          digital experiences.
        </p>
      </div>
    </div>
  );
};

export default index;
