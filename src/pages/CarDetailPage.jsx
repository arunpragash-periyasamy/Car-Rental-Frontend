import CarCard from "../components/CarCard/CarCard";
import CarHeader from "../components/CarHeader/CarHeader";
import Header from "../components/Header/Header"

const CarDetailPage = () => {
    return (
      <div>
        <Header />
        <div className="bg-gray-900 h-20 text-white font-bold text-2xl flex justify-center items-center">
          <h1>Chevorlet Camaro</h1>
        </div>
        <CarHeader />
        <CarCard/>
      </div>
    );
}

export default CarDetailPage