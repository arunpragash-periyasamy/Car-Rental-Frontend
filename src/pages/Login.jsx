import { Form, Input } from "antd";
import Logo from "../../public/logo.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/slices/userSlice";
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", values);
            notify();
            dispatch(setUser(response.data))
            navigate("/");
        } catch (err) {
          console.log(err);
            if (err.response.status === 404) {
                toast.error("User not found");
            } else if (err.response.status === 401 || err.response.status === 400) {
              toast.error("Invalid credentials");
            } else {
              toast.error("Error occured");
            }
      }
  };
  const notify = () => {
    toast.success("welcome");
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      
      <Form onFinish={onFinish}>
        <div className="flex justify-center">
          <img src={Logo} alt="Car-Rental Logo" />
        </div>
        <div className="my-6 p-5 pr-10 rounded-md bg-white min-w-72 sm:min-w-96 md:min-w-[40rem] min-h-96">
          <div className="mt-3">
            <h1 className="text-3xl font-bold">Sign In</h1>
          </div>
          <div className="mt-3">
            <p className="font-bold text-sm">
              User Name{" "}
              <span className="text-red-500 required-asterisk"> *</span>
            </p>
            <Form.Item name="userName">
              <Input className="bg-gray-50 p-2 hover:border-orange-500 focus:border-orange-500" />
            </Form.Item>
          </div>
          <div className="mt-3">
            <p className="font-bold text-sm">
              Password{" "}
              <span className="text-red-500 required-asterisk"> *</span>
            </p>
            <Form.Item name="password">
              <Input type="password" className="bg-gray-50 p-2 hover:border-orange-500 focus:border-orange-500" />
            </Form.Item>
          </div>
          <div className="mt-3">
            <button className="min-w-full bg-black rounded-md hover:bg-white hover:text-black border hover:border-black font-bold text-md text-white p-2">
              Sign in
            </button>
          </div>
          <div className="mt-3">
            <span className="text-sm text-red-400 cursor-pointer hover:font-bold">
              forget password
            </span>
          </div>
          <div className="mt-3 flex justify-center">
            <p className="">
              Don't you have an account?{" "}
              <Link to="/register">
                <span className="font-bold hover:shadow-sm hover:shadow-teal-300 bg-transparent text-teal-600 cursor-pointer">
                  Register
                </span>
              </Link>
            </p>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
