import React from "react";

const Footer = () => {
  return (
    <div className="bg-green-900">
      <div className="flex justify-center p-4">
        <a href="https://www.linkedin.com/in/arfat03/">
          <i className="fab fa-linkedin-in text-2xl text-white p-1 mx-4"></i>{" "}
        </a>
        <a href="https://github.com/ARFAT-HASAAN">
          {" "}
          <i className="fab fa-github text-2xl p-1 text-white mx-4"></i>{" "}
        </a>
        <a href="https://web.facebook.com/hmdarfat.hasan.96/">
          {" "}
          <i className="fab fa-facebook text-2xl p-1 text-white mx-1"></i>{" "}
        </a>
      </div>
      <div className="text-white font-bold text-xl text-center  p-3">
        <p> Copyright © 2021 Portfollio</p>
      </div>
    </div>
  );
};

export default Footer;
