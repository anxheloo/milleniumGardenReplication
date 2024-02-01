import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StartYourProject from "../components/StartYourProject";
import seaTable from "../assets/Group-51@2x-6-1024x576.jpg";
import food from "../assets/Group-51@2x-7-1024x576.jpg";
import table from "../assets/Group-51@2x-8-1024x576.jpg";
import opiumSushiBar from "../assets/OpiumSushiBar.jpg";
import chakraindianFusion from "../assets/ChakraIndianFusion.jpg";
import amberSweets from "../assets/AmberSweetsBoutique.jpg";
import jaliHotel from "../assets/JaliHotel.jpg";
import vipHotel from "../assets/JaliVipHotel.jpg";
import Subscribe from "../components/Subscribe";
import Card from "../components/Card";
import ScrollToTop from "../components/ScrollToTop";

const Hospitality = () => {
  return (
    <div id="hospitality">
      <ScrollToTop></ScrollToTop>
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
            HOSPITALITY
          </h1>

          <div className="bg-white w-full  lg:h-[350px] lg:ml-10 xl:ml-20 p-5 xl:px-36 xl:py-28">
            <div className="text-black text-[18px] md:text-[20px] xl:w-3/4">
              Welcome to Millennium Group, where hospitality meets a world of
              curated experiences. Our portfolio of hospitality projects
              reflects a commitment to creating spaces that go beyond
              accommodation, offering a blend of luxury, comfort, and unmatched
              service. Explore the allure of our hospitality ventures that
              redefine the art of welcoming.
            </div>
          </div>
        </div>
      </header>

      <section className="px-[20px] xl:px-32 py-20 ">
        <div className="flex flex-row justify-center gap-1 flex-wrap gap-y-5 ">
          <Card imageSrc={seaTable} title={"Folie marine"} url={""}></Card>
          <Card imageSrc={food} title={"Tribe"} url={""}></Card>
          <Card
            imageSrc={table}
            title={"Millenium Garden & Lounge"}
            url={""}
          ></Card>
          <Card
            imageSrc={opiumSushiBar}
            title={"Opium Sushi bar"}
            url={""}
          ></Card>
          <Card
            imageSrc={chakraindianFusion}
            title={"Chakra Indian Fusion"}
            url={""}
          ></Card>
          <Card
            imageSrc={amberSweets}
            title={"Amber Sweets Boutique"}
            url={""}
          ></Card>
          <Card imageSrc={jaliHotel} title={"JALI HOTEL"} url={""}></Card>
          <Card imageSrc={vipHotel} title={"VIP HOTEL"} url={""}></Card>
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

export default Hospitality;
