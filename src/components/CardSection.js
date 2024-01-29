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
    <section className="bg-white p-[20px]  flex flex-col justify-center items-center  xl:justify-end xl:items-end  lg:min-h-screen xl:p-[10px] ">
      <div className=" flex flex-col w-full gap-14  2xl:w-[75%] lg:my-12 xl:my-20 overflow-hidden">
        <div className=" space-y-4">
          <h1 className="text-[22px]  text-red-600 font-semibold lg:text-[28px]">
            {sectionTitle}
          </h1>
          <p className="max-w-[900px] text-[16px] lg:text-[20px] leading-6 tracking-wider">
            {sectionText}
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center gap-2 lg:flex-row lg:flex-wrap 2xl:flex-nowrap overflow-hidden">
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
    </section>
  );
};
