// // Filter.js
// import React from "react";
// import { DatePicker, TimePicker, Input, Button, Form } from "antd";

// const { RangePicker } = DatePicker;

// const Filter = () => {
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log("Received values of form: ", values);
//   };

//   return (
//     <Form
//       form={form}
//       name="filter_form"
//       onFinish={onFinish}
//       className="p-4 flex flex-col md:flex-row gap-4"
//     >
//       <Form.Item
//         name="location"
//               className="flex-1"
              
//         rules={[{ required: true, message: "Please enter a location!" }]}
//       >
//         <Input
//           size="large"
//           placeholder="Enter City, Airport, or Address"
//           prefix={<i className="fas fa-map-marker-alt"></i>}
//         />
//       </Form.Item>

//       <Form.Item
//         name="pickup_date"
//         className="flex-1 md:flex-1"
//         rules={[{ required: true, message: "Please select a pickup date!" }]}
//       >
//         <DatePicker size="large" placeholder="Pickup Date" className="w-full" />
//       </Form.Item>

//       <Form.Item
//         name="pickup_time"
//         className="flex-1 md:flex-1"
//         rules={[{ required: true, message: "Please select a pickup time!" }]}
//       >
//         <TimePicker size="large" placeholder="11:00 AM" className="w-full" />
//       </Form.Item>

//       <Form.Item
//         name="return_date"
//         className="flex-1 md:flex-1"
//         rules={[{ required: true, message: "Please select a return date!" }]}
//       >
//         <DatePicker size="large" placeholder="Return Date" className="w-full" />
//       </Form.Item>

//       <Form.Item
//         name="return_time"
//         className="flex-1 md:flex-1"
//         rules={[{ required: true, message: "Please select a return time!" }]}
//       >
//         <TimePicker size="large" placeholder="11:00 AM" className="w-full" />
//       </Form.Item>

//       <Form.Item className="self-center lg:self-auto">
//         <Button
//           type="primary"
//           htmlType="submit"
//           size="large"
//           className="bg-orange-400 text-stone-200 font-bold"
//         >
//           Search
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default Filter;




// Filter.js
import React from "react";
import { DatePicker, TimePicker, Input, Button, Form } from "antd";

const Filter = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

    return (
        <div className="lg:w-3/4 mx-auto rounded-lg bg-white lg:top-[41rem] lg:left-36 lg:absolute">

    <Form
      form={form}
      name="filter_form"
      onFinish={onFinish}
      className="p-4 flex flex-col lg:flex-row gap-4"
    >
      <Form.Item
        name="location"
        className="flex-1"
        rules={[{ required: true, message: "Please enter a location!" }]}
      >
        <Input
          size="large"
          placeholder="Enter City, Airport, or Address"
          prefix={<i className="fas fa-map-marker-alt"></i>}
        />
      </Form.Item>

      <div className="flex-1 flex flex-col md:flex-row gap-4">
        <Form.Item
          name="pickup_date"
          className="w-full"
          rules={[{ required: true, message: "Please select a pickup date!" }]}
        >
          <DatePicker size="large" placeholder="Pickup Date" className="w-full" />
        </Form.Item>

        <Form.Item
          name="pickup_time"
          className="w-full"
          rules={[{ required: true, message: "Please select a pickup time!" }]}
        >
          <TimePicker size="large" placeholder="11:00 AM" className="w-full" />
        </Form.Item>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-4">
        <Form.Item
          name="return_date"
          className="w-full"
          rules={[{ required: true, message: "Please select a return date!" }]}
        >
          <DatePicker size="large" placeholder="Return Date" className="w-full" />
        </Form.Item>

        <Form.Item
          name="return_time"
          className="w-full"
          rules={[{ required: true, message: "Please select a return time!" }]}
        >
          <TimePicker size="large" placeholder="11:00 AM" className="w-full" />
        </Form.Item>
      </div>

      <Form.Item className="self-center lg:self-auto">
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="bg-orange-400 text-stone-200 font-bold"
        >
          Search
        </Button>
      </Form.Item>
    </Form>
        </div>
  );
};

export default Filter;
