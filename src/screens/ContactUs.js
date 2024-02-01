/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Header from "../components/Header";
import folieVillage from "../assets/folievillage@2x-910x1024.jpg";
import { Form } from "../components/Form";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "../components/ScrollToTop";

export const ContactUs = () => {
  return (
    <div id="contact-us" className="bg-theme">
      <ScrollToTop></ScrollToTop>
      <Header></Header>

      <div
        className="flex flex-col h-[60vh] bg-white  bg-no-repeat bg-cover "
        style={{
          backgroundImage: `url(${folieVillage})`,
          backgroundPosition: " center",
        }}
      ></div>

      <section className=" flex justify-end">
        <div className="bg-[#272727] w-full px-5 h-[500px] lg:h-[600px] lg:w-3/4 flex flex-col justify-center lg:pl-16">
          <div className="w-full lg:w-[700px]">
            <div className="text-[30px] text-gold leading-9">
              CONTACT US <br></br>WE’RE HERE TO HELP!
            </div>
            <div className="text-white mt-3">
              Whether you’re in the early planning stages or looking for a
              reliable construction partner, we’re here to assist you. Reach out
              to us, and let’s build something great together!
            </div>
          </div>

          <div className="mt-10">
            <Form></Form>
          </div>
        </div>
      </section>

      <div className="hidden lg:flex justify-end ">
        <div className=" w-full  lg:w-3/4 flex flex-col gap-12 justify-center py-14">
          <div className="space-y-4   ">
            <h1 className="text-white text-[18px] font-[500] md:text-[25px]">
              SUBSCRIBE TO OUR NEWSLETTER
            </h1>
            <div className="-space-y-1 flex flex-col text-[14px] md:text-[18px] text-gray-400">
              <p>Get the latest updates straight to your inbox!</p>
              <p>Subscribe to our newsletter for news, offers, and more.</p>
            </div>
          </div>

          <div className="flex ">
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL"
              className=" outline-none border border-gray-200 flex-1 text-[14px] w-[200px] md:[18px] md:w-[400px] max-w-[400px] px-8 bg-transparent text-white caret-white"
            ></input>
            <button className="flex gap-2 border border-gray-200 py-4 px-5 md:px-10 text-white lg:text-[20px] ">
              <div className="hidden lg:block">SUBSCRIBE</div>
              <div>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row border-y-[1px] border-gray-400 border-opacity-40 lg:h-[500px]">
        <div className="w-full lg:w-1/3 flex flex-col gap-5 justify-center p-[20px] lg:p-[40px] ">
          <div className="text-white text-[20px] lg:text-[30px]">
            Visit Our Office
          </div>
          <div className="text-gray-400 text-[18px]">
            We encourage you to visit our office to discuss your project in
            person. Please schedule an appointment in advance to ensure that the
            appropriate team members are available to assist you.
          </div>
          <div className="flex items-center gap-4">
            <div>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-white text-[25px]"
              ></FontAwesomeIcon>
            </div>
            <div>
              <div className="text-gold text-[18px]">ADDRESS:</div>
              <div className="text-white text-[17px]">
                Rr. Murat Toptani, Tirana
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white text-[25px]"
              ></FontAwesomeIcon>
            </div>
            <div>
              <div className="text-gold text-[18px]">EMAIL</div>
              <div className="text-white text-[17px]">
                info@millenniumgroup.al
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 h-[500px] bg-white overflow-hidden">
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <iframe
              style={{ overflow: "hidden" }}
              width="100%"
              height="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              allowFullScreen
              src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Population calculator map
              </a>
            </iframe>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
