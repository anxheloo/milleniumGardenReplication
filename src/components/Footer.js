import React from "react";

import logo from "../assets/Group-8-1.svg";
import igLogo from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white">
      <div className="flex flex-col gap-10 p-10  md:flex-row md:justify-between md:items-start md:p-14 xl:p-24">
        <div className="flex-1">
          <img src={logo} className="w-[180px] xl:[250px]"></img>
        </div>

        <div className="hidden  md:flex gap-10 lg:gap-32 flex-2 xl:text-[20px] ">
          <div className="flex flex-col gap-4">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">What we do</a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#">Projects</a>
            <a href="#">Coming Soon</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center lg:items-end flex-1">
          <img
            src={igLogo}
            className="w-[25px] h-[25px] text-white"
            alt="click to go to ig"
          ></img>
          <p className="text-left text-[14px] lg:text-[18px] md:text-right">
            Connect with us on social media for updates, news, and
            behind-the-scenes glimpses of our projects.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-between items-center md:px-10 xl:px-28 py-6 border-t-[1px] border-gray-100">
        <div>Terms of Use</div>
        <div className=" max-w-[150px] text-center  text-[12px] md:text-[14px] lg:max-w-[400px] xl:text-[20px]">
          ©2023 Millennium Group. All rights reserved
        </div>
        <div>
          Designed by{" "}
          <span className="text-blue-700">
            <a href="https://www.1up.al/" target="_blank">
              1UP Labs
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
