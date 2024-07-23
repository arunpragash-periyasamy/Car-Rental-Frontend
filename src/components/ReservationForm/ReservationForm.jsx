import React, { useState } from "react";
import { Form, Input, DatePicker, TimePicker, Checkbox, message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setCarId, setLocationForm } from "../../utils/slices/formDataSlice";
import moment from "moment";
import { dateToString, disabledDate, validateAndAdjustTimes } from "../../utils/Utility";

const ReservationForm = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [sameLocation, setSameLocation] = useState(false);
  const navigate = useNavigate();

  const handleSameLocation = () => {
    if (!sameLocation) {
      console.log(form.getFieldValue("sameLocation"));
      form.setFieldsValue({
        returnLocation: form.getFieldValue("deliveryLocation"),
      });
      console.log("Value changed");
    }
    setSameLocation(!sameLocation);
  };

  const onFinish = (values) => {
    if (validateAndAdjustTimes(form)) {
      console.log(values);
      dispatch(setLocationForm(values));
      dispatch(setCarId(id));
      navigate("/checkout");
    }
  };

  return (
    <div>
      <div>Check Availability</div>
      <div className="divide-y flex items-center h-[1px] my-2 bg-slate-200">
        <div className="bg-orange-400 rounded-2xl w-5 h-1 mr-2"></div>
      </div>
      <div>
        <Form
          form={form}
          layout="vertical"
          name="check_availability"
          onFinish={onFinish}
        >
          <div className="space-y-1 my-1">
            <p className="font-bold">Delivery Location</p>
            <div>
              <Form.Item
                name="deliveryLocation"
                rules={[
                  {
                    required: true,
                    message: "Please input the delivery location!",
                  },
                ]}
              >
                <Input
                  className="bg-slate-50 hover:border-orange-400 focus:border-orange-400"
                  placeholder="45, 4th Avenue Mark Street USA"
                />
              </Form.Item>
            </div>
          </div>
          <div className="my-1">
            <Form.Item className="flex items-center">
              <Checkbox
                className="bg-slate-50 max-w-1 mr-2"
                onChange={handleSameLocation}
              />{" "}
              <span className="ml-2">Return to the same location</span>{" "}
            </Form.Item>
          </div>
          <div className="space-y-1 my-1">
            <p className="font-bold">Return Location</p>
            <div>
              <Form.Item
                name="returnLocation"
                rules={[
                  {
                    required: true,
                    message: "Please input the delivery location!",
                  },
                ]}
              >
                <Input
                  className="bg-slate-50 hover:border-orange-400 focus:border-orange-400"
                  placeholder="45, 4th Avenue Mark Street USA"
                />
              </Form.Item>
            </div>
          </div>
          <div className="space-y-1 my-1">
            <p className="font-bold">Pickup Date</p>
            <div className="">
              <Form.Item
                name="pickupDate"
                rules={[
                  {
                    required: true,
                    message: "Please input the delivery location!",
                  },
                ]}
              >
                <DatePicker disabledDate={disabledDate} showTime className="w-full hover:border-orange-400 focus:border-orange-400" />
              </Form.Item>
            </div>
          </div>
          <div className="space-y-1 my-1">
            <p className="font-bold">Return Date</p>
            <div className="">
              <Form.Item
                name="returnDate"
                rules={[
                  {
                    required: true,
                    message: "Please input the delivery location!",
                  },
                ]}
              >
                <DatePicker className="w-full hover:border-orange-400 focus:border-orange-400" showTime disabledDate={disabledDate}/>
              </Form.Item>
            </div>
            <div className="w-full">
              <button className="w-full bg-orange-400 border-solid border-[1px] delay-75 transition ease-in-out font-bold text-white p-1 rounded-lg hover:bg-white hover:text-orange-400 hover:border-orange-400">
                <p className="text-xl">Book</p>
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ReservationForm;
