import React from "react";

const Card = ({ imageSrc, title, url }) => {
  return (
    <div className="group flex flex-col gap-5 overflow-hidden mb-5">
      <div className="w-full max-h-[400px]  xl:w-[470px] xl:h-[320px] 2xl:h-[500px] overflow-hidden">
        <a href="#">
          <img
            src={imageSrc}
            alt="seaTable"
            className="w-full h-full  object-cover group-hover:scale-110 transition ease-in delay-100"
          ></img>
        </a>
      </div>

      <div className="mb-5">
        <a href="#" className=" text-[22px] font-[400]">
          {title}
        </a>
      </div>
    </div>
  );
};

export default Card;
