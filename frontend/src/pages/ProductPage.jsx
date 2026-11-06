import usePageTitle from "../hooks/usePageTitle";
import ProductsDetails from "../components/products/ProductsDetails";

// Day 2: load the product by :id from the API. For now it renders mock data.
const ProductPage = () => {
  usePageTitle("Product");
  return <ProductsDetails />;
};
export default ProductPage;
