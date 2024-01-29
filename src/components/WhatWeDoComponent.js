import React from "react";
// import icon from "../assets/"

export const WhatWeDoComponent = ({ icon, text, title }) => {
  return (
    <div className="w-full flex flex-col  gap-10 m-auto xl:w-1/2 md:flex-row items-center py-10 px-5 xl:pl-28 ">
      <div className="w-full  md:w-fit ">
        <img src={icon} alt="icon1" className="w-[80px]"></img>
      </div>
      <div>
        <h1 className="text-[#8b7c2a] text-[25px]">{title}</h1>
        <div className="text-white text-[18px]">{text}</div>
      </div>
    </div>
  );
};
