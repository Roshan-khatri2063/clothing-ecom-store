import { useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import {
  mockProductDetail as product,
  mockProducts,
} from "../../utils/mockData";
import { formatPrice } from "../../utils/format";

const Thumbs = ({ images, mainImage, onSelect, className }) => (
  <div className={className}>
    {images.map((image, index) => (
      <button
        key={index}
        onClick={() => onSelect(image.url)}
        aria-label={`View image ${index + 1}`}
      >
        <img
          src={image.url}
          alt={image.altText || `Thumbnail ${index + 1}`}
          className={`h-20 w-20 rounded-lg border object-cover ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
        />
      </button>
    ))}
  </div>
);

// Day 2: receive the product as a prop / load by :id from the API.
const ProductsDetails = () => {
  const [mainImage, setMainImage] = useState(product.images[0].url);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const changeQty = (delta) => setQuantity((q) => Math.max(1, q + delta));

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart.");
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product added to the cart!");
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-4 md:p-6">
      <div className="mx-auto max-w-6xl rounded-lg bg-white p-4 md:p-8">
        <div className="flex flex-col md:flex-row">
          <Thumbs
            images={product.images}
            mainImage={mainImage}
            onSelect={setMainImage}
            className="mr-6 hidden flex-col space-y-4 md:flex"
          />

          <div className="md:w-1/2">
            <img
              src={mainImage}
              alt={product.name}
              className="mb-4 h-auto w-full rounded-lg object-cover"
            />
          </div>

          <Thumbs
            images={product.images}
            mainImage={mainImage}
            onSelect={setMainImage}
            className="mb-4 flex space-x-4 overflow-x-auto md:hidden"
          />

          <div className="md:ml-10 md:w-1/2">
            <h1 className="mb-2 font-display text-2xl font-semibold md:text-3xl">
              {product.name}
            </h1>

            {product.originalPrice && (
              <p className="mb-1 text-lg text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </p>
            )}
            <p className="mb-2 text-xl font-medium">
              {formatPrice(product.price)}
            </p>
            <p className="mb-4 text-gray-600">{product.description}</p>

            <div className="mb-4">
              <p className="text-gray-700">
                Color: <span className="font-medium">{selectedColor}</span>
              </p>
              <div className="mt-2 flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    aria-label={color}
                    aria-pressed={selectedColor === color}
                    className={`h-8 w-8 rounded-full border-2 ${selectedColor === color ? "ring-2 ring-black ring-offset-2" : "border-gray-300"}`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  />
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">Size</p>
              <div className="mt-2 flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selectedSize === size}
                    className={`rounded border px-4 py-2 ${selectedSize === size ? "bg-black text-white" : "hover:border-black"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">Quantity</p>
              <div className="mt-2 flex items-center space-x-4">
                <button
                  onClick={() => changeQty(-1)}
                  aria-label="Decrease quantity"
                  className="rounded bg-gray-200 px-3 py-1 text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => changeQty(1)}
                  aria-label="Increase quantity"
                  className="rounded bg-gray-200 px-3 py-1 text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className="btn-dark mb-4 w-full"
            >
              {isButtonDisabled ? "Adding..." : "Add to cart"}
            </button>

            <div className="mt-10 text-gray-700">
              <h2 className="mb-4 text-xl font-bold">Characteristics</h2>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{product.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{product.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl">
        <h2 className="mb-6 text-center font-display text-2xl font-semibold">
          You may also like
        </h2>
        <ProductGrid products={mockProducts.slice(0, 4)} />
      </div>
    </div>
  );
};
export default ProductsDetails;
