import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import CarDetailPage from "../pages/CarDetailPage";
import Card from "../components/Card/Card";
import Checkout from "../pages/Checkout";
import Billing from "../pages/Billing";
import AddCar from "../pages/AddCar";
import AddCarForm from "../components/Testing/Testing";
import Login from "../pages/Login"; // Assuming you have a Login component
import Register from "../pages/Register"; // Assuming you have a Register component
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/car/:id",
        element: <ProtectedRoute element={CarDetailPage} />,
      },
      {
        path: "/billing",
        element: <ProtectedRoute element={Billing} />,
      },
      {
        path: "/card",
        element: <ProtectedRoute element={Card} />,
      },
      {
        path: "/checkout",
        element: <ProtectedRoute element={Checkout} />,
      },
      {
        path: "/testing",
        element: <ProtectedRoute element={AddCarForm} />,
      },
      {
        path: "/add-car",
        element: <ProtectedRoute element={AddCar} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
