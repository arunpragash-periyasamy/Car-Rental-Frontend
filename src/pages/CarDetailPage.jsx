import { useParams, useSearchParams } from "react-router-dom";
import CarCard from "../components/CarCard/CarCard";
import CarHeader from "../components/CarHeader/CarHeader";
import Header from "../components/Header/Header"
import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";
import { useDispatch } from "react-redux";

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
  
  const getImages = async () => {
    try {
      if (car.images) {
        car.images.map(async(id) => {
          const response = await axiosInstance(`cars/images/${id}`);
          console.log(response);
        })
      }
      
    } catch (err) {
  console.log(err);
    }
  }

  useEffect(() => {
    getImages();
  }, [car]);

  useEffect(() => {
    getCarDetail();
  },[])

    return (
      <div>
        <Header />
        <div className="bg-gray-900 h-20 text-white font-bold text-2xl flex justify-center items-center">
          <h1>{car?.name}</h1>
        </div>
        <CarHeader />
        <CarCard/>
      </div>
    );
}

export default CarDetailPage