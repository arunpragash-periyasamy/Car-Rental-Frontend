import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Button,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const AddCarForm = () => {
  const onFinish = (values) => {
    console.log("Received values: ", values);
  };

  return (
    <div className="p-8">
      <Form
        name="add_car"
        onFinish={onFinish}
        layout="vertical"
        className="space-y-4"
      >
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Car Details</h2>
          <Form.Item
            name="user_id"
            label="User ID"
            rules={[{ required: true, message: "Please input user ID!" }]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            name="model_id"
            label="Model ID"
            rules={[{ required: true, message: "Please input model ID!" }]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            name="name"
            label="Car Name"
            rules={[{ required: true, message: "Please input car name!" }]}
          >
            <Input className="w-full" />
          </Form.Item>
          <Form.Item
            name="vin"
            label="VIN"
            rules={[{ required: true, message: "Please input VIN!" }]}
          >
            <Input className="w-full" />
          </Form.Item>
          <Form.Item
            name="year"
            label="Year"
            rules={[{ required: true, message: "Please input year!" }]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            name="place_id"
            label="Place ID"
            rules={[{ required: true, message: "Please input place ID!" }]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
        </div>

        {/* Car Model Details */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Car Model Details</h2>
          <Form.Item
            name="brand_name"
            label="Brand Name"
            rules={[{ required: true, message: "Please input brand name!" }]}
          >
            <Input className="w-full" />
          </Form.Item>
          <Form.Item
            name="model_name"
            label="Model Name"
            rules={[{ required: true, message: "Please input model name!" }]}
          >
            <Input className="w-full" />
          </Form.Item>
          <Form.Item
            name="body"
            label="Body"
            rules={[{ required: true, message: "Please input body!" }]}
          >
            <Input className="w-full" />
          </Form.Item>
          <Form.Item
            name="seats"
            label="Seats"
            rules={[
              { required: true, message: "Please input number of seats!" },
            ]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
        </div>

        {/* Car Specs */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Car Specs</h2>
          <Form.Item
            name="gear_type"
            label="Gear Type"
            rules={[{ required: true, message: "Please input gear type!" }]}
          >
            <Input className="w-full" />
          </Form.Item>
          <Form.Item
            name="mileage"
            label="Mileage"
            rules={[{ required: true, message: "Please input mileage!" }]}
          >
            <Input className="w-full" />
          </Form.Item>
          <Form.Item
            name="fuel_type"
            label="Fuel Type"
            rules={[{ required: true, message: "Please input fuel type!" }]}
          >
            <Input className="w-full" />
          </Form.Item>
          <Form.Item
            name="drivetrain"
            label="Drivetrain"
            rules={[{ required: true, message: "Please input drivetrain!" }]}
          >
            <Input className="w-full" />
          </Form.Item>
          <Form.Item
            name="engine_power"
            label="Engine Power"
            rules={[{ required: true, message: "Please input engine power!" }]}
          >
            <Input className="w-full" />
          </Form.Item>
          <Form.Item
            name="transmission"
            label="Transmission"
            rules={[{ required: true, message: "Please input transmission!" }]}
          >
            <Input className="w-full" />
          </Form.Item>
          <Form.Item
            name="brake"
            label="Brake"
            rules={[{ required: true, message: "Please input brake type!" }]}
          >
            <Input className="w-full" />
          </Form.Item>
        </div>

        {/* Car Price */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Car Price</h2>
          <Form.Item
            name="amount"
            label="Amount"
            rules={[{ required: true, message: "Please input amount!" }]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            name="price_type"
            label="Price Type"
            rules={[{ required: true, message: "Please input price type!" }]}
          >
            <Input className="w-full" />
          </Form.Item>
          <Form.Item
            name="door_delivery_and_pickup"
            label="Door Delivery and Pickup"
            rules={[
              {
                required: true,
                message: "Please input door delivery and pickup fee!",
              },
            ]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            name="trip_protection_fees"
            label="Trip Protection Fees"
            rules={[
              { required: true, message: "Please input trip protection fees!" },
            ]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            name="convenience_fees"
            label="Convenience Fees"
            rules={[
              { required: true, message: "Please input convenience fees!" },
            ]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            name="tax"
            label="Tax"
            rules={[{ required: true, message: "Please input tax!" }]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            name="refundable_deposit"
            label="Refundable Deposit"
            rules={[
              { required: true, message: "Please input refundable deposit!" },
            ]}
          >
            <InputNumber className="w-full" />
          </Form.Item>
          <Form.Item
            name="created_at"
            label="Created At"
            rules={[{ required: true, message: "Please select created date!" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
        </div>

        {/* Car Images */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Car Images</h2>
          <Form.Item
            name="car_images"
            label="Upload Car Images"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            rules={[{ required: true, message: "Please upload car images!" }]}
          >
            <Upload name="path" listType="picture" beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </div>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCarForm;
