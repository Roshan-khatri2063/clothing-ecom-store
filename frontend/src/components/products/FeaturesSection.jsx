import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* feature 1*/}
        <div className="flex flex-cols items-center">
          <div className="p-4 ronded-full mb-4">
            <HiShoppingBag className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">
            FREE INTERNATIONAL SHIPPING
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            on all order over
          </p>
        </div>

        {/* feature 2*/}
        <div className="flex flex-cols items-center">
          <div className="p-4 ronded-full mb-4">
            <HiArrowPathRoundedSquare className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">
            30 days Return
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
           100% price gurentee
          </p>
        </div>

        {/* feature 3*/}
        <div className="flex flex-cols items-center">
          <div className="p-4 ronded-full mb-4">
            <HiOutlineCreditCard className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">
            SECURED CHECKOUT
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            100% SECURED CHECKOUT PROCESS
          </p>
        </div>


      </div>
    </section>
  );
};

export default FeaturesSection;
