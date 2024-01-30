import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import food from "../assets/Group-51@2x-7-1024x576.jpg";
import table from "../assets/Group-51@2x-8-1024x576.jpg";
import seaTable from "../assets/Group-51@2x-6-1024x576.jpg";
import borsh from "../assets/borsh@2x-1-910x1024.jpg";
import ksamil from "../assets/ksamil@2x-910x1024.jpg";
import folieVillage from "../assets/folievillage@2x-910x1024.jpg";

export const Carousel = ({ text }) => {
  const data = [
    { id: 0, img: food },
    { id: 1, img: table },
    {
      id: 2,
      img: seaTable,
    },
    {
      id: 3,
      img: borsh,
    },
    {
      id: 4,
      img: ksamil,
    },
    {
      id: 5,
      img: folieVillage,
    },
    {
      id: 6,
      img: seaTable,
    },
    {
      id: 7,
      img: borsh,
    },
    {
      id: 8,
      img: ksamil,
    },
    {
      id: 9,
      img: folieVillage,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          //   dots: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section id="gallery" className="bg-[#151515] overflow-hidden">
      <div className="text-white text-[28px] text-center py-7">{text}</div>
      <div className="w-full m-auto">
        <Slider {...settings}>
          {/* <div className=" flex"> */}
          {data.map((item) => (
            <div
              key={item.id}
              className="w-1/2 h-[250px] md:w-1/3 md:h-[300px] xl:h-[400px]  bg-white "
            >
              <img
                src={item.img}
                alt="img"
                className="w-full h-full 2xl:w-[400px] 2xl:h-[420px] object-cover"

                //   w-full h-full
              ></img>
            </div>
          ))}
          {/* </div> */}
        </Slider>
      </div>
    </section>
  );
};
