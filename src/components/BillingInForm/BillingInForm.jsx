import React from "react";
import { Form, Input, Button, Select, Upload, Checkbox } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const BillingInfoForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Billing Info</h2>
        <Button type="primary" className="flex items-center space-x-2">
          <span className="icon-user" /> Sign In
        </Button>
      </div>
      <Form
        form={form}
        layout="vertical"
        name="billing_info"
        onFinish={onFinish}
      >
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please enter your first name!" },
            ]}
          >
            <Input placeholder="Enter First Name" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: "Please enter your last name!" },
            ]}
          >
            <Input placeholder="Enter Last Name" />
          </Form.Item>
          <Form.Item
            label="No of Persons"
            name="noOfPersons"
            rules={[
              {
                required: true,
                message: "Please select the number of persons!",
              },
            ]}
          >
            <Select placeholder="Select number of persons">
              <Option value="2Adults1Child">2 Adults, 1 Child</Option>
              <Option value="2Adults2Children">2 Adults, 2 Children</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Company" name="company">
            <Input placeholder="Enter Company Name" />
          </Form.Item>
          <Form.Item
            label="Street Address"
            name="streetAddress"
            rules={[
              { required: true, message: "Please enter your street address!" },
            ]}
          >
            <Input placeholder="Enter Address" />
          </Form.Item>
          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true, message: "Please select your country!" }]}
          >
            <Select placeholder="Country">
              <Option value="USA">USA</Option>
              <Option value="Canada">Canada</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Enter City"
            name="city"
            rules={[{ required: true, message: "Please enter your city!" }]}
          >
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item
            label="Pincode"
            name="pincode"
            rules={[{ required: true, message: "Please enter your pincode!" }]}
          >
            <Input placeholder="Enter Pincode" />
          </Form.Item>
          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email address!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input placeholder="Enter Email" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
          >
            <Input placeholder="Enter Phone Number" />
          </Form.Item>
        </div>
        <Form.Item label="Additional Information" name="additionalInfo">
          <Input.TextArea placeholder="Enter Additional Information" rows={4} />
        </Form.Item>
        <Form.Item
          label="Driving Licence Number"
          name="drivingLicenceNumber"
          rules={[
            {
              required: true,
              message: "Please enter your driving licence number!",
            },
          ]}
        >
          <Input placeholder="Enter Driving Licence Number" />
        </Form.Item>
        <Form.Item
          label="Upload Document"
          name="uploadDocument"
          rules={[{ required: true, message: "Please upload a document!" }]}
        >
          <Upload name="document" listType="picture" beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="termsAndConditions"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("You must accept the terms and conditions"),
            },
          ]}
        >
          <Checkbox>I have Read and Accept Terms & Conditions*</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BillingInfoForm;
