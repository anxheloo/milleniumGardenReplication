import React from "react";
import Card from "./Card";

export const CardSection = ({
  nrOfCards,
  imageSrc,
  title,
  sectionTitle,
  sectionText,
}) => {
  return (
    <section className="bg-white p-[20px] flex flex-col justify-center items-center   xl:justify-end xl:items-end  lg:min-h-screen xl:p-[10px] ">
      {/* <div className="bg-black"> */}

      <div className=" flex flex-col w-full gap-14  2xl:w-fit items-end  lg:my-12 xl:my-20 overflow-hidden ">
        <div className="w-full space-y-4 ">
          <h1 className="text-[22px]  text-red-600 font-semibold lg:text-[28px]">
            {sectionTitle}
          </h1>
          <p className="max-w-[900px] text-[16px] lg:text-[20px] leading-6 tracking-wider">
            {sectionText}
          </p>
        </div>

        <div className="w-full flex flex-col  items-center gap-2 md:flex-row md:flex-wrap 2xl:flex-nowrap overflow-hidden ">
          {nrOfCards.map((card) => (
            <Card
              key={card}
              imageSrc={imageSrc[card]}
              title={title[card]}
              url={""}
            ></Card>
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
