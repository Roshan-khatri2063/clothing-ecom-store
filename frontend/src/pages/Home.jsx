import Hero from "../components/layout/Hero"
import GenderCollectionSection from "../components/products/GenderCollectionSection"
import PerksStrip from "../components/products/PerksStrip";

const Home = () => {
  return (
    <div>
        <Hero />
        <PerksStrip />
        <GenderCollectionSection />
    </div>
  )
}

export default Home;