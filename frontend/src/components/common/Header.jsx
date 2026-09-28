import Topbar from "../layout/Topbar";
import Navbar from "./Navbar";

const Header = () => {
    return (
    <header className="border-b border-gray-300">
        {/**Topbar */}
        <Topbar />
        {/**navbar */}
        <Navbar />
        {/**card Drawer */}

    </header>

    );
};
export default Header;
