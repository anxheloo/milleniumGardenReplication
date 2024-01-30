import React from "react";
import Header from "../components/Header";
import seaTable from "../assets/Group-51@2x-6-1024x576.jpg";

const WhatWeDo = () => {
  return (
    <div className="whatWeDoScreen">
      <header
        id=""
        className="flex flex-col  min-h-screen   bg-no-repeat bg-cover relative"
        style={{ backgroundImage: `url(${seaTable})` }}
      >
        <div className="absolute top-0  w-full h-full bg-black opacity-20 z-10"></div>

        <Header></Header>

        <div className="flex-1 pb-10 pl-10 lg:pb-20 xl:pb-28 xl:pl-28 bg-transparent text-white flex gap-5  items-end z-20 ">
          {/* <div className="hidden w-[20%] lg:block"></div> */}

          <h1 className="text-[35px] ml-10 max-w-[250px] leading-[35px]  lg:ml-0 lg:text-[120px] lg:max-w-[450px] lg:leading-[120px] text-left  ">
            what we do
          </h1>
        </div>
      </header>

      <section className="bg-theme">
        {/* <div className="w-full flex flex-col  gap-10 m-auto xl:w-1/2 md:flex-row items-center py-10 px-5 xl:pl-28 ">
      <div className="w-full  md:w-fit ">
        <img src={} alt="icon1" className="w-[80px]"></img>
      </div>
      <div>
        <h1 className="text-[#8b7c2a] text-[25px]">{}</h1>
        <div className="text-white text-[18px]">{}</div>
      </div>
    </div> */}
      </section>
    </div>
  );
};

export default WhatWeDo;
