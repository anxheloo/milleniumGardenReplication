import React, { useState } from "react";
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
import video from "../assets/Folie-Village_Video_Final_FHD.mp4";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import StartYourProject from "../components/StartYourProject";
import { CardSection } from "../components/CardSection";
import { FullCover } from "../components/FullCover";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div id="firstScreen">
      {isVideoPlaying && (
        <div className=" fixed right-0 left-0 top-0 bottom-0 z-30">
          <div className="min-h-screen w-full bg-black bg-opacity-40 flex justify-center items-center relative">
            <button
              className="absolute top-3 right-3 text-white"
              onClick={() => setIsVideoPlaying(false)}
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="w-[30px] h-[30px]"
              ></FontAwesomeIcon>
            </button>

            <video
              alt="video"
              controls
              autoPlay
              className="w-full lg:max-w-4xl"
            >
              <source src={video} type="video/mp4"></source>
            </video>
          </div>
        </div>
      )}

      <header
        id=""
        className="flex flex-col  min-h-screen   bg-no-repeat bg-cover relative"
        style={{ backgroundImage: `url(${seaTable})` }}
      >
        <div className="absolute top-0  w-full h-full bg-black opacity-20 z-10"></div>

        <Header></Header>

        <div className="flex-1 lg:pb-32 bg-transparent text-white flex flex-col gap-5 justify-center items-center z-20">
          <img
            src={hamburgerMenu}
            alt="semiLogo"
            width={"120px"}
            className="p-5"
          ></img>
          <h1 className="text-[30px] max-w-[350px] leading-[30px] lg:text-[45px] lg:max-w-[500px] lg:leading-[50px] text-center">
            Building beyond today, for a better tomorrow.
          </h1>
          <p className="text-[22px] opacity-70">Since 1995</p>
        </div>
      </header>

      <CardSection
        sectionTitle={"LAST PROJECTS"}
        sectionText={
          "At Millennium, our passion for architectural innovation and construction excellence drives us to create spaces that inspire and endure. Our latest projects witness the convergence of art and construction. We continue to shape the future with our commitment to quality, sustainability, and visionary design"
        }
        nrOfCards={[0, 1, 2]}
        imageSrc={[seaTable, food, table]}
        title={["Folie Marine", "Tribe", "Millennium Garden & Lounge"]}
      ></CardSection>

      <section
        id="aboutUs"
        className="bg-[#8b7c2a] lg:min-h-screen flex justify-center p-[20px] items-center xl:justify-end xl:items-end overflow-hidden"
      >
        <div className="flex flex-col w-full  xl:w-[75%] gap-6  xl:pt-16 xl:mt-20">
          <div className=" space-y-4">
            <h1 className="text-[22px] lg:text-[28px] text-white font-semibold">
              ABOUT US
            </h1>
            <p className="max-w-[900px] text-white text-[16px] lg:text-[20px] leading-5 tracking-wider">
              As a leader in the industry, we bring passion, innovation, and
              decades of expertise to every project, creating spaces that
              inspire and endure. Our mission in 25 years has been to build more
              than structures; we build relationships, trust, and a legacy of
              excellence. We are dedicated to delivering innovative and
              sustainable solutions that not only meet but exceed our clients’
              expectations. Millennium Group has evolved into a powerhouse of
              creativity and reliability. From modest beginnings to becoming a
              recognized name in the industry, our journey is a testament to our
              commitment to quality and client satisfaction.
            </p>
          </div>

          <div
            className="h-[200px] md:h-[400px] lg:min-h-[650px] overflow-hidden  bg-no-repeat bg-cover relative"
            style={{ backgroundImage: `url(${folieVillage})` }}
          >
            <button
              onClick={() => setIsVideoPlaying(true)}
              className="bg-white flex justify-center items-center rounded-full w-[80px] h-[80px] absolute bottom-10 left-10 hover:scale-110 transition  ease-linear  delay-200"
            >
              <FontAwesomeIcon
                icon={faPlay}
                className="text-[23px]"
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </section>

      {/* <section id="fullCover" className="hidden md:block ">
        <div
          style={{ backgroundImage: `url(${component1Img})` }}
          className="group flex justify-center items-center h-[250px] lg:h-[300px] xl:h-[400px]   bg-no-repeat bg-cover hover:opacity-80 transition-opacity ease-in-out"
        >
          <div className="hidden w-1/2 group-hover:flex justify-between items-center px-7">
            <h2 className="text-white text-[40px]">HOSPITALITY</h2>
            <a href="#">
              <button>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-[30px] h-[30px] text-white -rotate-45 cursor-pointer"
                ></FontAwesomeIcon>
              </button>
            </a>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${component2Img})` }}
          className="group flex justify-center items-center h-[250px] lg:h-[300px] xl:h-[400px]   bg-no-repeat bg-cover hover:opacity-80 transition-opacity ease-in-out"
        >
          <div className="hidden w-1/2 group-hover:flex justify-between items-center px-7">
            <h2 className="text-white text-[40px]">ENTERTAINMENT</h2>
            <a href="#">
              <button>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-[30px] h-[30px] text-white -rotate-45 cursor-pointer"
                ></FontAwesomeIcon>
              </button>
            </a>
          </div>
        </div>
      </section> */}

      <FullCover></FullCover>

      <CardSection
        sectionTitle={"COMMING SOON"}
        sectionText={
          "Envisioning a world where architecture and construction seamlessly blend with the environment, we strive to be pioneers in sustainable and visionary design. Our vision is to leave a lasting impact on the communities we serve, shaping spaces that stand the test of time."
        }
        nrOfCards={[0, 1, 2]}
        imageSrc={[ksamil, folieVillage, borsh]}
        title={["KSAMIL", "FOLIE VILLAGE", "BORSH"]}
      ></CardSection>

      <section className="bg-[#151515] px-[20px] xl:px-0">
        <WhoWeAre></WhoWeAre>

        <hr className="w-full m-auto xl:w-1/2  bg-gray-300 opacity-55"></hr>

        <div className="w-full px-[10px] lg:px-[20px] py-20 xl:w-1/2 lg:m-auto xl:py-24 2xl:px-0 ">
          <div className="flex flex-col gap-14 lg:gap-8 ">
            <h1 className=" text-[20px] lg:text-[30px] font-[500] text-white">
              NEWS & PUBLICATIONS
            </h1>

            <input
              type="text"
              className=" outline-none p-5"
              placeholder="No posts found"
            ></input>
          </div>
        </div>
      </section>

      <StartYourProject></StartYourProject>

      <Subscribe></Subscribe>

      <Footer></Footer>
    </div>
  );
};

export default Home;
