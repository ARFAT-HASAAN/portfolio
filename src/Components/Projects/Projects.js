import React from "react";
import camera from "../../images/projectpost/camerea.jpg";
import doctors from "../../images/projectpost/doctor.jpg";
import travel from "../../images/projectpost/travel.jpg";
import resturent from "../../images/projectpost/resturent.jpg";
import fotball from "../../images/projectpost/fotball.jpg";
import ecommers from "../../images/projectpost/ecommerce.jpg";

const Projects = () => {
  return (
    <div id="project" className="bg-green-900 py-4">
      <div className="container mx-auto my-2">
        <h2 className="text-center font-bold text-3xl md:text-6xl text-white p-8">
          {" "}
          My Projects{" "}
        </h2>
        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded-lg bg-white  shadow-2xl text-center">
            <img src={camera} className="rounded-lg" alt="banner" />
            <h2 className="font-bold text-3xl text-center mx-auto ">Camfire</h2>
            <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
              {" "}
              <a href="https://camera-store-43a0a.web.app/">Prview</a>{" "}
            </button>
          </div>

          <div className="rounded-lg  shadow-2xl bg-white text-center">
            <img src={doctors} className="rounded-lg" alt="banner" />
            <h2 className="font-bold text-3xl text-center mx-auto ">Camfire</h2>
            <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
              {" "}
              <a href="https://camera-store-43a0a.web.app/">Prview</a>{" "}
            </button>
          </div>

          <div className="rounded-lg  bg-white shadow-2xl text-center">
            <img src={travel} className="rounded-lg" alt="banner" />
            <h2 className="font-bold text-3xl text-center mx-auto ">Camfire</h2>
            <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
              {" "}
              <a href="https://camera-store-43a0a.web.app/">Prview</a>{" "}
            </button>
          </div>

          <div className="rounded-lg  bg-white shadow-2xl text-center">
            <img src={fotball} className="rounded-lg" alt="banner" />
            <h2 className="font-bold text-3xl text-center mx-auto ">Camfire</h2>
            <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
              {" "}
              <a href="https://camera-store-43a0a.web.app/">Prview</a>{" "}
            </button>
          </div>

          <div className="rounded-lg bg-white shadow-2xl text-center">
            <img src={resturent} className="rounded-lg" alt="banner" />
            <h2 className="font-bold text-3xl text-center mx-auto ">Camfire</h2>
            <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
              {" "}
              <a href="https://camera-store-43a0a.web.app/">Prview</a>{" "}
            </button>
          </div>

          <div className="rounded-lg bg-white shadow-2xl text-center">
            <img src={ecommers} className="rounded-lg" alt="banner" />
            <h2 className="font-bold text-3xl text-center mx-auto ">Camfire</h2>
            <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
              {" "}
              <a href="https://camera-store-43a0a.web.app/">Prview</a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
