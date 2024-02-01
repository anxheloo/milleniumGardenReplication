import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imageSrc, title, url }) => {
  return (
    <div className="group flex flex-col gap-5 overflow-hidden mb-5 ">
      <div className="w-full   md:w-[350px] lg:w-[400px] xl:h-[320px] 2xl:h-[500px] overflow-hidden">
        <Link to={url}>
          <img
            src={imageSrc}
            alt="seaTable"
            className="w-full h-full  object-cover group-hover:scale-110 transition ease-in delay-100 cursor-pointer"
          ></img>
        </Link>
      </div>

      <div className="mb-5">
        <Link to={url} className=" text-[22px] font-[400]">
          {title}
        </Link>
      </div>
    </div>
  );
};

export default Card;
