import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const StartYourProject = ({ bgColor, textColor }) => {
  console.log("this is bg Color:", bgColor);

  console.log("this is type ofbg Color:", typeof bgColor);

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className=" border-y-[0.1px] border-gray-400 flex justify-between items-center px-[50px] py-16  xl:px-36 lg:py-12"
    >
      <h1
        className="text-[20px]  lg:text-[30px] font-[500]  cursor-pointer"
        style={{ color: textColor }}
      >
        Start your project
      </h1>

      <a href="#">
        <button>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="w-[30px] h-[30px] -rotate-45 cursor-pointer"
            style={{ color: textColor }}
          ></FontAwesomeIcon>
        </button>
      </a>
    </div>
  );
};

export default StartYourProject;
