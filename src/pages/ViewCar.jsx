import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { axiosInstance } from "../utils/axios";
import CarCard from "../components/CarCard/CarCard";
import Listing from "../components/Listing/Listing";

const ViewCar = () => {
    const [cars, setCars] = useState([]);
    const getCars = async () => {
        const response = await axiosInstance.get("/cars/myCars");
        setCars(response.data);
    };
    useEffect(() => {
        getCars();  
    }, []);
    return (
      <div>
        <Header />
        <div className="bg-gray-900 h-20 text-white font-bold text-2xl flex justify-center items-center">
          <h1>View Car</h1>
        </div>
        <div className="mx-10 my-5 rounded ">
                {
                    cars.map(car => <Listing car={car} />)
         }
        </div>
      </div>
    );
}

export default ViewCar;