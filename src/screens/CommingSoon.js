import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StartYourProject from "../components/StartYourProject";
import folieVillage from "../assets/folievillage@2x-910x1024.jpg";
import ksamil from "../assets/ksamil@2x-910x1024.jpg";
import borsh from "../assets/borsh@2x-1-910x1024.jpg";
import poro from "../assets/poro.jpg";
import Subscribe from "../components/Subscribe";
import Card from "../components/Card";

const CommingSoon = () => {
  return (
    <div id="comming-soon">
      <header
        id=""
        className="flex flex-col  min-h-screen   bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(${folieVillage})`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0  w-full h-full bg-black opacity-20 z-10"></div>

        <Header></Header>

        <div className="flex flex-1 flex-col  px-[20px] pt-[20px] justify-end items-start  md:pl-10  xl:pl-28 bg-transparent text-white gap-5  z-20 ">
          {/* <div className="hidden w-[20%] lg:block"></div> */}

          <h1 className="text-[35px] lg:ml-10 max-w-[250px]   xl:ml-20 lg:text-[100px] lg:max-w-[450px]   ">
            COMING SOON
          </h1>

          <div className="bg-white w-full  lg:h-[350px] lg:ml-10 xl:ml-20 p-5 xl:px-36 xl:py-28">
            <div className="text-black text-[18px] md:text-[20px] xl:w-3/4">
              Unveiling Tomorrow’s Landscapes: Anticipate the Future with Our
              Upcoming Construction Projects! Stay tuned for groundbreaking
              transformations.
            </div>
          </div>
        </div>
      </header>

      <section className="px-[20px] xl:px-32 py-20 ">
        <div className="flex flex-row justify-center gap-1 flex-wrap gap-y-5 ">
          <Card imageSrc={ksamil} title={"KSAMIL"} url={""}></Card>
          <Card imageSrc={folieVillage} title={"FOLIE VILLAGE"} url={""}></Card>
          <Card imageSrc={borsh} title={"BORSH"} url={""}></Card>
          <Card imageSrc={poro} title={"PORO"} url={""}></Card>
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

export default CommingSoon;
