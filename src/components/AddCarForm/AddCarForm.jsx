import { Form } from "antd";
import CarInfo from "../CarInfo/CarInfo";
import PriceInfo from "../PriceInfo/PriceInfo";
import CarImages from "../CarImages/CarImages";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utils/axios";
import AddPlace from "../AddPlace/AddPlace";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const AddCarForm = () => {
  
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [imageList, setImageList] = useState([]);
    const { id } = useParams();
    const getCarData = async () => {
      const response = await axiosInstance.get(`/cars/${id}`);
      setImageList(response.data.images);
      form.setFieldsValue(response.data)
      
    };
    useEffect(() => {
      if (id !== null || id != undefined) {
        getCarData();
      }
    }, []);
const fetchFileFromUrl = async (url) => {
  const response = await fetch(url);
  const data = await response.blob();
  let filename = url.split("/").pop();

  // Ensure the filename has an extension
  if (!filename.includes(".")) {
    const fileExtension = data.type.split("/").pop();
    filename = `image_${Date.now()}.${fileExtension}`;
  }

  return new File([data], filename, { type: data.type });
};
  const onFinish = async (values) => {
    values.id = 0;
    
    const formData = new FormData();

    // Append text fields to formData
    for (const key in values) {
      if (key !== "images") {
        formData.append(key, values[key]);
      }
    }

    // Process images
    const images = await Promise.all(
      values.images.map(async (file) => {
        if (file.originFileObj) {
          return file.originFileObj;
        } else if (file.url) {
          return await fetchFileFromUrl(file.url);
        }
      })
    );

    // Append image files to formData
    images.forEach((image, index) => {
      formData.append(`images`, image, image.name || `image_${index}`);
    });

    try {
      let response;
      if (id === null || id === undefined) {
        formData.set(id, 0);
        response = await axiosInstance.post("/cars", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
       
        toast.success("Car added Successfully");
      } else {
        response = await axiosInstance.put(`/cars/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
       
        toast.success("Car updated Successfully");
      }
      form.resetFields();
      navigate("/view-cars");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error in adding car");
    }
  };

    return (
      <div className="pb-4 rounded">
        <Form onFinish={onFinish} form={form}>
          <div className="bg-white rounded-lg">
            <Form.Item name={"id"} className="hidden">
              <input type="text" value={id} />
            </Form.Item>
            <CarInfo form={form} />
            <PriceInfo form={form} />
            <AddPlace form={form} />
            <CarImages form={form} images={imageList} />
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

