import React from "react";
import seaTable from "../assets/Group-51@2x-6-1024x576.jpg";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";

import building1 from "../assets/bulding1.jpg";
import building2 from "../assets/bulding2.jpg";
import building3 from "../assets/bulding3.jpg";
import building4 from "../assets/bulding4.jpg";
import building5 from "../assets/bulding5.jpg";
import building6 from "../assets/building6.jpg";
import building7 from "../assets/building7.jpg";
import building8 from "../assets/building8.jpg";
import building9 from "../assets/building9.jpg";
import building10 from "../assets/building10.jpg";
import building11 from "../assets/building11.jpg";
import building12 from "../assets/building12.jpg";
import building13 from "../assets/building13.jpg";
import building14 from "../assets/building14.jpg";
import building15 from "../assets/building15.jpg";
import building16 from "../assets/building16.jpg";
import building17 from "../assets/building17.jpg";
import building18 from "../assets/building18.jpg";
import ScrollToTop from "../components/ScrollToTop";

const RealEstate = () => {
  return (
    <div id="real-estate ">
      <ScrollToTop></ScrollToTop>
      <section
        className="flex flex-col h-[60vh] bg-white  bg-no-repeat bg-cover relative "
        style={{
          backgroundImage: `url(${seaTable})`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute  inset-0  bg-black opacity-20  pointer-events-none "></div>

        <Header></Header>
      </section>

      <section className="bg-theme py-10 sm:py-14 md:py-16 lg:py-20 xl:py-28 px-[10px] ">
        <div className=" pl-[20px] lg:pr-[20px] lg:py-[10px]  border-l-[2px] border-gold text-white text-[18px] w-full  lg:w-3/5  m-auto mb-14 lg:mb-28 ">
          These projects showcase the diverse portfolio of Millennium Group,
          reflecting their commitment to innovation, sustainability, and
          creating spaces that enhance the quality of life for residents and the
          surrounding community. They also showcase our commitment to enhancing
          the city’s landscape, combining modern aesthetics with cultural
          sensitivity and sustainable practices to create vibrant and harmonious
          living spaces.
        </div>

        <div className="flex  md:justify-start items-center gap-5 lg:w-3/4 xl:w-3/5 m-auto px-[10px] mb-7 ">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-gold text-[40px]"
          />
          <div className="text-white">
            <h1 className="text-[20px] lg:text-[30px]">
              Millennium Business Center, Rr. Kavajes
            </h1>
            <div className="text-gray-400 text-[16px]">Tirane, Albania</div>
          </div>
        </div>

        <div className="lg:px-[10px] w-full  flex justify-center flex-wrap lg:w-3/4 xl:w-3/5  gap-1 m-auto ">
          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={building1}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={building2}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={building3}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={building4}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={building5}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={building6}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex  md:justify-start items-center gap-5 lg:w-3/4 xl:w-3/5 m-auto px-[10px] mb-7 ">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-gold text-[40px]"
            />
            <div className="text-white">
              <h1 className="text-[20px] lg:text-[30px]">
                Residential Building, Liqeni Artificial
              </h1>
              <div className="text-gray-400 text-[16px]">Tirane, Albania</div>
            </div>
          </div>

          <div className="lg:px-[10px] w-full  flex justify-center flex-wrap lg:w-3/4 xl:w-3/5  gap-1 m-auto ">
            <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
              <img
                src={building7}
                className="w-full h-full object-cover"
                alt="img"
              ></img>
            </div>

            <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
              <img
                src={building8}
                className="w-full h-full object-cover"
                alt="img"
              ></img>
            </div>

            <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
              <img
                src={building9}
                className="w-full h-full object-cover"
                alt="img"
              ></img>
            </div>

            <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
              <img
                src={building10}
                className="w-full h-full object-cover"
                alt="img"
              ></img>
            </div>

            <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
              <img
                src={building11}
                className="w-full h-full object-cover"
                alt="img"
              ></img>
            </div>

            <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
              <img
                src={building12}
                className="w-full h-full object-cover"
                alt="img"
              ></img>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex  md:justify-start items-center gap-5 lg:w-3/4 xl:w-3/5 m-auto px-[10px] mb-7 ">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-gold text-[40px]"
            />
            <div className="text-white">
              <h1 className="text-[20px] lg:text-[30px]">
                Residential Building, Liqeni i Thate
              </h1>
              <div className="text-gray-400 text-[16px]">Tirane, Albania</div>
            </div>
          </div>

          <div className="lg:px-[10px] w-full  flex justify-center flex-wrap lg:w-3/4 xl:w-3/5  gap-1 m-auto ">
            <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
              <img
                src={building13}
                className="w-full h-full object-cover"
                alt="img"
              ></img>
            </div>

            <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
              <img
                src={building14}
                className="w-full h-full object-cover"
                alt="img"
              ></img>
            </div>

            <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
              <img
                src={building15}
                className="w-full h-full object-cover"
                alt="img"
              ></img>
            </div>

            <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
              <img
                src={building16}
                className="w-full h-full object-cover"
                alt="img"
              ></img>
            </div>

            <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
              <img
                src={building17}
                className="w-full h-full object-cover"
                alt="img"
              ></img>
            </div>

            <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
              <img
                src={building18}
                className="w-full h-full object-cover"
                alt="img"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <div className="px-10 md:px-36">
        <Subscribe></Subscribe>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default RealEstate;
