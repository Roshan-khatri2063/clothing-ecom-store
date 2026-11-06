import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiShoppingBag,
} from "react-icons/hi2";

const features = [
  {
    Icon: HiShoppingBag,
    title: "Free international shipping",
    text: "On all orders over Rs. 5,000",
  },
  {
    Icon: HiArrowPathRoundedSquare,
    title: "30-day returns",
    text: "100% money-back guarantee",
  },
  {
    Icon: HiOutlineCreditCard,
    title: "Secure checkout",
    text: "100% secured checkout process",
  },
];

const FeaturesSection = () => (
  <section className="bg-white px-4 py-16">
    <div className="container mx-auto grid grid-cols-1 gap-8 text-center md:grid-cols-3">
      {features.map(({ Icon, title, text }) => (
        <div key={title} className="flex flex-col items-center">
          <div className="mb-4 rounded-full bg-cream p-4">
            <Icon className="h-6 w-6 text-accent" />
          </div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide">
            {title}
          </h3>
          <p className="text-sm text-gray-600">{text}</p>
        </div>
      ))}
    </div>
  </section>
);
export default FeaturesSection;
