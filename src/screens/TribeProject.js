import React from "react";
import seaTable from "../assets/Group-51@2x-6-1024x576.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import t1 from "../assets/tribeImg1.jpg";
import t2 from "../assets/tribeImg2.jpg";
import t3 from "../assets/tribeImg3.jpg";
import t4 from "../assets/tribeImg4.jpg";
import t5 from "../assets/tribeImg5.jpg";
import t6 from "../assets/tribeImg6.jpg";
import folieMarineLoge from "../assets/Folie Marine Logo.png";
import tribeLogo from "../assets/tribeLogo.png";
import food from "../assets/Group-51@2x-7-1024x576.jpg";
import table from "../assets/Group-51@2x-8-1024x576.jpg";
import sushiBar from "../assets/OpiumSushiBar.jpg";
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "../components/ScrollToTop";

const TribeProject = () => {
  return (
    <div id="projects">
      <ScrollToTop></ScrollToTop>
      <header
        id=""
        className="flex flex-col  min-h-screen   bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(${food})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute top-0  w-full h-full bg-black opacity-20 z-10"></div>

        <Header></Header>
      </header>

      <div className="w-full p-[20px] lg:w-1/2 m-auto space-y-10 mt-28 mb-10">
        <div className="flex justify-between items-center">
          <img src={tribeLogo} width={"200px"}></img>
          <div>
            <div className="text-gray-400 text-[14px]">MORE INFO ↗</div>
            <div className="text-[15px]">
              <a href="#">triberestaurant.al</a>
            </div>
          </div>
        </div>
        <div className="text-[17px]">
          Always fresh products, always attentive staff, always friendly
          reception. From the union of these three elements, that represent our
          core, Tribe was born, an innovative gastronomic project that gives
          life to real culinary suggestions. Tribe has a studied design to give
          you an unforgettable gastronomic experience: you could stay here every
          day to enjoy delicious specialties of meat, fish, vegetarian dishes,
          handcrafted cakes that contain true goodness. Its central location,
          close to the main truistical attractions of the capital, makes it the
          ideal spot to stop for lunch, dinner and also just to relax before
          heading on to explore the city.
        </div>
      </div>

      <section className=" py-10 sm:py-14 md:py-16 lg:py-20 xl:py-28 px-[10px] ">
        <div className="lg:px-[10px] w-full  flex justify-center flex-wrap lg:w-3/4 xl:w-4/5  gap-1 m-auto ">
          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={t1}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={t2}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={t3}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={t4}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={t5}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>

          <div className="w-[48%] lg:w-[33%] h-[48%] lg:h-[33%]">
            <img
              src={t6}
              className="w-full h-full object-cover"
              alt="img"
            ></img>
          </div>
        </div>
      </section>

      <section
        className="min-h-[80vh] "
        // relative
        // flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-10 md:justify-center md:items-center
        style={{
          backgroundImage: `url(${seaTable})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "20px",
        }}
      >
        {/* <div className=" absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm "></div> */}
        {/* absolute inset-0  */}
        {/* w-full h-full */}
        {/* absolute top-0 left-0 */}

        <div className=" w-full min-h-[80vh] py-10 pb-20 bg-black bg-opacity-40 flex flex-col  justify-center items-center space-y-10 md:flex-row md:flex-wrap gap-14 md:justify-center  md:items-center ">
          <div className="space-y-4 w-[65%] sm:w-[45%] h-[270px] lg:w-[260px] xl:h-[400px] ">
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

          <div className="space-y-4 w-[65%] sm:w-[45%] h-[270px] lg:w-[260px] xl:h-[400px]">
            <div
              className="  w-full h-full rounded-t-[200px] cursor-pointer"
              // w-1/2 h-[200px] lg:w-[260px] lg:h-[400px]
              style={{
                backgroundImage: `url(${food})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-white text-[20px]">Tribe</div>
          </div>

          <div className="space-y-4 w-[65%] sm:w-[45%]  h-[270px] lg:w-[260px] xl:h-[400px]">
            <div
              className="  w-full h-full rounded-t-[200px] cursor-pointer"
              // w-1/2 h-[200px] lg:w-[260px] lg:h-[400px]
              style={{
                backgroundImage: `url(${table})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-white text-[20px]">
              Millennium Garden & Lounge
            </div>
          </div>

          <div className="space-y-4 w-[65%] sm:w-[45%]  h-[270px] lg:w-[260px] xl:h-[400px] ">
            <div
              className="  w-full h-full rounded-t-[200px] cursor-pointer"
              // w-1/2 h-[200px] lg:w-[260px] lg:h-[400px]
              style={{
                backgroundImage: `url(${sushiBar})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-white text-[20px]">Opium Sushi bar</div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default TribeProject;
