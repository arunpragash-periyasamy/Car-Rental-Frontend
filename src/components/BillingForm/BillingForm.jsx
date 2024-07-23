import { Divider, Form, Input, message, Select } from "antd";
import { extractNumbers, firstCaps, transformString } from "../../utils/Utility";
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

const BillingForm = ({form}) => {
  const validateDrivingLicense = (rule, value, callback) => {
    // Regular expression to match the format 'XX-DDDDNNNNNN-C'
    const regex = /^[A-Z]{2}\d{6,10}\d$/;

    if (!value || regex.test(value)) {
      callback(); // Validation passed
    } else {
      callback("Please enter a valid Indian driving license number!");
    }
  };

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

    const handleString = (e) => {
      const { id, value } = e.target;
      const transformedValue = transformString(value);
      form.setFieldsValue({ [id]: transformedValue });
    };
  
    const handleSmall = (e) => {
      const { id, value } = e.target;
      const transformedValue = value.toLowerCase();
      form.setFieldsValue({ [id]: transformedValue });
    };
  

  
    return (
      <div className=" bg-white p-5 ld:p-3 rounded mb-4">
        <div className="font-bold text-sm">Billing Information</div>
        <Divider />
        <div>
          <div className="grid lg:grid-cols-2 lg:gap-3">
            <div>
              <div className="text-[0.7rem] font-bold">
                Name
                <span className="text-red-500 required-asterisk"> *</span>
              </div>
              <Form.Item
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please enter name!",
                  },
                ]}
              >
                <Input
                  onChange={handleCaps}
                  className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400"
                />
              </Form.Item>
            </div>

            <div>
              <div className="text-[0.7rem] font-bold">
                No Of Persons{" "}
                <span className="text-red-500 required-asterisk"> *</span>
              </div>
              <Form.Item
                name="noOfPersons"
                rules={[
                  {
                    required: true,
                    message: "Please enter number of persons!",
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
          </div>
          <div>
            <div className="text-[0.7rem] font-bold mb-1">
              Street <span className="text-red-500 required-asterisk"> *</span>
            </div>
            <Form.Item
              name="street"
              rules={[
                {
                  required: true,
                  message: "Please enter street!",
                },
              ]}
            >
              <Input
                onChange={handleCaps}
                className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400"
              />
            </Form.Item>
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-3">
            <div>
              <div className="text-[0.7rem] font-bold">
                Country{" "}
                <span className="text-red-500 required-asterisk"> *</span>
              </div>
              <Form.Item
                name="country"
                rules={[
                  {
                    required: true,
                    message: "Please enter country!",
                  },
                ]}
              >
                <Input
                  onChange={handleCaps}
                  className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400"
                />
              </Form.Item>
            </div>
            <div>
              <div className="text-[0.7rem] font-bold">
                City <span className="text-red-500 required-asterisk"> *</span>
              </div>
              <Form.Item
                name="city"
                rules={[
                  {
                    required: true,
                    message: "Please enter city!",
                  },
                ]}
              >
                <Input
                  onChange={handleCaps}
                  className="p-[0.3rem] text-xs bg-gray-50 hover:border-orange-400 focus:border-orange-400"
                />
              </Form.Item>
            </div>
            <div>
              <div className="text-[0.7rem] font-bold">
                Pin Code{" "}
                <span className="text-red-500 required-asterisk"> *</span>
              </div>
              <Form.Item
                name="pinCode"
                rules={[
                  {
                    required: true,
                    message: "Please enter pin code!",
                  },
                  {
                    pattern: /^[0-9]{6}$/,
                    message: "Enter a valid pin code",
                  },
                ]}
              >
                <Input
                  onChange={handleNumber}
                  maxLength={6}
                  className="p-[0.3rem] text-xs bg-gray-50 hover:border-orange-400 focus:border-orange-400"
                />
              </Form.Item>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-3">
            <div>
              <div className="text-[0.7rem] font-bold">
                Email <span className="text-red-500 required-asterisk"> *</span>
              </div>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter email!",
                  },
                  {
                    type: "email",
                    message: "Enter a valid email",
                  },
                ]}
              >
                <Input
                  onChange={handleSmall}
                  className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400"
                />
              </Form.Item>
            </div>
            <div>
              <div className="text-[0.7rem] font-bold">
                Mobile Number{" "}
                <span className="text-red-500 required-asterisk"> *</span>
              </div>
              <Form.Item
                name="mobileNumber"
                rules={[
                  {
                    required: true,
                    message: "Please enter mobile number!",
                  },
                  {
                    pattern: /^[6-9][0-9]{9}$/,
                    message: "Enter a valid mobile number",
                  },
                ]}
              >
                <Input
                  onChange={handleNumber}
                  maxLength={10}
                  className="p-[0.3rem] text-xs bg-gray-50 hover:border-orange-400 focus:border-orange-400"
                />
              </Form.Item>
            </div>
          </div>
          <div>
            <Form.Item name="additionalInformation">
              <div className="text-[0.7rem] font-bold mb-1">
                Additional Information{" "}
              </div>
              <Input className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400" />
            </Form.Item>
          </div>
          <div>
            <div className="text-[0.7rem] font-bold mb-1">
              Driving Licence Number{" "}
              <span className="text-red-500 required-asterisk"> *</span>
            </div>
            <Form.Item
              name="drivingLicenceNumber"
              rules={[
                {
                  required: true,
                  message: "Please enter driving license number!",
                },
                {
                  validator: validateDrivingLicense,
                  message: "Invalid driving license number",
                },
              ]}
            >
              <Input
                placeholder="TN0220080012345"
                onChange={handleString}
                className="p-[0.3rem] text-xs bg-gray-50  hover:border-orange-400 focus:border-orange-400"
                minLength={9}
                maxLength={13}
              />
            </Form.Item>
          </div>
        </div>
      </div>
    );

}


export default BillingForm;