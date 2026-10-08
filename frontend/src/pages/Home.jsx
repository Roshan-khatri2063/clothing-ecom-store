import Hero from "../components/layout/Hero"
import GenderCollectionSection from "../components/products/GenderCollectionSection"
import NewArrivals from "../components/products/NewArrivals";
import PerksStrip from "../components/products/PerksStrip";
import ProductsDetails from "../components/products/ProductsDetails";

const Home = () => {
  return (
    <div>
        <Hero />
        <PerksStrip />
        <GenderCollectionSection />
        <NewArrivals />

      {/* Best Seller Section */}
      <h2>Best Seller</h2>
      <ProductsDetails />

    </div>
  )
}

export default Home;