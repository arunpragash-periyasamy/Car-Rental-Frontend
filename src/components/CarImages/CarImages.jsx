import { Divider, Form } from "antd";
import UploadImage from "../Images/Images";
const CarImages = () => {
  return (
    <div className="bg-white p-6">
      <div className="text-sm font-bold">Car Images (upto 5 images)</div>
      <Divider />
      <div className="text-[0.6rem]">
        <div>
          <div className="font-bold ">
            Images{" "}
            <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item name={"images"} className="w-11/12">
            <UploadImage size={10} />
          </Form.Item>
        </div>
       
      </div>
    </div>
  );
};

export default CarImages;
