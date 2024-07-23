import { Divider, Form, Input } from "antd";
import { extractNumbers } from "../../utils/Utility";
const PriceInfo = ({form}) => {
  const handleNumber = (e) => {
    const { id, value } = e.target;
    const transformedValue = extractNumbers(value);
    form.setFieldsValue({ [id]: transformedValue });
  };
  return (
    <div className="bg-white p-6">
      <div className="text-sm font-bold">Price Info</div>
      <Divider />
      <div className="text-[0.6rem] grid md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="font-bold ">
            Amount (Per Hour){" "}
            <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"amount"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please enter an amount",
              },
            ]}
          >
            <Input
              onChange={handleNumber}
              className="bg-gray-50 p-1 hover:border-orange-400 focus:border-orange-400
          "
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            Door Delivery & Pickup Charge{" "}
            <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"doorDeliveryPrice"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please enter a delivery fee",
              },
            ]}
          >
            <Input
              onChange={handleNumber}
              className="bg-gray-50 p-1 hover:border-orange-400 focus:border-orange-400
          "
            />
          </Form.Item>
        </div>
        <div>
          <div className="font-bold ">
            Trip Protection Fee{" "}
            <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            name={"tripProtectionFee"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please enter a trip protection Fee",
              },
            ]}
          >
            <Input
              onChange={handleNumber}
              className="bg-gray-50 p-1 hover:border-orange-400 focus:border-orange-400
          "
            />
          </Form.Item>
        </div>

        <div>
          <div className="font-bold ">
            Tax <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            onChange={handleNumber}
            name={"tax"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please enter a tax",
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
            Convienence Fee{" "}
            <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            onChange={handleNumber}
            name={"convienenceFee"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please enter a convienence fee",
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
            Refundable Deposit{" "}
            <span className="text-red-500 required-asterisk"> *</span>
          </div>
          <Form.Item
            onChange={handleNumber}
            name={"refundableDeposit"}
            className="w-11/12"
            rules={[
              {
                required: true,
                message: "Please enter a refundable deposit",
              },
            ]}
          >
            <Input
              className="bg-gray-50 p-1 hover:border-orange-400 focus:border-orange-400
          "
            />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default PriceInfo;