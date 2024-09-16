import React from "react";
import style from "./slide.module.css";

const BenSection = () => {
  return (
    <div className="h-[60vh] bg-slate-700 flex justify-center items-center">
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

export default BenSection;
