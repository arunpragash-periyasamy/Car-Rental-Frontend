import { Divider } from "antd";

const CarDetail = () => {
  return (
    <div className="min-w-48 lg:max-w-80 bg-white p-2 rounded">
      <div className="font-bold text-sm">Car Details</div>
      <Divider />
      <div className="flex gap-4 items-center">
        <img
          src="https://dreamsrent.dreamstechnologies.com/html/assets/img/car-list-4.jpg"
          alt="Car Image"
          className="h-20 w-20 rounded"
        />
        <div className="flex flex-col gap-3 cursor-pointer">
          <div>
            <h1 className="font-bold">Chevrolet Camaro</h1>
            <p className="text-xs">Miami St, Destin, FL 32550, USA</p>
          </div>
          <div>
            <p className="text-teal-500 text-xs">View Car Details</p>
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
          <p>$100</p>
        </div>
        <Divider className="my-2" />
        <div className="flex justify-between items-center">
          <div>
            <p>Door Delivery & Pickup</p>
          </div>
          <p>$60</p>
        </div>
        <Divider className="my-2" />
        <div className="flex justify-between items-center">
          <div>
            <p>Trip Protection Fees</p>
          </div>
          <p>$25</p>
        </div>
        <Divider className="my-2" />
        <div className="flex justify-between items-center">
          <div>
            <p>Convenience Fees</p>
          </div>
          <p>$2</p>
        </div>
        <Divider className="my-2" />
        <div className="flex justify-between items-center">
          <div>
            <p>Tax</p>
          </div>
          <p>$2</p>
        </div>
        <Divider className="my-2" />
        <div className="flex justify-between items-center">
          <div>
            <p>Refundable Deposit</p>
          </div>
          <p>$1200</p>
        </div>
        <Divider className="my-2" />
        <div className="flex justify-between items-center font-bold">
          <div>
            <p>Subtotal</p>
          </div>
          <p>$1640</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
