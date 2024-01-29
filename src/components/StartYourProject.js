import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const StartYourProject = () => {
  return (
    <div className="bg-[#151515] border-y-[0.1px] border-gray-50 flex justify-between items-center px-[50px] py-14  lg:px-[80px] lg:py-9">
      <h1 className="text-[20px]  lg:text-[30px] font-[500] text-white cursor-pointer">
        Start your project
      </h1>

      <a href="#">
        <button>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="w-[30px] h-[30px] text-white -rotate-45 cursor-pointer"
          ></FontAwesomeIcon>
        </button>
      </a>
    </div>
  );
};

export default StartYourProject;
