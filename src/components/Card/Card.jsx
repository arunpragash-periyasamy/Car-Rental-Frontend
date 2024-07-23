import { Divider } from "antd";
import React from "react";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCalendarAlt, FaStar } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdSpeedometer } from "react-icons/io";
import { MdLocationPin, MdOutlineSevereCold } from "react-icons/md";
import { PiSeatBold } from "react-icons/pi";
import { firstCaps } from "../../utils/Utility";
import { BACKEND_URL } from "../../utils/constants";
import CarImage from "/car-right.png";
import { Link } from "react-router-dom";

const Card = ({car}) => {
  return (
    <Link to={`car/${car.id}`}>
      <div className="max-w-80 bg-white p-2 rounded m-5">
        <div className="rounded">
          <img
            className="rounded w-72 h-44"
            src={
              car.images.length > 0
                ? `${BACKEND_URL}/api/cars/images/${car.images[0]}`
                : CarImage
            }
            alt=""
          />
        </div>
        <div>{car.carName}</div>
        <div className="flex text-xs text-orange-400 justify-between">
          <div className="flex">
            <div className="flex mr-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div>(5.0)</div>
          </div>
          <div className="text-white text-[0.5rem] bg-teal-400 rounded px-1 flex items-center">
            <MdLocationPin />
            4.0km
          </div>
        </div>
        <Divider />
        <div className="grid text-xs text-slate-500 grid-cols-3 gap-1">
          <div className="flex items-center gap-1">
            <GiGearStickPattern />{" "}
            {car.gearType === "automatic" ? "Auto" : "Manual"}
          </div>
          <div className="flex items-center  gap-1">
            <IoMdSpeedometer /> {car.mileage} Km
          </div>
          <div className="flex items-center  gap-1">
            <BsFillFuelPumpFill /> {firstCaps(car.fuelType)}
          </div>
          <div className="flex items-center  gap-1">
            <MdOutlineSevereCold /> AC
          </div>
          <div className="flex items-center  gap-1">
            <FaCalendarAlt /> {car.year}
          </div>
          <div className="flex items-center  gap-1">
            <PiSeatBold /> {car.seats} Person
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
