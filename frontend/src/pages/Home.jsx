import Hero from "../components/layout/Hero"
import GenderCollectionSection from "../components/products/GenderCollectionSection"
import NewArrivals from "../components/products/NewArrivals";
import PerksStrip from "../components/products/PerksStrip";
import ProductGrid from "../components/products/ProductGrid";
import ProductsDetails from "../components/products/ProductsDetails";

const placeholderProducts = [
  {
    _id: 1,
    name: "product 1",
    price: 100,
    image: [{url: "https://picsum.photos/500/500?random=2"}],
  },
  {
    _id: 2,
    name: "product 2",
    price: 100,
    image: [{url: "https://picsum.photos/500/500?random=3"}],
  },
  {
    _id: 3,
    name: "product 3",
    price: 100,
    image: [{url: "https://picsum.photos/500/500?random=5"}],
  },
  {
    _id: 4,
    name: "product 4",
    price: 100,
    image: [{url: "https://picsum.photos/500/500?random=6"}],
  },
  {
    _id: 5,
    name: "product 1",
    price: 100,
    image: [{url: "https://picsum.photos/500/500?random=4"}],
  },
  {
    _id: 6,
    name: "product 2",
    price: 100,
    image: [{url: "https://picsum.photos/500/500?random=7"}],
  },
  {
    _id: 7,
    name: "product 3",
    price: 100,
    image: [{url: "https://picsum.photos/500/500?random=8"}],
  },
  {
    _id: 8,
    name: "product 4",
    price: 100,
    image: [{url: "https://picsum.photos/500/500?random=9"}],
  },
]

const Home = () => {
  return (
    <div>
        <Hero />
        <PerksStrip />
        <GenderCollectionSection />
        <NewArrivals />

      {/* Best Seller Section */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductsDetails />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Womens
        </h2>
        <ProductGrid products={placeholderProducts}/>
      </div>

    </div>
  )
}

export default Home;