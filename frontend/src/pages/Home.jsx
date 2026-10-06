import Hero from "../components/layout/Hero"
import GenderCollectionSection from "../components/products/GenderCollectionSection"
import NewArrivals from "../components/products/NewArrivals";
import PerksStrip from "../components/products/PerksStrip";

const Home = () => {
  return (
    <div>
        <Hero />
        <PerksStrip />
        <GenderCollectionSection />
        <NewArrivals />
    </div>
  )
}

export default Home;