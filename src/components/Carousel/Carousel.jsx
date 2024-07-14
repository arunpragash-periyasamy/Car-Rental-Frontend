import React from "react";
import { Carousel as Caro } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Carousel = ({ images }) => (
  <div>
    <Caro arrows infinite autoplay>
      {images.map((image) => (
        <div key={image.id}>
          <img className="w-full h-full rounded-lg" src={image.src} alt="" />
        </div>
      ))}
    </Caro>
    <div className="flex flex-wrap mt-4 space-x-2 ">
      {images.map((car) => (
        <img
          key={car.id}
          className="max-w-16 h-16 rounded-lg cursor-pointer"
          src={car.src}
          alt={`Car ${car.id}`}
        />
      ))}
    </div>
  </div>
);
export default Carousel;
