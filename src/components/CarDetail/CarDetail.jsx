import { Divider } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { axiosInstance } from "../../utils/axios";
import { BACKEND_URL } from "../../utils/constants";
import Image from "/car-right.png";
import { Link } from "react-router-dom";

const CarDetail = () => {

  const [car, setCar] = useState({});
  const [subtotal, setSubtotal] = useState(0);
  const id = useSelector(state => state.form.carId);
  const getCarDetail = async () => {
    const response = await axiosInstance(`cars/ ${id}`);
    setCar(response.data);
    
  };

  const getSubtotal = () => {
    let sum =
      car?.amount + car?.tax + car?.refundableDeposit + car?.convenienceFee + car?.tripProtectionFee + car?.doorDeliveryPrice;
   return sum;
  };

  useEffect(() => {
    setSubtotal(getSubtotal());
  },[car])

  useEffect(() => {
    getCarDetail();
  }, []);
  return (
    <div className="min-w-48 lg:max-w-80 bg-white p-2 rounded">
      <div className="font-bold text-sm">Car Details</div>
      <Divider />
      <div className="flex gap-4 items-center">
        <img
          src={
            car?.images?.length > 0
              ? `${BACKEND_URL+car.images[0]}`
              : Image
          }
          alt="Car Image"
          className="h-15 w-20 rounded"
        />
        <div className="flex flex-col gap-3 cursor-pointer">
          <div>
            <h1 className="font-bold">{car.carName}</h1>
            <p className="text-xs">{"Miami St, Destin, FL 32550, USA"}</p>
          </div>
          <div>
            <Link to={`/car/${id}`}>
              <p className="text-teal-500 text-xs">View Car Details</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Pricing */}
      <div className="text-[0.70rem] my-6 border rounded p-1 border-solid">
        <div className="flex justify-between items-center">
          <div>
            <p>
              Rental Charges Rate <span className="text-teal-400">(1 day)</span>
            </p>
            <p className="text-red-500">(This doesn't contains fuel)</p>
          </div>
          <p> ₹{car.amount?car.amount:0}</p>
        </div>
        <Divider className="my-2" />
        <div className="flex justify-between items-center">
          <div>
            <p>Door Delivery & Pickup</p>
          </div>
          <p> ₹{car.doorDeliveryPrice?car.doorDeliveryPrice:0}</p>
        </div>
        <Divider className="my-2" />
        <div className="flex justify-between items-center">
          <div>
            <p>Trip Protection Fees</p>
          </div>
          <p> ₹{car.tripProtectionFee ? car.tripProtectionFee:0}</p>
        </div>
        <Divider className="my-2" />
        <div className="flex justify-between items-center">
          <div>
            <p>Convenience Fees</p>
          </div>
          <p> ₹{car.convenienceFee ? car.convenienceFee : 0}</p>
        </div>
        <Divider className="my-2" />
        <div className="flex justify-between items-center">
          <div>
            <p>Tax</p>
          </div>
          <p> ₹{car.tax?car.tax:0}</p>
        </div>
        <Divider className="my-2" />
        <div className="flex justify-between items-center">
          <div>
            <p>Refundable Deposit</p>
          </div>
          <p> ₹{car.refundableDeposit ? car.refundableDeposit :0 }</p>
        </div>
        <Divider className="my-2" />
        <div className="flex justify-between items-center font-bold">
          <div>
            <p>Subtotal</p>
          </div>
          <p> ₹ { subtotal}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
