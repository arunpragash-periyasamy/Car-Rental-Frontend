import { Divider, Form, Input } from "antd";
import { useEffect } from "react";
import { FaCar } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Location = () => {

  
  return (
    <div className="bg-white md:min-w-[42rem] p-6 rounded">
       
          <div className="flex gap-3 items-center">
            <div className="bg-orange-500 text-white text-sm p-1 rounded">
              <FaCar/>
            </div>
            <div className="font-bold text-sm">Location</div>
          </div>
          <Divider />
          <div className="flex my-3 justify-between">
            <div className="min-w-full">
              <p className="font-bold text-[0.7rem]">Delivery Location</p>
              <div className="flex gap-2 items-center">
                <Form.Item name="deliveryLocation" className="m-0 md:w-3/4">
                  <Input
                    placeholder="Add Location"
                    className="p-1 hover:border-orange-400 bg-gray-100 focus:border-orange-400"
                  />
                </Form.Item>
                <button className="bg-black text-white flex items-center gap-0.5 md:text-xs rounded p-1">
                  <MdMyLocation /> Current Location
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="min-w-full">
              <p className="font-bold  text-[0.7rem]">Return Location</p>
              <div className="flex gap-2 items-center">
                <Form.Item name="returnLocation" className="m-0 md:w-3/4">
                  <Input
                    placeholder="Add Location"
                    className="p-1 hover:border-orange-400 bg-gray-100 focus:border-orange-400"
                  />
                </Form.Item>
                <button className="bg-black text-white flex items-center gap-0.5 md:text-xs rounded p-1">
                  <MdMyLocation /> Current Location
                </button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Location;
