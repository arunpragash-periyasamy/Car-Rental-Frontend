import { Divider, Form, Input } from "antd";
import { extractNumbers, firstCaps } from "../../utils/Utility";

const AddPlace = ({ form }) => {
  const handleNumber = (e) => {
    const { id, value } = e.target;
    const transformedValue = extractNumbers(value);
    form.setFieldsValue({ [id]: transformedValue });
  };

  const handleCaps = (e) => {
    const { id, value } = e.target;
    const transformedValue = firstCaps(value);
    form.setFieldsValue({ [id]: transformedValue });
  };
  return (
    <div className="bg-white p-6">
      <div className="text-sm font-bold">Add Place</div>
      <Divider />
      <div className="text-[0.6rem] grid md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="font-bold ">
            Address
            <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"address"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please select a address",
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
            Pin code
            <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"pinCode"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please select a pinCode",
              },
              {
                pattern: /^.{6}$/,
                message: "Input must be exactly 6 number long!",
              },
            ]}
          >
            <Input
              onChange={handleNumber}
              className="bg-gray-50 p-1 hover:border-orange-400 focus:border-orange-400
          "
              maxLength={6}
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            City
            <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"city"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please select a city",
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
            State <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"state"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please select a state",
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
            Country
            <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"country"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please select a country",
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
      </div>
    </div>
  );
};

export default AddPlace;
