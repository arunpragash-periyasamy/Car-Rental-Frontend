import { FaRoute, FaWallet } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import { MdOutlineNoteAlt } from "react-icons/md";

const ProgressBar = () => {
  return (
    <div className="m-auto md:min-w-96  py-4 md:px-8 rounded my-10 space-y-2 flex flex-col md:flex-row items-center md:justify-between  min-h-10 bg-white">
      <div>
        <div className="font-bold">Reserve Your Car</div>
        <div className="text-[0.5rem] text-slate-500">
          Complete the following steps
        </div>
      </div>
      {/* Progress */}
      <div className="flex gap-3 md:gap-3 md:space-x-20">
        <div className="flex flex-col items-center gap-0.5">
          <div className="rounded-full text-white h-8 w-8 flex items-center justify-center bg-teal-600">
            <FaRoute className=" h-3 w-3" />
          </div>
          <div className="text-[0.5rem] text-gray-600">Location and Time</div>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <div className="rounded-full text-white h-8 w-8 flex items-center justify-center bg-black">
            <MdOutlineNoteAlt className="h-3 w-3" />
          </div>
          <div className="text-[0.5rem] text-gray-600">Detail</div>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <div className="rounded-full text-white h-8 w-8 flex items-center justify-center bg-black">
            <FaWallet className="h-3 w-3" />
          </div>
          <div className="text-[0.5rem] text-gray-600">Checkout</div>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <div className="rounded-full text-white h-8 w-8 flex items-center justify-center bg-black">
            <GrCompliance className="h-3 w-3" />
          </div>
          <div className="text-[0.5rem] text-gray-600">Booked</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
