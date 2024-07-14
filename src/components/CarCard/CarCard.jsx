import { FaRegHeart, FaWalking } from "react-icons/fa";
import Carousel from "../Carousel/Carousel";
import { Input } from "antd";
import ReservationForm from "../ReservationForm/ReservationForm";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import OwnerCard from "../OwnerCard/OwnerCard";

const CarCard = () => {

const cars = [
  {
    id: 1,
    src: "https://dreamsrent.dreamstechnologies.com/html/assets/img/cars/slider-03.jpg",
  }, // Replace with your image paths
  {
    id: 2,
    src: "https://dreamsrent.dreamstechnologies.com/html/assets/img/cars/slider-thum-04.jpg",
  },
  {
    id: 3,
    src: "https://dreamsrent.dreamstechnologies.com/html/assets/img/cars/slider-thum-03.jpg",
  },
  {
    id: 4,
    src: "https://dreamsrent.dreamstechnologies.com/html/assets/img/cars/slider-thum-05.jpg",
  },
];

    return (
      <div className="flex justify-center gap-4 lg:gap-20 flex-wrap lg:mx-auto my-5">
        <div>
          <div className="lg:max-w-[35rem] p-4 bg-white rounded">
            <div className="flex text-xs justify-between mx-3 my-2 flex-wrap">
              <div className="flex">
                <div className="bg-teal-400 flex mx-1 rounded-md px-1">
                  <FaWalking /> 4.2 Km Away
                </div>
                <div className="mx-1">
                  <FaRegHeart />
                </div>
              </div>
              <div className="flex">
                <div className="text-orange-400 mx-1">Airport Delivery</div>|
                <div className="text-teal-500 mx-1">Home Delivery</div>
              </div>
            </div>
            <div className="w-56 md:w-80 lg:w-full mx-auto">
              <ImageCarousel />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded w-72 p-3 min-h-2">
            <div className="font-bold">Pricing Details</div>
            <div className="divide-y flex items-center h-[1px] my-2 bg-slate-200">
              <div className="bg-orange-400 rounded-2xl w-5 h-1 mr-2"></div>
            </div>
            <div className="flex justify-between mt-3 bg-slate-200 p-2 rounded-md text-xs">
              <div>Per Day (8 hours)</div>
              <div>₹ 30000</div>
            </div>
            <div className="text-xs text-right my-2">Fare Summary</div>
          </div>
          <div className="bg-white rounded w-72 p-3 min-h-2 my-3">
            <ReservationForm />
          </div>
          <div className="bg-white rounded w-72 p-3 min-h-2 my-3">
            <OwnerCard />
          </div>
        </div>
      </div>
    );
}

export default CarCard;