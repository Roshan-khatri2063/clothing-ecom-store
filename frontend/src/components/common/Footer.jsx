const Footer = () => {
    return <footer className="border-t py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
            <div>
                <h3 className="text-lg text-gray-800 mb-4">Berserk clothing</h3>
                <p className=" text-gray-500 mb-4">
                    New products are available, exclusive events, and offers
                </p>

                <p className="font-medium text-sm text-orange-600 mb-4">
                    Sign up and Get 15% off for the first order.
                </p>

                {/* NewsLetter Form */}

                <form className="flex">
                    <input type="email"
                    placeholder="Enter Your Email"
                    className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" required

                    />
                    <button type="submit" className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all">
                        Subscribe
                    </button>

                </form>

            </div>
        </div>
    </footer>
};
export default Footer;