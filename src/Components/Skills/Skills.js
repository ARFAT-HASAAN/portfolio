import React from "react";

import html from "../../images/slillLogo/icons8-html-5-48.png";
import css from "../../images/slillLogo/icons8-css3-48.png";
import bootstrap from "../../images/slillLogo/icons8-bootstrap-48.png";
import javascript from "../../images/slillLogo/icons8-javascript-48.png";
import react from "../../images/slillLogo/icons8-react-native-48.png";
import firebase from "../../images/slillLogo/icons8-firebase-144.png";
import mongodb from "../../images/slillLogo/icons8-mongodb-144.png";
import heroku from "../../images/slillLogo/icons8-heroku-144.png";
import nodejs from "../../images/slillLogo/icons8-nodejs-144.png";
import github from "../../images/slillLogo/icons8-github-150.png";

const Skills = () => {
  return (
    <div id="skill" className="bg-green-900">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl md:text-6xl text-white p-8 font-extrabold">
          {" "}
          Skills{" "}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 p-2 gap-4 ">
          <div className="rounded-lg p-1 bg-white shadow-md">
            <img src={html} width="100%" alt="logo" />
            <h4 className="text-center font-bold text-2xl">HTML</h4>
          </div>

          <div className="rounded-lg p-1 bg-white shadow-md">
            <img src={css} width="100%" alt="logo" />
            <h4 className="text-center font-bold text-2xl">HTML</h4>
          </div>

          <div className="rounded-lg p-1 bg-white shadow-md">
            <img src={bootstrap} width="100%" alt="logo" />
            <h4 className="text-center font-bold text-2xl">CSS</h4>
          </div>

          <div className="rounded-lg p-1 bg-white shadow-md">
            <img src={javascript} width="100%" alt="logo" />
            <h4 className="text-center font-bold text-2xl">JAVASCRIPT</h4>
          </div>

          <div className="rounded-lg p-1 bg-white shadow-md">
            <img src={react} width="100%" alt="logo" />
            <h4 className="text-center font-bold text-2xl">REACT</h4>
          </div>

          <div className="rounded-lg p-1 bg-white shadow-md">
            <img src={firebase} width="100%" alt="logo" />
            <h4 className="text-center font-bold text-2xl">FIREBASE</h4>
          </div>

          <div className="rounded-lg p-1 bg-white shadow-md">
            <img src={nodejs} width="100%" alt="logo" />
            <h4 className="text-center font-bold text-2xl">NODEJS</h4>
          </div>

          <div className="rounded-lg p-1 bg-white shadow-md">
            <img src={mongodb} width="100%" alt="logo" />
            <h4 className="text-center font-bold text-2xl">MONGODB</h4>
          </div>

          <div className="rounded-lg p-1 bg-white shadow-md">
            <img src={github} width="100%" alt="logo" />
            <h4 className="text-center font-bold text-2xl">GITHUB</h4>
          </div>

          <div className="rounded-lg p-1 bg-white shadow-md">
            <img src={heroku} width="100%" alt="logo" />
            <h4 className="text-center font-bold text-2xl">HEROKU</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
