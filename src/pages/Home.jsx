import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";
import Header from "../components/Header/Header";
import { axiosInstance } from "../utils/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const getCars = async () => {
    try {
      const response = await axiosInstance.get("/cars");
      setCars(response.data);
     }
    catch (err) {
     if (err.response.status === 403 || err.response.status === 401) {
        toast.error("Need account login");
        navigate("/login");
      }
  }
  }

  useEffect(() => {
    getCars();
  },[])
 
    return (
      <div>
        <Header />
        <Banner />

        {/* <Filter /> */}
        <div className="flex flex-wrap justify-center md:pt-10  bg-slate-100">
          {cars.map((car, index) => (
            <Card key={index} car={car} />
          ))}
        </div>
      </div>
    );
}

export default Home;