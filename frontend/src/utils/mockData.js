// Temporary placeholder data. Day 1 replaces every use of this with API calls.
const img = (n, alt) => [{ url: `https://picsum.photos/500/500?random=${n}`, altText: alt }];

export const mockProducts = [
  { id: 1, name: "Stylish jacket", price: 4200, image: img(1, "Stylish jacket") },
  { id: 2, name: "Classic denim", price: 3100, image: img(2, "Classic denim") },
  { id: 3, name: "Linen shirt", price: 2400, image: img(3, "Linen shirt") },
  { id: 4, name: "Cotton tee", price: 1200, image: img(4, "Cotton tee") },
  { id: 5, name: "Summer dress", price: 3600, image: img(5, "Summer dress") },
  { id: 6, name: "Chino shorts", price: 1800, image: img(6, "Chino shorts") },
  { id: 7, name: "Knit sweater", price: 2900, image: img(7, "Knit sweater") },
  { id: 8, name: "Wide-leg trousers", price: 3300, image: img(8, "Wide-leg trousers") },
];

export const mockProductDetail = {
  id: 1,
  name: "Stylish jacket",
  price: 4200,
  originalPrice: 4800,
  description: "A modern leather-look jacket with a clean cut and a soft lining. Pairs with everything.",
  brand: "Berserk",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "Red"],
  images: [
    { url: "https://picsum.photos/500/500?random=1", altText: "Stylish jacket front" },
    { url: "https://picsum.photos/500/500?random=2", altText: "Stylish jacket side" },
  ],
};

export const mockCart = [
  { id: "1-M-Red", productId: 1, name: "T-shirt", size: "M", color: "Red", quantity: 1, price: 1500, image: "https://picsum.photos/200?random=11" },
  { id: "2-L-Blue", productId: 2, name: "Jeans", size: "L", color: "Blue", quantity: 1, price: 3100, image: "https://picsum.photos/200?random=12" },
];
