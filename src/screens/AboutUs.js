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
import fullCoverAboutUs from "../assets/Component-4-–-1-1536x320.jpg";
import icon1 from "../assets/architecture-2.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import Header from "../components/Header";
import WhoWeAre from "../components/WhoWeAre";
import folieVillageAboutUs from "../assets/folieVillageAboutUs.jpg";
import WhoWeAreText from "../components/WhoWeAreText";
import { WhatWeDoComponent } from "../components/WhatWeDoComponent";
import { Form } from "../components/Form";
import { Carousel } from "../components/Carousel";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export const AboutUs = () => {
  return (
    <div id="aboutUsScreen">
      <ScrollToTop></ScrollToTop>
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
        className="bg-[#151515] min-h-screen border-t-[1px] border-t-gray-400  "
      >
        <WhoWeAreText
          title={"WHO ARE WE?"}
          text={
            "At Millennium Group, we are more than builders and architects; we are a collective of passionate individuals driven by a shared vision—to transform spaces and create experiences that resonate with the essence of our clients’ aspirations. We foster a culture of collaboration, where ideas flourish, and each team member’s contribution is valued. Our commitment to open communication, mutual respect, and a shared passion for excellence defines our workplace."
          }
        ></WhoWeAreText>

        <hr className="w-full m-auto xl:w-1/2  bg-gray-300 opacity-55"></hr>

        <WhoWeAre></WhoWeAre>

        <img
          src={folieVillageAboutUs}
          alt="folie village"
          className="m-auto"
        ></img>

        <WhoWeAreText
          title={"WHAT WE DO?"}
          text={`Our approach is centered on you—our clients. We understand that each project is a journey, and we are here to navigate it with you. From the initial concept discussions to the final touches, we collaborate closely, ensuring that your vision is not only realized but surpassed. \nWe don’t just build structures; we build trust. We are committed to delivering projects with the utmost quality, on time, and within budget, because your satisfaction is our success.`}
        ></WhoWeAreText>

        <WhatWeDoComponent
          icon={icon1}
          text={
            "Our experienced architects work closely with clients to create innovative and functional designs that align with their vision and goals."
          }
          title={"COMMERCIAL CONSTRUCTION"}
        ></WhatWeDoComponent>

        <div className="px-[20px]">
          <hr className="bg-gray-400 opacity-30 w-full xl:w-1/2 m-auto"></hr>
        </div>

        <WhatWeDoComponent
          icon={icon2}
          text={
            "We excel in efficient project management, overseeing timelines, budgets, and quality control to deliver projects on schedule and within budget."
          }
          title={"RESIDENTIAL CONSTRUCTION"}
        ></WhatWeDoComponent>

        <div className="px-[20px]">
          <hr className="bg-gray-400 opacity-30 w-full xl:w-1/2 m-auto"></hr>
        </div>

        <WhatWeDoComponent
          icon={icon3}
          text={
            "Our priority is the safety of our team and clients. We adhere to the highest safety standards and ensure all projects comply with relevant regulations."
          }
          title={"SAFETY AND COMPLIANCE"}
        ></WhatWeDoComponent>
      </section>

      <section id="contactUs" className=" bg-[#151515] p-[20px] md:p-20">
        <div>
          <div
            style={{ backgroundImage: `url(${fullCoverAboutUs})` }}
            className="w-full p-[20px] h-[250px] md:w-3/4 md:p-20 md:h-[380px] bg-cover bg-no-repeat flex items-center"
          >
            <div className="hidden md:block md:w-1/3"></div>
            <div className="text-left space-y-3 md:space-y-5">
              <h1 className="text-[20px] md:text-[28px] text-white">
                CONTACT US AND TAKE THE FIRST STEP TO GET STARTED.
              </h1>
              <h4 className="text-[14px] md:text-[16px] text-white">
                We are ready to make your architectural dreams come true.
              </h4>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-20 ">
          <Form></Form>
        </div>
      </section>

      <Carousel text={"GALLERY"}></Carousel>

      <Footer></Footer>
    </div>
  );
};
