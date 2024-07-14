import { FaEye, FaStar } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { MdOutlineLocationOn, MdOutlineNoteAlt } from "react-icons/md";

const CarHeader = () => {
  return (
    <div className="min-h-36 p-3 bg-white text-center">
      <div className="md:flex items-center justify-between md:mx-3 flex-wrap">
        <div>
          <div className="flex">
            <div className="flex text-xs items-center m-1">
              <IoCarSport />
              <p className="px-2">Sedan</p>
            </div>
            <span className="bg-teal-700 max-h-4 text-xs text-white rounded m-1">
              2023
            </span>
            <div className="flex text-xs text-orange-400 items-center m-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="text-3xl font-bold">Chevorlet Camaro</div>
          <div className="md:flex">
            <div className="text-xs flex items-center m-1">
              <MdOutlineLocationOn />
              <p className="ml-1">Location: Salem, Tamilnadu, India</p>
            </div>
            <div className="text-xs flex items-center m-1">
              <FaEye />
              <p className="ml-1">Views : 240</p>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-teal-700 flex items-center px-2 py-1 mt-2 rounded text-xs text-white">
            <MdOutlineNoteAlt />
            Total booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarHeader;
