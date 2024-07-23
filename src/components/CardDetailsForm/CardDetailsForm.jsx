import { DatePicker, Divider, Form, Input } from "antd";
import dayjs from 'dayjs'
import { disabledDate, extractNumbers, firstCaps } from "../../utils/Utility";

const CardDetailsForm = ({form}) => {

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
      <div className=" bg-white p-5 ld:p-3 rounded mt-4">
        <div className="font-bold text-sm">Card Information</div>
        <Divider />
          <div className="grid lg:grid-cols-2 lg:gap-3">
            <div>
              <div className="text-[0.7rem] font-bold">
                Card Holder Name
                <span className="text-red-500 required-asterisk"> *</span>
              </div>
              <Form.Item
                name="cardHodlerName"
                rules={[
                  {
                    required: true,
                    message: "Please enter name!",
                  },
                ]}
              >
                <Input onChange={handleCaps} className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400" />
              </Form.Item>
            </div>
            <div>
              <div className="text-[0.7rem] font-bold">
                Card Number
                <span className="text-red-500 required-asterisk"> *</span>
              </div>
              <Form.Item
                name="cardNumber"
                rules={[
                  {
                    required: true,
                    message: "Please enter number!",
                  },
                  {
                    pattern: /^[0-9]{16}$/,
                    message:"enter a valid card number"
                  }
                ]}
              >
                <Input onChange={handleNumber} maxLength={16} className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400" />
              </Form.Item>
            </div>

          <div>
            <div className="text-[0.7rem] font-bold mb-1">
              Expiry <span className="text-red-500 required-asterisk"> *</span>
            </div>
            <Form.Item
              name="expiryMonth"
              rules={[
                {
                  required: true,
                  message: "Select the expiry Month!",
                },
              ]}
            >
              <DatePicker className="w-full bg-gray-50"  picker="month" disabledDate={disabledDate} />
            </Form.Item>
          </div>
            <div>
              <div className="text-[0.7rem] font-bold">
                CVV <span className="text-red-500 required-asterisk"> *</span>
              </div>
              <Form.Item
                name="cvv"
                rules={[
                  {
                    required: true,
                    message: "Please enter cvv!",
                  },
                  {
                    pattern: /^[0-9]{3}$/,
                    message:"enter a valid cvv"
                  }
                ]}
              >
                <Input onChange={handleNumber} maxLength={3} className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400" />
              </Form.Item>
            </div>
          </div>
      </div>
    );
}

export default CardDetailsForm