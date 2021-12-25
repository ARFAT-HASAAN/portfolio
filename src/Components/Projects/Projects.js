import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import camera from "../../images/projectpost/camerea.jpg";
import doctors from "../../images/projectpost/doctor.jpg";
import travel from "../../images/projectpost/travel.jpg";
import resturent from "../../images/projectpost/resturent.jpg";
import fotball from "../../images/projectpost/fotball.jpg";
import ecommers from "../../images/projectpost/ecommerce.jpg";

const Projects = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="project" className="bg-green-900 ">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-3xl md:text-6xl text-white p-8">
          My Projects
        </h2>
        <Slider {...settings}>
          <div>
            <div className="rounded-lg bg-white mx-3  shadow-2xl text-center">
              <img src={camera} className="rounded-lg" alt="banner" />
              <h2 className="font-bold text-3xl text-center mx-auto ">
                Camfire
              </h2>
              <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
                {" "}
                <a href="https://camera-store-43a0a.web.app/">Prview</a>{" "}
              </button>
            </div>
          </div>
          <div>
            <div className="rounded-lg  shadow-2xl bg-white mx-3 text-center">
              <img src={doctors} className="rounded-lg" alt="banner" />
              <h2 className="font-bold text-3xl text-center mx-auto ">
                Camfire
              </h2>
              <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
                {" "}
                <a href="https://camera-store-43a0a.web.app/">Prview</a>{" "}
              </button>
            </div>
          </div>
          <div>
            <div className="rounded-lg bg-white shadow-2xl mx-3  text-center">
              <img src={travel} className="rounded-lg" alt="banner" />
              <h2 className="font-bold text-3xl text-center mx-auto ">
                Camfire
              </h2>
              <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
                {" "}
                <a href="https://camera-store-43a0a.web.app/">Prview</a>{" "}
              </button>
            </div>
          </div>
          <div>
            <div className="rounded-lg  bg-white mx-3 shadow-2xl   text-center">
              <img src={fotball} className="rounded-lg" alt="banner" />
              <h2 className="font-bold text-3xl text-center mx-auto ">
                Camfire
              </h2>
              <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
                {" "}
                <a href="https://camera-store-43a0a.web.app/">Prview</a>{" "}
              </button>
            </div>
          </div>
          <div>
            <div className="rounded-lg  bg-white mx-3 shadow-2xl  text-center">
              <img src={resturent} className="rounded-lg" alt="banner" />
              <h2 className="font-bold text-3xl text-center mx-auto ">
                Camfire
              </h2>
              <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
                {" "}
                <a href="https://camera-store-43a0a.web.app/">Prview</a>{" "}
              </button>
            </div>
          </div>
          <div>
            <div className="rounded-lg bg-white mx-3 shadow-2xl   text-center">
              <img src={ecommers} className="rounded-lg" alt="banner" />
              <h2 className="font-bold text-3xl text-center mx-auto ">
                Camfire
              </h2>
              <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
                {" "}
                <a href="https://camera-store-43a0a.web.app/">Prview</a>{" "}
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Projects;

/*

     

         

         

         

         

        
*/
