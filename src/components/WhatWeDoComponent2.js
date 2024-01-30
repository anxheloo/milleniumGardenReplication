import React from "react";

export const WhatWeDoComponent2 = ({ icon, title, text }) => {
  return (
    <div className="w-[350px] flex flex-col gap-7 text-left ">
      <div className="">
        <img src={icon} alt="icon" className="w-[60px] text-white"></img>
      </div>

      <h1 className="text-[25px] leading-7 w-1/2 text-gold" color="##8b7c2a ">
        {title}
      </h1>

      <hr className="w-[60px] border-[1px] border-gold"></hr>
      <div className="text-white text-[18px]">{text}</div>
    </div>
  );
};
