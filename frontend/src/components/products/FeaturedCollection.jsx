import { Link } from "react-router-dom";
import featured from "../../assets/hero1.jpg";

const FeaturedCollection = () => (
  <section className="px-4 py-16 lg:px-0">
    <div className="container mx-auto flex flex-col-reverse items-center overflow-hidden rounded-3xl bg-green-50 lg:flex-row">
      <div className="p-8 text-center lg:w-1/2 lg:text-left">
        <p className="eyebrow mb-2">Comfort and style</p>
        <h2 className="mb-6 font-display text-4xl font-semibold lg:text-5xl">
          Apparel made for your everyday life
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          Discover high-quality, comfortable clothing that effortlessly blends
          fashion and function. Designed to make you look and feel great every
          day.
        </p>
        <Link to="/collection" className="btn-dark">
          Shop now
        </Link>
      </div>
      <div className="lg:w-1/2">
        <img
          src={featured}
          alt="Featured collection"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);
export default FeaturedCollection;
