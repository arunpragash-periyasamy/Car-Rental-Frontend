
import AddCarForm from "../components/AddCarForm/AddCarForm";
import Header from "../components/Header/Header";

const AddCar = () => {

  return (
    <div>
      <Header />
      <div className="bg-gray-900 h-20 text-white font-bold text-2xl flex justify-center items-center">
        <h1>Add Car</h1>
      </div>
      <div className="mx-10 my-5 rounded ">
          <AddCarForm/>
      </div>
    </div>
  );
};

export default AddCar;
