import ProgressBar from "../ProgressBar/ProgressBar";
import CarDetail from "../CarDetail/CarDetail";
import BookingType from "../BookingType/BookingType";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { validateAndAdjustTimes } from "../../utils/Utility";
import { setLocationForm } from "../../utils/slices/formDataSlice";
import { Link, useNavigate } from "react-router-dom";
import Location from "../Location/Location";

const Checkout = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.locationForm);
  
  const id = useSelector((state) => state.form.carId);
  console.log(formData);
  useEffect(() => {
    form.setFieldValue("deliveryLocation", formData.deliveryLocation);
    form.setFieldValue("returnLocation", formData.returnLocation);
    form.setFieldValue("pickupDate", formData.pickupDate);
    form.setFieldValue("returnDate", formData.returnDate);
    form.setFieldValue("pickupTime", formData.pickupTime);
    form.setFieldValue("returnTime", formData.returnTime);
  }, []);

  const onFinish = (values) => {
    if (validateAndAdjustTimes(form)) {
      dispatch(setLocationForm(values));
      navigate("/billing");
    }
  };
  return (
    <div className="mx-auto pb-9 max-w-5xl">
      <Form onFinish={onFinish} form={form}>
        <ProgressBar />
        <div className="lg:flex flex-col lg:flex-row space-y-4 lg:gap-16">
          <CarDetail />
          <div className=" md:min-w-[42rem] ">
            <Location />
            <BookingType />
            <div className="flex justify-end my-4 gap-2">
              <Link to={`/car/${id}`}>
                <div className="bg-black text-white text-[0.85rem] font-bold rounded p-2 hover:bg-white hover:text-black border border-black">
                  Back to Car Details
                </div>
              </Link>
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
