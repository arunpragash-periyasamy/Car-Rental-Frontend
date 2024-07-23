import { useParams } from "react-router-dom";
import CarCard from "../components/CarCard/CarCard";
import CarHeader from "../components/CarHeader/CarHeader";
import Header from "../components/Header/Header"
import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";
import { useDispatch } from "react-redux";
import { firstCaps } from "../utils/Utility";

const CarDetailPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const dispatch = useDispatch();
  const getCarDetail = async () =>
  {
    const response = await axiosInstance(`cars/${id}`);
    setCar(response.data)
    console.log(response.data);
  }

  useEffect(() => {
    getCarDetail();
  },[])

    return (
      <div>
        <Header />
        <div className="bg-gray-900 h-20 text-white font-bold text-2xl flex justify-center items-center">
          <h1>{firstCaps(car?.carName)}</h1>
        </div>
        <CarHeader car={{ name: car.carName, year: car.year, body: car.body }} />
        <CarCard car={car} />
      </div>
    );
}

export default CarDetailPage