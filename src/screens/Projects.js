import React from "react";
import seaTable from "../assets/Group-51@2x-6-1024x576.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import fm1 from "../assets/fm1.jpg";
import fm2 from "../assets/fm2.jpg";
import fm3 from "../assets/fm3.jpg";
import fm4 from "../assets/fm4.jpg";
import fm5 from "../assets/fm5.jpg";
import fm6 from "../assets/fm6.jpg";
import folieMarineLoge from "../assets/Folie Marine Logo.png";
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  return (
    <div id="projects">
      <header
        id=""
        className="flex flex-col  min-h-screen   bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(${seaTable})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute top-0  w-full h-full bg-black opacity-20 z-10"></div>

        <Header></Header>
      </header>

      <div className="w-full p-[20px] lg:w-1/2 m-auto space-y-10 mt-28 mb-10">
        <div className="flex justify-between items-center">
          <img src={folieMarineLoge} width={"200px"}></img>
          <div>
            <div className="text-gray-400 text-[14px]">MORE INFO ↗</div>
            <div className="text-[15px]">
              <a href="#">foliemarine.com</a>
            </div>
          </div>
        </div>
        <div className="text-[17px]">
          Folie Marine Beach Hotel & Club lies in the center of nature with
          breathtaking views and crystal lear blue water! It is the vacation
          destination of your dreams: it is an oasis of fun, relaxation
          adventures and alternatives for everyone!
        </div>
      </div>

      <section className=" py-10 sm:py-14 md:py-16 lg:py-20 xl:py-28 px-[10px] ">
        <div className="lg:px-[10px] w-full  flex justify-center flex-wrap lg:w-3/4 xl:w-4/5  gap-1 m-auto ">
          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={fm1}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={fm2}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={fm3}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={fm4}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={fm5}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={fm6}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>
        </div>
      </section>

      <section
        className="min-h-screen  relative "
        // flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-10 md:justify-center md:items-center
        style={{
          backgroundImage: `url(${seaTable})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "20px",
        }}
      >
        {/* <div className=" absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm "></div> */}

        <div className=" absolute inset-0  bg-black bg-opacity-60 backdrop-blur-sm h-full flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-10 md:justify-center md:items-center md:h-full ">
          <div className="space-y-4 w-[60%] sm:w-[45%] h-[200px] lg:w-[260px] lg:h-[400px] ">
            <div
              className="  w-full h-full rounded-t-[200px] cursor-pointer"
              // w-1/2 h-[200px] lg:w-[260px] lg:h-[400px]
              style={{
                backgroundImage: `url(${seaTable})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-white text-[20px]">Folie Marine</div>
          </div>

          <div className="space-y-4 w-[60%] sm:w-[45%]  h-[200px] lg:w-[260px] lg:h-[400px]">
            <div
              className="  w-full h-full rounded-t-[200px] cursor-pointer"
              // w-1/2 h-[200px] lg:w-[260px] lg:h-[400px]
              style={{
                backgroundImage: `url(${seaTable})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-white text-[20px]">Folie Marine</div>
          </div>

          <div className="space-y-4 w-[60%] sm:w-[45%]  h-[200px] lg:w-[260px] lg:h-[400px]">
            <div
              className="  w-full h-full rounded-t-[200px] cursor-pointer"
              // w-1/2 h-[200px] lg:w-[260px] lg:h-[400px]
              style={{
                backgroundImage: `url(${seaTable})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-white text-[20px]">Folie Marine</div>
          </div>

          <div className="space-y-4 w-[60%] sm:w-[45%]  h-[200px] lg:w-[260px] lg:h-[400px]">
            <div
              className="  w-full h-full rounded-t-[200px] cursor-pointer"
              // w-1/2 h-[200px] lg:w-[260px] lg:h-[400px]
              style={{
                backgroundImage: `url(${seaTable})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-white text-[20px]">Folie Marine</div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};
