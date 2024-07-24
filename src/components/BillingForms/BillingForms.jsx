
import {   Form, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setBillingForm } from "../../utils/slices/formDataSlice";
import BillingForm from "../BillingForm/BillingForm";
import CardDetailsForm from "../CardDetailsForm/CardDetailsForm";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { dateToString } from "../../utils/Utility";
import { axiosInstance } from "../../utils/axios";
import { toast } from "react-toastify";
import { clearUser } from "../../utils/slices/userSlice";

const BillingForms = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const forms = useSelector(state => state.form);
 
  const onFinish = async (values) => {
    dispatch(setBillingForm(values));
    try {
      const data = { billingForm: values, locationForm: forms.locationForm, carId: forms.carId};
      
      await axiosInstance.post("/bookings", data);
      toast("Your oder placed successfully");
      form.resetFields();
      navigate("/");
    } catch (err) {
      if (err.response.status === 403) {
        toast("You need to login to place order");
        dispatch(clearUser());
        return;
      }
   
      message.error("Billing failed");
    }
  };

  useEffect(() => {
  },[])

  return (
    <div className="lg:min-w-[42rem]">
      <Form onFinish={onFinish} form={form} action="#">
        <BillingForm form={form} />
        <CardDetailsForm form={form } />
        <div className="flex justify-end my-4 gap-2">
          <Link to="/checkout">
            <div className="bg-black text-white text-[0.85rem] font-bold rounded p-2 hover:bg-white hover:text-black border border-black">
              Back to Car Checkout
            </div>
          </Link>
          <button
            type="submit"
            className="bg-orange-400 text-white text-[0.85rem] font-bold rounded p-2 hover:bg-white hover:text-orange-400 border border-orange-400"
          >
            Continue Booking
          </button>
        </div>
      </Form>
    </div>
  );
};

export default BillingForms;
