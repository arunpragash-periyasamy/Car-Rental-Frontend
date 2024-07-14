import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import CarDetailPage from "../pages/CarDetailPage";
import BillingInfoForm from "../components/BillingInForm/BillingInForm";
import Card from "../components/Card/Card";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/car",
                element: <CarDetailPage />
            },
            {
                path: "/billing",
                element: <BillingInfoForm />
            },
            {
                path: "/card",
                element: <Card />
            }
        ]
    }
])

export default router;