import outfit5 from "../../assets/outfit5.jpg";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
        <div className="container mx-auto flex flex:col md:flex-row gap-8">
            {/* Womens Collection */}
            <div className="relative flex-1">
                <img 
                src={outfit5} 
                alt="Women's Collection" 
                className="w-full h-[700px] object-cover"
                />
            </div>

        </div>
    </section>
  )
}

export default GenderCollectionSection;