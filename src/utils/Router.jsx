import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import CarDetailPage from "../pages/CarDetailPage";
import BillingInfoForm from "../components/BillingInForm/BillingInForm";
import Card from "../components/Card/Card";
import Checkout from "../pages/Checkout";
import CarDetail from "../components/CarDetail/CarDetail";

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
        path: "/car",
        element: <CarDetailPage />,
      },
      {
        path: "/billing",
        element: <BillingInfoForm />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/testing",
        element: <CarDetail />,
      },
    ],
  },
]);

export default router;