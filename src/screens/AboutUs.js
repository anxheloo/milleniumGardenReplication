import React from "react";
import hamburgerMenu from "../assets/Group-28.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import food from "../assets/Group-51@2x-7-1024x576.jpg";
import table from "../assets/Group-51@2x-8-1024x576.jpg";
import seaTable from "../assets/Group-51@2x-6-1024x576.jpg";
import borsh from "../assets/borsh@2x-1-910x1024.jpg";
import ksamil from "../assets/ksamil@2x-910x1024.jpg";
import folieVillage from "../assets/folievillage@2x-910x1024.jpg";
import Header from "../components/Header";
import WhoWeAre from "../components/WhoWeAre";
import folieVillageAboutUs from "../assets/folieVillageAboutUs.jpg";

export const AboutUs = () => {
  return (
    <div id="aboutUsScreen">
      <header
        id=""
        className="flex flex-col  min-h-screen   bg-no-repeat bg-cover relative"
        style={{ backgroundImage: `url(${seaTable})` }}
      >
        <div className="absolute top-0  w-full h-full bg-black opacity-20 z-10"></div>

        <Header></Header>

        <div className="flex-1 pb-10 lg:pb-20 bg-transparent text-white flex gap-5  items-end z-20 ">
          <div className="hidden w-[20%] lg:block"></div>

          <h1 className="text-[35px] ml-10 max-w-[250px] leading-[35px] lg:ml-0 lg:text-[120px] lg:max-w-[650px] lg:leading-[120px] text-left  ">
            together we build
          </h1>
        </div>
      </header>

      <section
        id="whoWeAre"
        className="bg-black min-h-screen border-t-[1px] border-t-gray-400 border-b-[1px] border-b-gray-200"
      >
        <div className="flex text-white">
          <div>WHO ARE WE?</div>
          <div>
            At Millennium Group, we are more than builders and architects; we
            are a collective of passionate individuals driven by a shared
            vision—to transform spaces and create experiences that resonate with
            the essence of our clients’ aspirations. We foster a culture of
            collaboration, where ideas flourish, and each team member’s
            contribution is valued. Our commitment to open communication, mutual
            respect, and a shared passion for excellence defines our workplace.
          </div>
        </div>

        <hr className="w-full m-auto xl:w-1/2  bg-gray-300 opacity-55"></hr>

        <WhoWeAre></WhoWeAre>

        <img src={folieVillageAboutUs} alt="folie village"></img>
      </section>
    </div>
  );
};
