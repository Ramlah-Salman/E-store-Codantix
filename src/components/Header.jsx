import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Header() {
  const { totalQty } = useCart();
  const [query, setQuery] = useState("");
  const nav = useNavigate();

  function onSearch(e) {
    e.preventDefault();
    nav(`/category/all?q=${encodeURIComponent(query)}`);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-orange-500 grid place-content-center text-white font-bold text-lg shadow-md">E</div>
          <span className="font-bold text-lg text-gray-900">E-Store</span>
        </Link>

        {/* Search Bar */}
        <form onSubmit={onSearch} className="ml-auto flex-1 max-w-xl">
          <input
            type="text"
            className="w-full rounded-full border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-orange-500/40 placeholder-gray-400"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        {/* Nav Buttons */}
        <nav className="ml-4 flex items-center gap-3">
          {/* Cart */}
          <Link
            to="/cart"
            className="relative rounded-full p-2 hover:bg-gray-100 transition-shadow shadow-sm"
          >
            <span className="text-xl">🛒</span>
            {totalQty > 0 && (
              <span className="absolute -top-1 -right-1 text-xs bg-orange-500 text-white rounded-full px-2 py-0.5 font-semibold shadow">
                {totalQty}
              </span>
            )}
          </Link>

          {/* Checkout */}
          <Link
            to="/checkout"
            className="rounded-full bg-orange-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-orange-600 transition"
          >
            Checkout
          </Link>
        </nav>
      </div>
    </header>
  );
}
