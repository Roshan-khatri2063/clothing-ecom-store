const selectedProduct = {
  name: "Stylish jacket",
  price: 120,
  originalPrice: 130,
  description: "New Modern look jackets for you",
  brand: "Berserk",
  Materials: "leather",
  size: ["s", "x", "xl", "l"],
  colors: ["Black", "Red"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish jacket",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish jacket 2",
    },
  ],
};

const ProductsDetails = () => {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left Thumbnail */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={selectedProduct.images[0]?.url}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile Thumbnail */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
