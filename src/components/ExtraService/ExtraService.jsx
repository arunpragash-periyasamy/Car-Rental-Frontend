import { Divider } from "antd";
import { FaRadio, FaTowerBroadcast } from "react-icons/fa6";
import { GiWaterDrop } from "react-icons/gi";
import { IoIosWifi } from "react-icons/io";
import { MdDevicesOther, MdOutlineLibraryAddCheck } from "react-icons/md";
import { PiSeatbeltBold } from "react-icons/pi";
import { VscLocation } from "react-icons/vsc";

const ExtraService = () => {
    return (
      <div className=" bg-white rounded p-2 my-5">
        <div className="text-sm">Extra Services</div>
        <div className="divide-y flex items-center h-[1px] my-2 bg-slate-200">
          <div className="bg-orange-400 rounded-2xl w-5 h-1 mr-2"></div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
          <div className="flex gap-1 items-center text-[0.6rem]">
            <div className="border-solid border-[1px]  text-teal-700 rounded p-1 border-slate-300 ">
              <VscLocation />
            </div>
            <div className="">GPS Navigation Systems</div>
          </div>
          <div className="flex gap-1 items-center text-[0.6rem]">
            <div className="border-solid border-[1px]  text-teal-700 rounded p-1 border-slate-300 ">
              <IoIosWifi />
            </div>
            <div>Wifi</div>
          </div>
          <div className="flex gap-1 items-center text-[0.6rem]">
            <div className="border-solid border-[1px]  text-teal-700 rounded p-1 border-slate-300 ">
              <PiSeatbeltBold />
            </div>
            <div className="">Child Safety</div>
          </div>
          <div className="flex gap-1 items-center text-[0.6rem]">
            <div className="border-solid border-[1px]  text-teal-700 rounded p-1 border-slate-300 ">
              <GiWaterDrop />
            </div>
            <div>Wifi</div>
          </div>
          <div className="flex gap-1 items-center text-[0.6rem]">
            <div className="border-solid border-[1px]  text-teal-700 rounded p-1 border-slate-300 ">
              <FaTowerBroadcast />
            </div>
            <div className="">Roadside Assistance</div>
          </div>
          <div className="flex gap-1 items-center text-[0.6rem]">
            <div className="border-solid border-[1px]  text-teal-700 rounded p-1 border-slate-300 ">
              <FaRadio />
            </div>
            <div>Satelite Radio</div>
          </div>
          <div className="flex gap-1 items-center text-[0.6rem]">
            <div className="border-solid border-[1px]  text-teal-700 rounded p-1 border-slate-300 ">
              <MdDevicesOther />
            </div>
            <div className="">Additional Accessories</div>
          </div>
          <div className="flex gap-1 items-center text-[0.6rem]">
            <div className="border-solid border-[1px]  text-teal-700 rounded p-1 border-slate-300 ">
              <MdOutlineLibraryAddCheck />
            </div>
            <div className="">Easy check in - out</div>
          </div>
        </div>
      </div>
    );
}

export default ExtraService;