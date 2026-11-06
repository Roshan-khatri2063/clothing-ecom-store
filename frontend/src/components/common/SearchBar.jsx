import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchTerm.trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open search"
        className="text-gray-700 hover:text-black"
      >
        <HiMagnifyingGlass className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] flex h-24 items-center justify-center bg-white shadow-md"
      role="search"
    >
      <form
        onSubmit={handleSearch}
        className="relative flex h-full w-full items-center justify-center px-4"
      >
        <div className="relative w-full max-w-xl">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for outfits, jackets, jeans…"
            aria-label="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg bg-gray-100 py-2.5 pl-4 pr-12 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-ink"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <HiMagnifyingGlass className="h-6 w-6" />
          </button>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close search"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
        >
          <HiMiniXMark className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
