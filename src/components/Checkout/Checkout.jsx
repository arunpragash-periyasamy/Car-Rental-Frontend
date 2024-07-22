import ProgressBar from "../ProgressBar/ProgressBar";
import CarDetail from "../CarDetail/CarDetail";
import LocationAndTime from "../LocationAndTime/LocationAndTime";
import BookingType from "../BookingType/BookingType";
import { Form } from "antd";

const Checkout = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  }
  return (
    <div className="mx-auto pb-9 max-w-5xl">
      <Form onFinish={onFinish}>
        <ProgressBar />
        <div className="lg:flex flex-col lg:flex-row space-y-4 lg:gap-16">
          <CarDetail />
          <div className=" md:min-w-[42rem] ">
            <LocationAndTime />
            <BookingType />
            <div className="flex justify-end my-4 gap-2">
              <button className="bg-black text-white text-[0.85rem] font-bold rounded p-2 hover:bg-white hover:text-black border border-black">
                Back to Car Details
              </button>
              <button
                type="submit"
                className="bg-orange-400 text-white text-[0.85rem] font-bold rounded p-2 hover:bg-white hover:text-orange-400 border border-orange-400"
              >
                Continue Booking
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Checkout;
