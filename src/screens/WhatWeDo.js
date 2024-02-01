import React from "react";
import Header from "../components/Header";
import seaTable from "../assets/Group-51@2x-6-1024x576.jpg";
import icon1 from "../assets/architecture-2.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import { WhatWeDoComponent2 } from "../components/WhatWeDoComponent2";
import Footer from "../components/Footer";
import { Carousel } from "../components/Carousel";
import { WhatWeDoComponent3 } from "../components/WhatWeDoComponent3";
import ScrollToTop from "../components/ScrollToTop";

const WhatWeDo = () => {
  return (
    <div className="whatWeDoScreen">
      <ScrollToTop></ScrollToTop>
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

      <section className="bg-theme ">
        <div className="flex flex-col gap-10 md:flex-row md:justify-center md:gap-5 ">
          <div className="p-3 md:p-20 lg:py-36">
            <WhatWeDoComponent2
              icon={icon1}
              title={"COMMERCIAL CONSTRUCTION"}
              text={
                "Our experienced architects work closely with clients to create innovative and functional designs that align with their vision and goals."
              }
            ></WhatWeDoComponent2>
          </div>
          <div className="p-3 md:p-20 border-r-[1px] border-l-[1px] border-gray-400 border-opacity-50 lg:py-36">
            <WhatWeDoComponent2
              icon={icon1}
              title={"COMMERCIAL CONSTRUCTION"}
              text={
                "Our experienced architects work closely with clients to create innovative and functional designs that align with their vision and goals."
              }
            ></WhatWeDoComponent2>
          </div>
          <div className="p-3 md:p-20 lg:py-36">
            <WhatWeDoComponent2
              icon={icon1}
              title={"COMMERCIAL CONSTRUCTION"}
              text={
                "Our experienced architects work closely with clients to create innovative and functional designs that align with their vision and goals."
              }
            ></WhatWeDoComponent2>
          </div>
        </div>
      </section>

      <section className=" relative bg-theme min-h-screen">
        <div className="bg-[#c9492d] w-full h-[200px] md:w-3/4 md:h-[500px] flex items-center ">
          <div className="text-[40px] leading-10 w-1/3 sm:text-[50px] sm:w-1/3  md:text-[60px] md:w-[300px]  lg:text-[80px] text-white m-auto lg:w-2/5 xl:w-2/5 2xl:w-1/4 lg:leading-[80px]">
            See how we work
          </div>
        </div>

        <div className="hidden xl:block w-[700px] h-[500px] absolute right-0 top-24 z-1000 ">
          <div className=" absolute inset-0 bg-red-600  opacity-40 z-1002"></div>
          <img
            className="w-full h-full object-cover z-1001"
            src={seaTable}
            alt="absolute img"
          ></img>
        </div>

        <div className="mt-[30px] xl:py-[200px]">
          <WhatWeDoComponent3
            title={"Commercial"}
            subtitle={"Construction"}
            text={
              "Specializing in commercial construction, we create modern, functional spaces tailored to the unique requirements of businesses across industries"
            }
          ></WhatWeDoComponent3>

          <WhatWeDoComponent3
            title={"Residential"}
            subtitle={"Construction"}
            text={
              "From custom homes to renovations, we turn your residential vision into reality with quality craftsmanship and attention to detail."
            }
          ></WhatWeDoComponent3>

          <WhatWeDoComponent3
            title={"Project"}
            subtitle={"Management"}
            text={
              "Our skilled project management team ensures timelines are met, budgets are adhered to, and quality standards are exceeded."
            }
          ></WhatWeDoComponent3>
        </div>
      </section>

      <Carousel text={"Let's work together"}></Carousel>
      <Footer></Footer>
    </div>
  );
};

export default WhatWeDo;
