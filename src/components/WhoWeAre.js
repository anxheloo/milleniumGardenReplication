import React from "react";

const WhoWeAre = () => {
  return (
    <div className="w-full m-auto px-16 py-24 flex flex-col gap-5 xl:w-1/2 md:flex-row md:justify-between md:gap-0 items-center ">
      <div className="flex flex-row gap-6 md:flex-col lg:gap-0 items-center">
        <h1 className="text-[55px] lg:text-[72px] font-[500] text-[#8b7c2a]">
          25
        </h1>
        <p className="text-white text-sm">Years of Experience</p>
      </div>

      <div className="flex flex-1 justify-evenly items-end ">
        <div className="hidden md:block h-[100px] border-r-[0.5px] border-solid border-gray-400 bg-white opacity-60 rotate-12"></div>

        <div className="flex flex-row gap-6 md:flex-col lg:gap-0 items-center">
          <h1 className=" text-[55px] lg:text-[72px] font-[500] text-[#8b7c2a]">
            30
          </h1>
          <p className="text-white text-sm">Successful Projects</p>
        </div>

        <div className="hidden md:block h-[100px] border-r-[0.5px] border-solid border-gray-400 bg-white opacity-60 rotate-12"></div>
      </div>

      <div className="flex flex-row gap-6 md:flex-col lg:gap-0 items-center">
        <h1 className=" text-[55px] lg:text-[72px] font-[500] text-[#8b7c2a]">
          5
        </h1>
        <p className="text-white text-sm">Coming soon projects</p>
      </div>
    </div>
  );
};

export default WhoWeAre;
