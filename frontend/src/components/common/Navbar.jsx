import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import SearchBar from "./SearchBar";
import CartDrawer from "../layout/CartDrawer";
import { NAV_LINKS, SITE } from "../../config/site";
import { mockCart } from "../../utils/mockData";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useLockBodyScroll(menuOpen);

  const cartCount = mockCart.reduce((n, i) => n + i.quantity, 0);

  const linkCls =
    "text-sm font-medium uppercase text-gray-700 hover:text-black";

  return (
    <>
      <nav
        className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6"
        aria-label="Main"
      >
        <Link to="/" className="font-display text-2xl font-semibold">
          {SITE.name}
          <span className="text-accent">.</span>
        </Link>

        <div className="hidden space-x-6 md:flex">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.label} to={l.to} className={linkCls}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/profile" aria-label="Account" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          <button
            onClick={() => setCartOpen(true)}
            aria-label={`Open cart, ${cartCount} items`}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-600" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-Topbar-red px-1 text-[11px] text-white">
                {cartCount}
              </span>
            )}
          </button>

          <SearchBar />

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden"
          >
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        inert={!menuOpen}
        aria-hidden={!menuOpen}
        className={`fixed left-0 top-0 z-50 h-full w-3/4 transform bg-white shadow-lg transition-transform duration-300 sm:w-1/2 md:w-1/3 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="mb-4 text-xl font-semibold">Menu</h2>
          <nav className="space-y-4" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-600 hover:text-black"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navbar;
