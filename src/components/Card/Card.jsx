import { Divider } from "antd";
import React from "react";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCalendarAlt, FaStar } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdSpeedometer } from "react-icons/io";
import { MdLocationPin, MdOutlineSevereCold } from "react-icons/md";
import { PiSeatBold } from "react-icons/pi";
import { firstCaps } from "../../utils/Utility";
import { BACKEND_URL } from "../../utils/constants.";
import CarImage from "/car-right.png";
import { Link } from "react-router-dom";
// const Card = () => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg">
//       <img
//         className="w-full"
//         src="https://dreamsrent.dreamstechnologies.com/html/assets/img/cars/car-02.jpg"
//         alt="Kia Soul 2016"
//       />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">Kia Soul 2016</div>
//         <div className="flex items-center mb-2">
//           <span className="text-yellow-500">★★★★☆</span>
//           <span className="ml-2 text-gray-600">(4.0) 170 Reviews</span>
//         </div>
//         <div className="flex items-center justify-between mb-4">
//           <span className="flex items-center">
//             <svg
//               className="h-5 w-5 text-green-500"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 23C5.935 23 1 18.065 1 12S5.935 1 12 1s11 4.935 11 11-4.935 11-11 11z" />
//               <path d="M18.293 7.707l-6.586 6.586L5.707 10.293 4.293 11.707l6.586 6.586 7.586-7.586z" />
//             </svg>
//             <span className="ml-2">4.0m</span>
//           </span>
//           <span className="text-red-500 text-xl font-bold">$80 / Day</span>
//         </div>
//         <div className="flex justify-between mb-4 text-gray-600">
//           <span className="flex items-center">
//             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 5h-3V3c0-1.104-.896-2-2-2H9c-1.104 0-2 .896-2 2v2H4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zM9 3h6v2H9V3zm10 18H5V7h14v14z" />
//             </svg>
//             <span className="ml-2">Auto</span>
//           </span>
//           <span className="flex items-center">
//             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M11 19h2v2h-2zM7 19h2v2H7zm8 0h2v2h-2zm2.1-11H4.9l1.3-4H16.8zm-4.1 9c0 1.104-.896 2-2 2s-2-.896-2-2H3V9h18v8h-7z" />
//             </svg>
//             <span className="ml-2">22 KM</span>
//           </span>
//           <span className="flex items-center">
//             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M6.5 3h-3A1.5 1.5 0 002 4.5v1A1.5 1.5 0 003.5 7h3A1.5 1.5 0 008 5.5v-1A1.5 1.5 0 006.5 3zm0 3h-3v-1h3v1zM20.5 3h-3A1.5 1.5 0 0016 4.5v1A1.5 1.5 0 0017.5 7h3A1.5 1.5 0 0022 5.5v-1A1.5 1.5 0 0020.5 3zm0 3h-3v-1h3v1zM12 4c-.554 0-1 .447-1 1v14c0 .554.446 1 1 1s1-.446 1-1V5c0-.553-.446-1-1-1zm8 1.5V7H4V5.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V17h16v2.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-14a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5z" />
//             </svg>
//             <span className="ml-2">Petrol</span>
//           </span>
//           <span className="flex items-center">
//             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M11.293 17.707l-1.414-1.414L11.586 14H4v-2h7.586l-1.707-2.293 1.414-1.414 4 4zM19.707 7.293l-1.414-1.414L15 8.172V4h-2v7h7V9h-4.172l2.879-2.707z" />
//             </svg>
//             <span className="ml-2">Diesel</span>
//           </span>
//           <span className="flex items-center">
//             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M7 4a1 1 0 011-1h8a1 1 0 011 1v2h2V4c0-1.105-.896-2-2-2H8C6.895 2 6 2.895 6 4v2h2V4zm11 4H6v14h12V8zm-6 10H8v-2h4v2zm0-4H8v-2h4v2zm6 4h-4v-2h4v2zm0-4h-4v-2h4v2z" />
//             </svg>
//             <span className="ml-2">5 Persons</span>
//           </span>
//         </div>
//         <div className="flex items-center justify-between mb-2">
//           <span className="text-gray-600">Belgium</span>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Rent Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

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
