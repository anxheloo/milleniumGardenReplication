/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import logo from "../assets/Group-8-1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import hamburgerMenu from "../assets/Group-28.svg";
import arrowRight from "../assets/arrow-right-solid.svg";
import hoverImg from "../assets/hoverImgTest.jpg";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // useEffect(() => {
  if (openMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  // Cleanup function to reset body overflow when component unmounts
  //   return () => {
  //     document.body.style.overflow = "visible";
  //   };
  // }, [openMenu]);

  return (
    <div
      className={`flex justify-between items-center border-b-[1px] border-gray-500 px-3 py-5 xl:px-28 xl:py-12 z-20 ${
        openMenu && "z-40"
      }`}
    >
      <Link to={"/"}>
        <img
          src={logo}
          alt="logo"
          className="w-[120px] lg:w-[150px] cursor-pointer"
        ></img>
      </Link>

      <div className="flex items-center gap-7 text-white">
        <div className="flex items-center gap-2 rounded-full border border-gray-500 px-2 py-1 lg:px-2.5 lg:py-1.5 cursor-pointer">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          <h1>EN</h1>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <h1 className="hidden lg:flex text-white text-[28px] font-[400]">
          MENU
        </h1>
        <button onClick={() => setOpenMenu(true)}>
          <img
            src={hamburgerMenu}
            alt="hamburgerMenu"
            width={"35px"}
            // height={"50px"}
            className=" rotate-90 cursor-pointer"
          ></img>
        </button>
      </div>

      <div
        id="mobile-menu"
        // className="absolute top-0 bg-black w-full text-5xl flex-col origin-top animate-open-menu hidden"
        className={`absolute  top-0 left-0 right-0 bg-black  w-full h-screen text-5xl flex-col origin-top animate-open-menu ${
          openMenu ? "flex " : "hidden"
        }`}
      >
        <button
          onClick={() => setOpenMenu(false)}
          className="fixed top-[20px] right-[20px] text-6xl  px-6  text-white"
        >
          &times;
        </button>
        <nav
          className="overflow-y-auto flex flex-col min-h-screen  text-white text-[20px]  md:text-[30px] lg:text-[40px]"
          aria-label="mobile"
        >
          <Link
            to={"/"}
            href="#"
            className="py-[20px] ml-4 sm:py-[50px] border-b-[1px] border-gray-500 border-opacity-40"
            alt="img"
          >
            <img src={logo}></img>
          </Link>
          <div className="w-full border-b-[1px] border-gray-500 border-opacity-40 flex z-100 ">
            <div
              href="#legal"
              className="group py-[20px] w-3/5 lg:w-3/6 md:py-[40px] text-gray-500  hover:opacity-90 lg:hover:bg-[#8b7c2a]  hover:text-white "
            >
              <Link
                to={"/about-us"}
                href="#"
                className="peer w-fit flex gap-3 ml-4 items-center cursor-pointer"
              >
                <img
                  src={arrowRight}
                  className="hidden md:group-hover:block w-7"
                  alt="img"
                ></img>
                <div>About Us</div>
              </Link>

              <div className="hidden lg:peer-hover:block fixed top-0 right-0 bg-white w-[450px] max-w-[500px]  h-screen">
                <img
                  src={hoverImg}
                  className=" w-full h-full object-cover"
                ></img>
              </div>
            </div>

            <div className="hidden trapezoid-container md:block">
              <div className="trapezoid"></div>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-gray-500 border-opacity-40 flex ">
            <div className="group py-[20px] w-3/5 lg:w-3/6  md:py-[40px] text-gray-500  hover:opacity-90 lg:hover:bg-[#8b7c2a]  hover:text-white relative ">
              <Link
                to={"/what-we-do"}
                className="peer w-fit flex gap-3 ml-4 items-center cursor-pointer"
              >
                <img
                  src={arrowRight}
                  className="hidden md:group-hover:block w-7"
                  alt="img"
                ></img>
                <div>What we do</div>
              </Link>

              <div className="hidden lg:peer-hover:block fixed top-0 right-0 bg-white w-[450px] max-w-[500px]  h-screen z-50">
                <img
                  src={hoverImg}
                  className=" w-full h-full object-cover"
                ></img>
              </div>
            </div>

            <div className="hidden trapezoid-container md:block">
              <div className="trapezoid"></div>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-gray-500 border-opacity-40 flex ">
            <div className="group py-[20px] w-3/5 lg:w-3/6  md:py-[40px] text-gray-500  hover:opacity-90 lg:hover:bg-[#8b7c2a]  hover:text-white relative ">
              <Link
                to={"/hospitality"}
                className="peer w-fit flex gap-3 ml-4 items-center cursor-pointer"
              >
                <img
                  src={arrowRight}
                  className="hidden md:group-hover:block w-7"
                  alt="img"
                ></img>
                <div>Hospitality</div>
              </Link>

              <div className="hidden lg:peer-hover:block fixed top-0 right-0 bg-white w-[450px] max-w-[500px]  h-screen z-50">
                <img
                  src={hoverImg}
                  className=" w-full h-full object-cover"
                ></img>
              </div>
            </div>

            <div className="hidden trapezoid-container md:block">
              <div className="trapezoid"></div>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-gray-500 border-opacity-40 flex ">
            <div className="group py-[20px] w-3/5 lg:w-3/6  md:py-[40px] text-gray-500  hover:opacity-90 lg:hover:bg-[#8b7c2a]  hover:text-white relative ">
              <Link
                to={"/entertainment"}
                className="peer w-fit flex gap-3 ml-4 items-center cursor-pointer"
              >
                <img
                  src={arrowRight}
                  className="hidden md:group-hover:block w-7"
                  alt="img"
                ></img>
                <div>Entertainment</div>
              </Link>

              <div className="hidden lg:peer-hover:block fixed top-0 right-0 bg-white w-[450px] max-w-[500px]  h-screen z-50">
                <img
                  src={hoverImg}
                  className=" w-full h-full object-cover"
                ></img>
              </div>
            </div>

            <div className="hidden trapezoid-container md:block">
              <div className="trapezoid"></div>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-gray-500 border-opacity-40 flex ">
            <div className="group py-[20px] w-3/5 lg:w-3/6  md:py-[40px] text-gray-500  hover:opacity-90 lg:hover:bg-[#8b7c2a]  hover:text-white relative ">
              <Link
                to={"/comming-soon"}
                className="peer w-fit flex gap-3 ml-4 items-center cursor-pointer"
              >
                <img
                  src={arrowRight}
                  className="hidden md:group-hover:block w-7"
                  alt="img"
                ></img>
                <div>Comming Soon</div>
              </Link>

              <div className="hidden lg:peer-hover:block fixed top-0 right-0 bg-white w-[450px] max-w-[500px]  h-screen z-50">
                <img
                  src={hoverImg}
                  className=" w-full h-full object-cover"
                ></img>
              </div>
            </div>

            <div className="hidden trapezoid-container md:block">
              <div className="trapezoid"></div>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-gray-500 border-opacity-40 flex ">
            <div className="group py-[20px] w-3/5 lg:w-3/6  md:py-[40px] text-gray-500  hover:opacity-90 lg:hover:bg-[#8b7c2a]  hover:text-white relative ">
              <Link
                to={"/real-estate"}
                className="peer w-fit flex gap-3 ml-4 items-center cursor-pointer"
              >
                <img
                  src={arrowRight}
                  className="hidden md:group-hover:block w-7"
                  alt="img"
                ></img>
                <div>Real Estate</div>
              </Link>

              <div className="hidden lg:peer-hover:block fixed top-0 right-0 bg-white w-[450px] max-w-[500px]  h-screen z-50">
                <img
                  src={hoverImg}
                  className=" w-full h-full object-cover"
                ></img>
              </div>
            </div>

            <div className="hidden trapezoid-container md:block">
              <div className="trapezoid"></div>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-gray-500 border-opacity-40 flex ">
            <div className="group py-[20px] w-3/5 lg:w-3/6  md:py-[40px] text-gray-500  hover:opacity-90 lg:hover:bg-[#8b7c2a]  hover:text-white relative ">
              <Link
                to={"/contact-us"}
                className="peer w-fit flex gap-3 ml-4 items-center cursor-pointer"
              >
                <img
                  src={arrowRight}
                  className="hidden md:group-hover:block w-7"
                  alt="img"
                ></img>
                <div>Contact Us</div>
              </Link>

              <div className="hidden lg:peer-hover:block fixed top-0 right-0 bg-white w-[450px] max-w-[500px]  h-screen z-50">
                <img
                  src={hoverImg}
                  className=" w-full h-full object-cover"
                ></img>
              </div>
            </div>

            <div className="hidden trapezoid-container md:block">
              <div className="trapezoid"></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
