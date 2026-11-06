import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/format";

// Accepts products with either `image` or `images`: [{ url, altText }]
const ProductGrid = ({ products }) => (
  <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 lg:grid-cols-4">
    {products.map((product) => {
      const img = (product.image || product.images)?.[0];
      return (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="group block"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-xl bg-sand">
            {img && (
              <img
                src={img.url}
                alt={img.altText || product.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            )}
          </div>
          <h3 className="mt-3 truncate text-sm font-medium capitalize">
            {product.name}
          </h3>
          <p className="mt-0.5 text-sm text-ink/60">
            {formatPrice(product.price)}
          </p>
        </Link>
      );
    })}
  </div>
);
export default ProductGrid;
