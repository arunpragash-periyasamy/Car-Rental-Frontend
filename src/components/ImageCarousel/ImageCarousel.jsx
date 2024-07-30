import React, { useRef, useState, useEffect } from "react";
import {BACKEND_URL} from "../../utils/constants"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const image = [
  "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const ImageCarousel = ({ images=image }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);

  useEffect(() => {
    setNav1(mainSlider.current);
    setNav2(thumbSlider.current);
  }, []);

  const settingsMain = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: nav2,
    ref: mainSlider,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const settingsThumbs = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: nav1,
    ref: thumbSlider,
  };

  return (
    <div className="mx-auto">
      <Slider {...settingsMain} className="relative mb-4">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={`${BACKEND_URL+image}`}
              alt={`Image ${index + 1}`}
              className="object-fill h-32 md:h-72 w-full rounded md:rounded-xl"
            />
          </div>
        ))}
      </Slider>
      <Slider {...settingsThumbs} className="relative">
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
              src={`${BACKEND_URL+image}`}
              alt={`Thumbnail ${index + 1}`}
              className="object-fill w-10 h-5 md:w-44 md:h-20 rounded md:rounded-xl cursor-pointer"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-1 cursor-pointer hover:bg-opacity-75"
      onClick={onClick}
    >
      <svg
        className="w-3 h-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="z-10 absolute top-1/2 left-1 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-1 cursor-pointer hover:bg-opacity-75"
      onClick={onClick}
    >
      <svg
        className="w-3 h-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

export default ImageCarousel;
