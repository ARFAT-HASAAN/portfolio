import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MySwiper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto">
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3 className="bg-red-400 mx-3 border-4 border-green-500">1</h3>
        </div>
        <div>
          <h3 className="bg-red-400 mx-3 border-4 border-green-500">2</h3>
        </div>
        <div>
          <h3 className="bg-red-400 mx-3 border-4 border-green-500">3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default MySwiper;
