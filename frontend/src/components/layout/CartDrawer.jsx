import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import CartContents from "../cart/CartContents";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

const CartDrawer = ({ open, onClose }) => {
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} />
      )}
      <aside
        inert={!open}
        aria-hidden={!open}
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-50 flex h-full w-4/5 transform flex-col bg-white shadow-lg transition-transform duration-300 sm:w-1/2 md:w-[30rem] ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="font-display text-xl font-semibold">Your cart</h2>
          <button onClick={onClose} aria-label="Close cart">
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4">
          <CartContents />
        </div>

        <div className="sticky bottom-0 border-t bg-white p-4">
          <Link to="/checkout" onClick={onClose} className="btn-dark w-full">
            Checkout
          </Link>
          <Link
            to="/cart"
            onClick={onClose}
            className="mt-2 block text-center text-sm text-gray-600 underline hover:text-ink"
          >
            View full cart
          </Link>
          <p className="mt-2 text-center text-xs tracking-tight text-gray-500">
            Shipping and discount codes are calculated at checkout.
          </p>
        </div>
      </aside>
    </>
  );
};
export default CartDrawer;
