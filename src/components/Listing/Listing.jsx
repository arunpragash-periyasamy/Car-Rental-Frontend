import { Link } from "react-router-dom";

const Listing = ({ car }) => {
    return (
      <Link to={`/add-car/${car.id}`}>
    <div className="w-11/12 bg-white p-3 m-6 rounded flex space-x-4 cursor-pointer hover:shadow-orange-300 hover:shadow-lg">
      <div>
        <img
          className="w-48 rounded"
          src="https://media.istockphoto.com/id/1435226078/photo/front-of-a-white-bmw-m4-parked-on-a-street-with-trees-in-the-background.jpg?s=612x612&w=0&k=20&c=l1IupUrh-_Zbcse-hDkaUAh-qMD82hJspXjnN0IBZlg="
          alt=""
        />
      </div>
      <div>
              <h1 className="font-bold text-3xl">{car.carName}</h1>
              <p>model : {car.modelName}</p>
      </div>
            </div>
            </Link>
  );
};

export default Listing;
