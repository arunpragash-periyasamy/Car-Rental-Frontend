
import {  Divider, Form, Input } from "antd";
import UploadImage from "../Images/Images";


const BillingForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className="lg:min-w-[42rem]">
          <Form onFinish={onFinish}>
      <div className=" bg-white p-5 ld:p-3 rounded">
        <div className="font-bold text-sm">Billing Information</div>
        <Divider />
        <div>
            <div className="grid lg:grid-cols-2 lg:gap-3">
              <div>
                <div className="text-[0.7rem] font-bold">
                  First Name
                  <span className="text-red-500 required-asterisk"> *</span>
                </div>
                <Form.Item name="firstName">
                  <Input className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400" />
                </Form.Item>
              </div>
              <div>
                <div className="text-[0.7rem] font-bold">
                  Last Name{" "}
                  <span className="text-red-500 required-asterisk"> *</span>
                </div>
                <Form.Item name="lastName">
                  <Input className="p-[0.3rem] text-xs bg-gray-50 hover:border-orange-400 focus:border-orange-400" />
                </Form.Item>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-3">
              <div>
                <div className="text-[0.7rem] font-bold">
                  No Of Persons{" "}
                  <span className="text-red-500 required-asterisk"> *</span>
                </div>
                <Form.Item name="noOfPersons">
                  <Input className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400" />
                </Form.Item>
              </div>
              <div>
                <div className="text-[0.7rem] font-bold">Company Name</div>
                <Form.Item name="companyName">
                  <Input className="p-[0.3rem] text-xs bg-gray-50 hover:border-orange-400 focus:border-orange-400" />
                </Form.Item>
              </div>
            </div>
            <div>
              <Form.Item name="street" className="">
                <div className="text-[0.7rem] font-bold mb-1">
                  Street{" "}
                  <span className="text-red-500 required-asterisk"> *</span>
                </div>
                <Input className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400" />
              </Form.Item>
            </div>
            <div className="grid lg:grid-cols-3 lg:gap-3">
              <div>
                <div className="text-[0.7rem] font-bold">
                  Country{" "}
                  <span className="text-red-500 required-asterisk"> *</span>
                </div>
                <Form.Item name="country">
                  <Input className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400" />
                </Form.Item>
              </div>
              <div>
                <div className="text-[0.7rem] font-bold">
                  City{" "}
                  <span className="text-red-500 required-asterisk"> *</span>
                </div>
                <Form.Item name="city">
                  <Input className="p-[0.3rem] text-xs bg-gray-50 hover:border-orange-400 focus:border-orange-400" />
                </Form.Item>
              </div>
              <div>
                <div className="text-[0.7rem] font-bold">
                  Pin Code{" "}
                  <span className="text-red-500 required-asterisk"> *</span>
                </div>
                <Form.Item name="pinCode">
                  <Input className="p-[0.3rem] text-xs bg-gray-50 hover:border-orange-400 focus:border-orange-400" />
                </Form.Item>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-3">
              <div>
                <div className="text-[0.7rem] font-bold">
                  Email{" "}
                  <span className="text-red-500 required-asterisk"> *</span>
                </div>
                <Form.Item name="email">
                  <Input className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400" />
                </Form.Item>
              </div>
              <div>
                <div className="text-[0.7rem] font-bold">
                  Mobile Number{" "}
                  <span className="text-red-500 required-asterisk"> *</span>
                </div>
                <Form.Item name="mobileNumber">
                  <Input className="p-[0.3rem] text-xs bg-gray-50 hover:border-orange-400 focus:border-orange-400" />
                </Form.Item>
              </div>
            </div>
            <div>
              <Form.Item name="additionalInformation" className="">
                <div className="text-[0.7rem] font-bold mb-1">
                  Additional Information{" "}
                </div>
                <Input className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400" />
              </Form.Item>
            </div>
            <div>
              <Form.Item name="drivingLicenceNumber" className="">
                <div className="text-[0.7rem] font-bold mb-1">
                  Driving Licence Number{" "}
                  <span className="text-red-500 required-asterisk"> *</span>
                </div>
                <Input className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400" />
              </Form.Item>
            </div>
            <div>
              <Form.Item name="drivingLicenceImage" className="">
                <div className="text-[0.7rem] font-bold mb-1">
                  Driving Licence Image{" "}
                  <span className="text-red-500 required-asterisk"> *</span>
                </div>
                <UploadImage size="1" />
              </Form.Item>
            </div>
            <button type="submit">Submit button</button>b
        </div>
      </div>
      <div className="flex justify-end my-4 gap-2">
        <button className="bg-black text-white text-[0.85rem] font-bold rounded p-2 hover:bg-white hover:text-black border border-black">
          Back to Car Checkout
        </button>
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

export default BillingForm;
