import { DatePicker, Divider, Form, Input, Radio, TimePicker } from "antd";
import { FaLocationDot } from "react-icons/fa6";

const BookingType = () => {
  return (
    <div className="bg-white min-w-[42rem] p-6 rounded my-4">
      <div className="flex gap-3 items-center">
        <div className="bg-orange-500 text-white text-sm p-1 rounded">
          <FaLocationDot />
        </div>
        <div className="font-bold text-sm">Booking Type</div>
      </div>
      <Divider />
      <div className="">
        <div>
          <Form.Item name="book" className="mb-0">
            <Radio.Group className="grid grid-cols-4 gap-5">
              <div>
                <Radio
                  value="hourly"
                  className="flex flex-col justify-center  items-center space-y-3 rounded shadow-md pt-4 font-medium text-xs border"
                >
                  Hourly
                </Radio>
              </div>
              <div>
                <Radio
                  value="day"
                  className="flex flex-col justify-center  items-center space-y-3 rounded shadow-md pt-4 font-medium text-xs border"
                >
                  Day(8 Hrs)
                </Radio>
              </div>
              <div>
                <Radio
                  value="weekly"
                  className="flex flex-col justify-center  items-center space-y-3 rounded shadow-md pt-4 font-medium text-xs border"
                >
                  Weekly
                </Radio>
              </div>
              <div>
                <Radio
                  value="monthly"
                  className="flex flex-col accent-orange-400 checked:bg-orange-400 justify-center items-center space-y-3 rounded shadow-md pt-4 font-medium text-xs border"
                >
                  Monthly
                </Radio>
              </div>
            </Radio.Group>
          </Form.Item>
        </div>

        <div className="grid grid-cols-2 my-4">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-[0.6rem]">Start Date</p>
            <Form.Item className="mb-0 mr-6">
              <DatePicker className="w-full hover:border-orange-400 focus:border-orange-400" />
            </Form.Item>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-[0.6rem]">Start Time</p>
            <Form.Item className="mb-0 mr-6">
              <TimePicker className="w-full hover:border-orange-400 focus:border-orange-400" />
            </Form.Item>
          </div>
        </div>
        <div className="grid grid-cols-2 my-4">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-[0.6rem]">Return Date</p>
            <Form.Item className="mb-0 mr-6" name="returnDate">
              <DatePicker className="w-full hover:border-orange-400 focus:border-orange-400" />
            </Form.Item>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-[0.6rem]">Return Time</p>
            <Form.Item className="mb-0 mr-6" name="returnTime">
              <TimePicker className="w-full hover:border-orange-400 focus:border-orange-400" />
            </Form.Item>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingType;
