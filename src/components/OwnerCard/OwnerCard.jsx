import { Divider } from "antd";
import { FaStar } from "react-icons/fa6";

const OwnerCard = () => {
  return (
    <div>
      <div>Listing Owner Details</div>
      <div className="divide-y flex items-center h-[1px] my-2 bg-slate-200">
        <div className="bg-orange-400 rounded-2xl w-5 h-1 mr-2"></div>
      </div>
      <div className="w-full">
        {/* user Card */}
        <div className="bg-gray-200 rounded flex p-2">
          <div>
            <img
              className="rounded-full w-11 h-11"
              src="https://dreamsrent.dreamstechnologies.com/html/assets/img/profiles/avatar-07.jpg"
              alt="profile"
            />
          </div>
          <div className="mx-2 text-sm items-center">
            <div>Brooklyn Cars</div>
            <div className="flex gap-2 text-xs">
              <div className="flex text-orange-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>(5.0)</div>
            </div>
          </div>
        </div>
        <div className="text-xs mt-3">
          <div className="flex justify-between">
            <div>Email</div>
            <div className="text-gray-500">test@gmail.com</div>
          </div>
          <Divider className="m-2" />
          <div className="flex justify-between">
            <div>Phone Number</div>
            <div className="text-gray-500">test@gmail.com</div>
          </div>
          <Divider className="m-2" />
          <div className="flex justify-between">
            <div>Location</div>
            <div className="text-gray-500">Salem, Tamilnadu, India</div>
          </div>
          <Divider className="m-2" />
              </div>
              
              <div>
                  <button className="w-full bg-black text-white text-xs font-bold p-1 rounded hover:bg-white hover:text-black transition-all ease-in-out border-solid border-[1px] hover:border-black">Message to Owner</button>
              </div>
      </div>
    </div>
  );
};

export default OwnerCard;
