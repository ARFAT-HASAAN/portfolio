import React from "react";
import aboutme from "../../images/abouteme.png";

const Abouteme = () => {
  return (
    <div className="bg-green-900">
      <div>
        <h1 className="text-3xl md:text-6xl font-extrabold text-white text-center p-8">
          About Me
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-4 flex items-center">
        <div>
          <img src={aboutme} alt="abouteme" />
        </div>

        <div className="text-center">
          <h1 className="text-center font-bold text-white p-4 font-normal text-xl ">
            I have always been curious and passionate about web development. as
            a result, I started learning web development.After 6 month of my web
            journey. I have done some projects and gained experience in Frontend
            Development. You can cheeck my projects below..
          </h1>
          <button className="bg-red-500 md:w-40 w-30 my-y rounded-full md:py-3 py-2 px-4 md:px-6 font-bold text-xl text-white">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Abouteme;
