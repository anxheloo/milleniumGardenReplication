import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Form = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center space-x-8 items-end pt-20">
      <form className="w-full lg:4/5 xl:3/5 2xl:w-2/5  flex flex-col gap-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="FULL NAME"
            className="border border-gray-400 bg-transparent outline-none w-1/2 px-5 py-4  caret-white"
          ></input>
          <input
            type="email"
            placeholder="EMAIL"
            className="border border-gray-400 bg-transparent outline-none w-1/2 px-5 py-4 caret-white"
          ></input>
        </div>
        <div>
          <textarea
            placeholder="MESSAGE"
            className="border border-gray-400 bg-transparent outline-none w-full px-5 py-6 caret-white"
          ></textarea>
        </div>
      </form>

      <div className="mb-2">
        <button className="bg-[#8b7c2a] rounded-md w-fit h-fit">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-white text-[40px] -rotate-45 px-4 py-3 "
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};
