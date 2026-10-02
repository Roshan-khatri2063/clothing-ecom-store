import outfit1 from "../../assets/outfit1.jpg";
import outfit5 from "../../assets/outfit5.jpg";
import { Link } from "react-router-dom";

const collections = [
  {
    title: "Women's Collection",
    img: outfit1,
    to: "/collection/all?gender=Women",
    tag: "For her",
  },
  {
    title: "Men's Collection",
    img: outfit5,
    to: "/collection/all?gender=Men",
    tag: "For him",
  },
];

const GenderCollectionSection = () => (
  <section className="px-4 py-20 lg:px-0">
    <div className="container mx-auto">
      <div className="mb-10 text-center">
        <p className="eyebrow mb-3">Shop by category</p>
        <h2 className="font-display text-3xl font-semibold md:text-5xl">
          Find your style
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {collections.map(({ title, img, to, tag }) => (
          <Link
            key={title}
            to={to}
            className="group relative block overflow-hidden rounded-2xl bg-sand"
          >
            <img
              src={img}
              alt={title}
              className="h-[480px] w-full object-cover object-top transition duration-700 group-hover:scale-105 md:h-[640px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 text-white md:p-9">
              <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
                {tag}
              </span>
              <h3 className="font-display text-3xl font-semibold md:text-4xl">
                {title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest">
                Shop now{" "}
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
export default GenderCollectionSection;
