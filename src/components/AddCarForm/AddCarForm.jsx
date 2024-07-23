import { Form } from "antd";
import CarInfo from "../CarInfo/CarInfo";
import PriceInfo from "../PriceInfo/PriceInfo";
import CarImages from "../CarImages/CarImages";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utils/axios";
import AddPlace from "../AddPlace/AddPlace";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const AddCarForm = () => {
  
  const [form] = Form.useForm();
    const { id } = useParams();
    const getCarData = async () => {
      const response = await axiosInstance.get(`/cars/${id}`);
      console.log(response.data);
      form.setFieldsValue(response.data)
    };
    useEffect(() => {
      if (id !== null || id != undefined) {
        getCarData();
      }
    }, []);

  const onFinish = async (values) => {
    console.log(values);
    const images = values.images.map((file) => file.originFileObj);

    // Create a FormData object to include both text and file data
    const formData = new FormData();

    // Append text fields to formData
    for (const key in values) {
      if (key !== "images") {
        formData.append(key, values[key]);
      }
    }

    // Append image files to formData
    images.forEach((image,) => {
      formData.append(`images`, image);
    });

    try {
      if(id === null || id === undefined){
      const response = await axiosInstance.post(
        "/cars",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Success:", response.data);
        toast.success("Car added Successfully")
      }
      else {
        
      const response = await axiosInstance.put(`/cars/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Success:", response.data);
        toast.success("Car updated
         Successfully");
      }
      form.resetFields();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error in adding car");
    }
  };

    return (
      <div className="pb-4 rounded">
        <Form onFinish={onFinish} form={form}>
          <div className="bg-white rounded-lg">
            <Form.Item name={"id"}>
              <input type="text" value={id} />
            </Form.Item>
            <CarInfo form={form} />
            <PriceInfo form={form} />
            <AddPlace form={form} />
            <CarImages form={form} />
          </div>
          <div className="flex justify-end my-4 gap-2">
            <button
              type="submit"
              className="bg-orange-400 text-white text-[0.85rem] font-bold rounded p-2 hover:bg-white hover:text-orange-400 border border-orange-400"
            >
              Add Car
            </button>
          </div>
        </Form>
      </div>
    );
}

export default AddCarForm;

