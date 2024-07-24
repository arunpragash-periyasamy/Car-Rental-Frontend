import { Form, Input, Radio } from "antd";
import Logo from "../../public/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/slices/userSlice";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        values
      );
        toast.success("User Registration Success")
      navigate("/login");
    } catch (err) {
      if (err.response.status === 404) {
        toast.error("User not found");
      } else if (err.response.status === 401 || err.response.status === 400) {
          toast.error(err.response.data);
     } else {
        toast.error("Error occured");
      }
    }
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Form onFinish={onFinish}>
        <div className="flex justify-center">
          <img src={Logo} alt="Car-Rental Logo" />
        </div>
        <div className="my-6 p-5 pr-10 rounded-md bg-white min-w-72 sm:min-w-96 md:min-w-[40rem] min-h-96">
          <div className="mt-3">
            <h1 className="text-3xl font-bold">Sign Up</h1>
          </div>
          <div className="mt-3">
            <p className="font-bold text-sm">
              Name <span className="text-red-500 required-asterisk"> *</span>
            </p>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name!",
                },
              ]}
            >
              <Input className="bg-gray-50 p-2 hover:border-orange-500 focus:border-orange-500" />
            </Form.Item>
          </div>
          <div className="mt-3">
            <p className="font-bold text-sm">
              User Name{" "}
              <span className="text-red-500 required-asterisk"> *</span>
            </p>
            <Form.Item
              name="userName"
              rules={[
                {
                  required: true,
                  message: "Please enter your username!",
                },
              ]}
            >
              <Input className="bg-gray-50 p-2 hover:border-orange-500 focus:border-orange-500" />
            </Form.Item>
          </div>
          <div className="mt-3">
            <p className="font-bold text-sm">
              Email <span className="text-red-500 required-asterisk"> *</span>
            </p>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                },
              ]}
            >
              <Input className="bg-gray-50 p-2 hover:border-orange-500 focus:border-orange-500" />
            </Form.Item>
          </div>
          <div className="mt-3">
            <p className="font-bold text-sm">
              Mobile Number{" "}
              <span className="text-red-500 required-asterisk"> *</span>
            </p>
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please enter mobile number!",
                },
              ]}
            >
              <Input className="bg-gray-50 p-2 hover:border-orange-500 focus:border-orange-500" />
            </Form.Item>
          </div>
          <div className="mt-3">
            <p className="font-bold text-sm">
              User Type{" "}
              <span className="text-red-500 required-asterisk"> *</span>
            </p>
            <Form.Item
              name="userType"
              rules={[
                {
                  required: true,
                  message: "Please select user type!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="user">User</Radio>
                <Radio value="lessor">Lessor</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <div className="mt-3">
            <p className="font-bold text-sm">
              Password{" "}
              <span className="text-red-500 required-asterisk"> *</span>
            </p>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
            >
              <Input type="password" className="bg-gray-50 p-2 hover:border-orange-500 focus:border-orange-500" />
            </Form.Item>
          </div>
          <div className="mt-3">
            <button className="min-w-full bg-black rounded-md hover:bg-white hover:text-black border hover:border-black font-bold text-md text-white p-2">
              Sign up
            </button>
          </div>
          
          <div className="mt-3 flex justify-center">
            <p className="">
              Already you have an account?{" "}
              <Link to="/login">
                <span className="font-bold hover:shadow-sm hover:shadow-teal-300 bg-transparent text-teal-600 cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Register;
