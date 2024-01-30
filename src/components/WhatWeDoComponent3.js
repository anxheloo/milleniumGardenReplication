import React from "react";

export const WhatWeDoComponent3 = ({ title, subtitle, text }) => {
  return (
    <div className="w-full m-auto px-[20px] py-[40px] lg:w-1/2 flex flex-col gap-5 text-white lg:border-b-[1px] lg:border-gray-400 lg:border-opacity-30 lg:flex-row lg:justify-between lg:items-center">
      <div className="lg:w-1/2">
        <div className="text-[30px] lg:text-[40px]">{title}</div>
        <div className="text-[15px] lg:text-[25px] text-gray-500">
          {subtitle}
        </div>
      </div>
      <div className="lg:w-2/3">{text}</div>
    </div>
  );
};
