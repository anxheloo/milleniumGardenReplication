import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Subscribe = () => {
  return (
    <section
      id="subscribe"
      className="h-[350px] lg:h-[400px] flex flex-col justify-around md:items-center  xl:flex-row xl:justify-between  "
    >
      <div className="space-y-3   ">
        <h1 className="text-red-600 text-[16px] font-[500] md:text-[20px]">
          SUBSCRIBE TO OUR NEWSLETTER
        </h1>
        <div className="-space-y-1 flex flex-col text-[14px] md:text-[18px]">
          <p>Get the latest updates straight to your inbox!</p>
          <p>Subscribe to our newsletter for news, offers, and more.</p>
        </div>
      </div>

      <div className="flex ">
        <input
          type="text"
          placeholder="ENTER YOUR EMAIL"
          className=" outline-none border border-gray-200 flex-1 text-[14px] w-[200px] md:[18px] md:w-[400px] max-w-[400px] px-8"
        ></input>
        <button className="flex gap-2 border border-gray-200 py-4 px-5 md:px-10 text-red-600 lg:text-[20px] ">
          <div className="hidden lg:block">SUBSCRIBE</div>
          <div>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
