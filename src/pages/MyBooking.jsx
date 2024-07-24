import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { axiosInstance } from "../utils/axios";

const MyBooking = () => {
    const [bookings, setBookings] = useState([]);
    const getBookings= async () => {
        const response = await axiosInstance.get("/bookings");
        setBookings(response.data);
    }
    useEffect(() => {
        getBookings();
    },[])
    return (
      <div>
        <Header />
        <div className="bg-gray-900 h-20 text-white font-bold text-2xl flex justify-center items-center">
          <h1>View Car</h1>
        </div>
        <div className="mx-10 my-5 rounded space-y-4">
          {bookings.map((booking) => (
            <div className="bg-white flex items-center justify-between p-3 rounded hover:shadow-md hover:shadow-orange-300">
              <div>
                <img
                  src={booking.carImage}
                  alt=""
                  className="w-40 h-30 rounded-md"
                />
              </div>
              <div>
                      <p className="">
                          <span className="font-semibold">Car Name :</span>
                  {booking.carName}
                </p>
                <p><span className="font-semibold">Model Name: </span>{booking.modelName}</p>
              </div>
              <div>
                <p><span className="font-semibold">Starting Date:</span> {booking.startDate}</p>
                <p><span className="font-semibold">Ending Date:</span> {booking.endDate}</p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">Pickup Location :</span>{" "}
                  {booking.deliveryLocation}
                </p>
                <p>
                  <span className="font-semibold">Return Location :</span>{" "}
                  {booking.returnLocation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default MyBooking;