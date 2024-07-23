
import CheckoutProgress from "../components/Checkout/Checkout";
import Header from "../components/Header/Header";

const Checkout = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-900 h-20 text-white font-bold text-2xl flex justify-center items-center">
        <h1>Checkout</h1>
      </div>
      <CheckoutProgress />
    </div>
  );
};

export default Checkout;
