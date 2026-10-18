import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const dragMoved = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: "1",
      name: "stylish jacket",
      price: "120",
      image: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "stylish jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "stylish jacket",
      price: "120",
      image: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "stylish jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "stylish jacket",
      price: "120",
      image: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "stylish jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "stylish jacket",
      price: "120",
      image: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "stylish jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "stylish jacket",
      price: "120",
      image: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "stylish jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "stylish jacket",
      price: "120",
      image: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "stylish jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "stylish jacket",
      price: "120",
      image: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "stylish jacket",
        },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragMoved.current = false;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const walk = e.pageX - scrollRef.current.offsetLeft - startX;
    if (Math.abs(walk) > 5) dragMoved.current = true;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => setIsDragging(false);

  // Stop a drag from being treated as a click on a product link
  const handleClickCapture = (e) => {
    if (dragMoved.current) e.preventDefault();
  };

  const scroll = (direction) => {
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const updateScrollButtons = () => {
    const c = scrollRef.current;
    if (!c) return;
    setCanScrollLeft(c.scrollLeft > 0);
    setCanScrollRight(c.scrollWidth > c.scrollLeft + c.clientWidth + 1);
  };

  useEffect(() => {
    const c = scrollRef.current;
    if (!c) return;
    c.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    updateScrollButtons();
    return () => {
      c.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const arrowCls = (enabled) =>
    `flex h-11 w-11 items-center justify-center rounded-full border transition ${
      enabled
        ? "border-ink/20 bg-white hover:border-ink hover:bg-ink hover:text-white"
        : "cursor-not-allowed border-ink/10 text-ink/25"
    }`;

  return (
    <section className="px-4 py-20 lg:px-0" aria-labelledby="new-arrivals">
      <div className="container mx-auto">
        <div className="relative mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">Explore New Arrivals</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Fresh pieces added this week. Drag, swipe or use the arrows to
            browse the latest drops.
          </p>
          <div className="absolute bottom-0 right-0 hidden gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={arrowCls(canScrollLeft)}
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={arrowCls(canScrollRight)}
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className={`no-scrollbar flex gap-4 overflow-x-auto pb-2 md:gap-6 ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onClickCapture={handleClickCapture}
        >
          {newArrivals.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              draggable="false"
              className="group relative min-w-[72%] overflow-hidden rounded-2xl bg-sand sm:min-w-[45%] lg:min-w-[31%]"
            >
              <img
                src={product.image[0]?.url}
                alt={product.image[0]?.altText || product.name}
                draggable="false"
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                New
              </span>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-5 pt-14 text-white">
                <h4 className="font-medium capitalize">{product.name}</h4>
                <p className="mt-1 text-sm text-white/80">$ {product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
