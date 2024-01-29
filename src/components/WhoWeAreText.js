import React from "react";

const WhoWeAreText = ({ title, text }) => {
  const formattedText = text.split("\n").map((line) => (
    <>
      {line}
      <br />
      <br />
    </>
  ));

  return (
    <div className="flex flex-col gap-10 text-white w-full m-auto md:flex-row xl:w-1/2 py-[70px] px-[10px] xl:px-0">
      <div className="text-[25px] leading-8 w-full md:w-[5%] mr-4">{title}</div>
      {/* <div className="hidden md:h-[170px] lg:h-[130px] xl:h-[200px] 2xl:h-[120px] border-r-[0.5px] border-solid border-gray-400 md:block"></div> */}
      <div className="flex-1 font-bold md:border-l-[1px] border-gray-400 md:pl-4">
        {formattedText}
      </div>
    </div>
  );
};

export default WhoWeAreText;
