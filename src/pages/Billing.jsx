import { Form } from "antd";
import Header from "../components/Header/Header";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import CarDetail from "../components/CarDetail/CarDetail";
import BillingForms from "../components/BillingForms/BillingForms";


const Billing = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-900 h-20 text-white font-bold text-2xl flex justify-center items-center">
        <h1>Billing</h1>
      </div>
      <div className="mx-auto pb-9 lg:max-w-5xl">
        <ProgressBar />
        <div className="flex  flex-col lg:flex-row space-y-4 lg:gap-16">
          <div>
          <CarDetail />
          </div>
          <div className="min-w-full lg:min-w-[42rem]">
            <BillingForms/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
