import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdSpeedometer } from "react-icons/io";
import { MdOutlineSevereCold } from "react-icons/md";
import { PiSeatBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { firstCaps } from "../../utils/Utility";
import { BACKEND_URL } from "../../utils/constants";

const Listing = ({ car }) => (
  <Link to={`/add-car/${car.id}`}>
    <div className="w-11/12 bg-white p-3 m-6 rounded flex flex-col lg:flex-row items-center justify-between space-x-4 cursor-pointer hover:shadow-orange-300 hover:shadow-lg">
      <div>
        <img className="w-full lg:w-48 rounded" src={BACKEND_URL+car?.images[0]} alt="" />
      </div>
      <div>
        <h1 className="font-bold text-3xl">{car.carName}</h1>
        <p>model : {car.modelName}</p>
      </div>
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

export default Listing;
