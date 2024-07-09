import { DatePicker, Form } from "antd";
const { Input } = Form;
const Filter = () => {
    return (
        <div className="w-3/4 bg-white flex gap-2">
            <div className="w-48">
                <div className="text-sm font-bold">Pickup Location</div>
                <div><Form.Item>
                    <Input></Input>
                </Form.Item></div>
            </div>
            <div className="w-32">
                <div className="text-sm font-bold">Pickup Date</div>
                <div><DatePicker/></div>
            </div>
        </div>
    )
}

export default Filter;