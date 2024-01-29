import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const FullCoverItem = ({ componentImg, text }) => {
  return (
    <div
      style={{ backgroundImage: `url(${componentImg})` }}
      className="group flex justify-center items-center h-[250px] lg:h-[300px] xl:h-[400px]   bg-no-repeat bg-cover hover:opacity-80 transition-opacity ease-in-out"
    >
      <div className="hidden w-1/2 group-hover:flex justify-between items-center px-7">
        <h2 className="text-white text-[40px]">{text}</h2>
        <a href="#">
          <button>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="w-[30px] h-[30px] text-white -rotate-45 cursor-pointer"
            ></FontAwesomeIcon>
          </button>
        </a>
      </div>
    </div>
  );
};
