import React from "react";
import seaTable from "../assets/Group-51@2x-6-1024x576.jpg";
import Header from "../components/Header";

const RealEstate = () => {
  return (
    <div id="real-estate ">
      <div
        className="flex flex-col h-[60vh] bg-white  bg-no-repeat bg-cover relative "
        style={{
          backgroundImage: `url(${seaTable})`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0  w-full h-full bg-black opacity-20  pointer-events-none "></div>

        <Header></Header>
      </div>
    </div>
  );
};

export default RealEstate;
