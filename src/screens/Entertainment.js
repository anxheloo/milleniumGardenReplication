import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StartYourProject from "../components/StartYourProject";
import seaTable from "../assets/Group-51@2x-6-1024x576.jpg";
import food from "../assets/Group-51@2x-7-1024x576.jpg";
import table from "../assets/Group-51@2x-8-1024x576.jpg";
import ApartholImg from "../assets/ApartholImage.jpg";
import FolieTarrace from "../assets/FolieTarrace.jpg";
import MilleniumCinema from "../assets/MilleniumCinema.jpg";
import Medispa from "../assets/Medispa.jpg";
import Subscribe from "../components/Subscribe";
import Card from "../components/Card";

const Entertainment = () => {
  return (
    <div id="entertainment">
      <header
        id=""
        className="flex flex-col  min-h-screen   bg-no-repeat bg-cover relative"
        style={{ backgroundImage: `url(${seaTable})` }}
      >
        <div className="absolute top-0  w-full h-full bg-black opacity-20 z-10"></div>

        <Header></Header>

        <div className="flex flex-1 flex-col  px-[20px] pt-[20px] justify-end items-start  md:pl-10  xl:pl-28 bg-transparent text-white gap-5  z-20 ">
          {/* <div className="hidden w-[20%] lg:block"></div> */}

          <h1 className="text-[35px] lg:ml-10 max-w-[250px]   xl:ml-20 lg:text-[100px] lg:max-w-[450px]   ">
            ENTERTAINMENT
          </h1>

          <div className="bg-white w-full  lg:h-[350px] lg:ml-10 xl:ml-20 p-5 xl:px-36 xl:py-28">
            <div className="text-black text-[18px] md:text-[20px] xl:w-3/4">
              Welcome to the heart of creativity and excitement! At Millennium
              Group, we take pride in curating unforgettable entertainment
              experiences that captivate audiences and leave a lasting
              impression. Dive into our portfolio of diverse entertainment
              projects that showcase our dedication to innovation, storytelling,
              and immersive design.
            </div>
          </div>
        </div>
      </header>

      <section className="px-[20px] xl:px-32 py-20 ">
        <div className="flex flex-row justify-center gap-1 flex-wrap gap-y-5 ">
          <Card
            imageSrc={ApartholImg}
            title={"Aparthotel Tirana"}
            url={""}
          ></Card>
          <Card
            imageSrc={FolieTarrace}
            title={"Folie Terrace/Electronic"}
            url={""}
          ></Card>
          <Card
            imageSrc={MilleniumCinema}
            title={"Millennium Cinema"}
            url={""}
          ></Card>
          <Card imageSrc={Medispa} title={"Medispa"} url={""}></Card>
        </div>
      </section>

      <StartYourProject
        bgColor={"#FFFFFF"}
        textColor={"#000000"}
      ></StartYourProject>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Entertainment;
