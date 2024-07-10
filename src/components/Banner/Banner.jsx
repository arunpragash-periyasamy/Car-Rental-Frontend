import carRight from "/car-right.png";

const Banner = () => {
  return (
    <div className="flex bg-slate-100 justify-center items-center gap-16 relative min-h-[40rem] overflow-hidden">
      <div className="px-4 lg:w-1/2 space-y-2">
        <div className="text-orange-400 text-3xl font-bold">Find Your Best</div>
        <div className=" text-3xl font-bold">Dream Car for Rental</div>
        <div className="text-sm">
          Experience the ultimate in comfort, performance, and sophistication
          with our luxury car rentals. From sleek sedans and stylish coupes to
          spacious SUVs and elegant convertibles, we offer a range of premium
          vehicles to suit your preferences and lifestyle.
        </div>
        <button className=" text-xs rounded border-solid border-2 p-2 border-black hover:shadow-lg hover:bg-orange-400 hover:text-slate-100">
          View All Cars{" "}
        </button>
      </div>
      <div className="hidden lg:block w-1/3 z-20">
        <img src={carRight} alt="Car Image" />
          </div>
          <div className="hidden lg:flex">
          <div className="absolute left-0 bottom-0 w-0 h-0 border-b-[8rem] border-r-[8rem] border-b-orange-400 border-r-transparent"></div>
          <div className="absolute right-0 top-0 lg:border-t-[40rem] lg:border-r-[30rem] lg:border-r-orange-400 lg:border-t-transparent"></div>
              <div className="absolute rounded border-t-[65px] border-r-[38rem] border-orange-400 right-28 -skew-y-[52deg]"></div>
          </div>
    </div>
  );
};

export default Banner;
