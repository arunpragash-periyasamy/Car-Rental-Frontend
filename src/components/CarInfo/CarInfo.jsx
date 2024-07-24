import { Divider, Form, Input, Select } from "antd";
import { lazy } from "react";
import {
  firstCaps,
  transformString,
  extractNumbers,
} from "../../utils/Utility";
 const body = [
   {
     value: "suv",
     label: "SUV",
   },
   {
     value: "sedan",
     label: "Sedan",
   },
   {
     value: "coupe",
     label: "Coupe",
   },
 ];

 const seats = [
   { value: 1, label: "1" },
   { value: 2, label: "2" },
   { value: 3, label: "3" },
   { value: 4, label: "4" },
   { value: 5, label: "5" },
   { value: 6, label: "6" },
   { value: 7, label: "7" },
   { value: 8, label: "8" },
   { value: 9, label: "9" },
   { value: 10, label: "10" },
 ];

 const year = [
   { value: 2000, label: "2000" },
   { value: 2001, label: "2001" },
   { value: 2002, label: "2002" },
   { value: 2003, label: "2003" },
   { value: 2004, label: "2004" },
   { value: 2005, label: "2005" },
   { value: 2006, label: "2006" },
   { value: 2007, label: "2007" },
   { value: 2008, label: "2008" },
   { value: 2009, label: "2009" },
   { value: 2010, label: "2010" },
   { value: 2011, label: "2011" },
   { value: 2012, label: "2012" },
   { value: 2013, label: "2013" },
   { value: 2014, label: "2014" },
   { value: 2015, label: "2015" },
   { value: 2016, label: "2016" },
   { value: 2017, label: "2017" },
   { value: 2018, label: "2018" },
   { value: 2019, label: "2019" },
   { value: 2020, label: "2020" },
   { value: 2021, label: "2021" },
   { value: 2022, label: "2022" },
   { value: 2023, label: "2023" },
   { value: 2024, label: "2024" },
 ];

 const transmission = [
   {
     value: "automatic",
     label: "Automatic",
   },
   {
     value: "manual",
     label: "Manual",
   },
 ];

 const fuelType = [
   { value: "petrol", label: "Petrol" },
   { value: "diesel", label: "Diesel" },
   { value: "hybrid", label: "Hybrid" },
   { value: "electric", label: "Electric" },
   { value: "gas", label: "Gas" },
 ];

 const drivetrain = [
   { value: "front-wheel", label: "Front Wheel" },
   { value: "rear-wheel", label: "Rear Wheel" },
   { value: "four-wheel", label: "Four Wheel" },
 ];
 const brake = [
   { value: "abs", label: "ABS" },
   { value: "ebs", label: "EBS" },
 ];
const CarInfo = ({ form }) => {
  const handleCaps = (e) => {
    const { id, value } = e.target;
    const transformedValue = firstCaps(value);
    form.setFieldsValue({ [id]: transformedValue });
  };

  const handleNumber = (e) => {
    const { id, value } = e.target;
    const transformedValue = extractNumbers(value);
    form.setFieldsValue({ [id]: transformedValue });
  };

  const handleVin = (e) => {
    const { id, value } = e.target;
   
    const transformedValue = transformString(value);
    form.setFieldsValue({ [id]: transformedValue });
  };

  return (
    <div className="p-6">
      <div className="text-sm font-bold">Car Info</div>
      <Divider />
      <div className="text-[0.6rem] grid md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="font-bold ">
            Car Name <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"carName"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please enter a car name",
              },
            ]}
          >
            <Input
              className="bg-gray-50 p-1 hover:border-orange-400 focus:border-orange-400
          "
              onChange={handleCaps}
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            Brand Name{" "}
            <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"brandName"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please enter a brand name",
              },
            ]}
          >
            <Input
              className="bg-gray-50 p-1 hover:border-orange-400 focus:border-orange-400
          "
              onChange={handleCaps}
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            Model <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"modelName"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please enter a model name",
              },
            ]}
          >
            <Input
              onChange={handleCaps}
              className="bg-gray-50 p-1 hover:border-orange-400 focus:border-orange-400
          "
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            Body <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"body"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please selct a body type",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Select a body"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={body}
              className="bg-gray-50 hover:border-orange-400 focus:border-orange-400
          "
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            VIN <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"vin"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please enter a vechicle identity number",
                pattern: /^[A-HJ-NPR-Z0-9]{17}$/,
              },
              {
                pattern: /^.{17}$/,
                message: "Input must be exactly 17 characters long!",
              },
            ]}
          >
            <Input
              className="bg-gray-50 p-1 hover:border-orange-400 focus:border-orange-400
          "
              onChange={handleVin}
              maxLength={17}
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            Year <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"year"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please selct an year",
              },
            ]}
          >
            <Select
              options={year}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            Seats <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"seats"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please select a seats",
              },
            ]}
          >
            <Select
              options={seats}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            Gear Type <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"gearType"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please select a gear type",
              },
            ]}
          >
            <Select
              options={transmission}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            Mileage <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"mileage"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please enter a mileage",
                pattern: /^[0-9]+$/,
              },
            ]}
          >
            <Input
              className="bg-gray-50 p-1 hover:border-orange-400 focus:border-orange-400
          "
              onChange={handleNumber}
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            Fuel Type <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"fuelType"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please select a fuel type",
              },
            ]}
          >
            <Select
              options={fuelType}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            Drivetrain{" "}
            <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"drivetrain"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please selct a drivetrain",
              },
            ]}
          >
            <Select
              options={drivetrain}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            Engine Power{" "}
            <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"enginePower"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please enter a engine power",
              },
            ]}
          >
            <Input
              className="bg-gray-50 p-1 hover:border-orange-400 focus:border-orange-400
          "
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            Brake <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"brake"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please select a brake",
              },
            ]}
          >
            <Select
              options={brake}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
