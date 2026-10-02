import hero2 from "../../assets/hero2.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-cream">
      <img
        src={hero2}
        alt="Seasonal collection of outfits and accessories"
        className="h-[520px] w-full object-cover object-right md:h-[640px] lg:h-[700px]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/70 to-transparent md:via-cream/40">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-xl animate-fadeUp">
              <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl">
                Vacation <br />{" "}
                <span className="italic text-accent">ready.</span>
              </h1>
              <p className="mt-5 max-w-md text-base text-ink/70 md:text-lg">
                Effortless outfits for every escape — explore the new collection
                with fast worldwide shipping.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
              <Link to="#" className="btn-dark">
                Shop now
              </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
