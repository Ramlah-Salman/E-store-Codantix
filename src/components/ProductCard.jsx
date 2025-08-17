import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { money } from "../utils/money.js";

export default function ProductCard({ p }) {
  const { add } = useCart();
  const navigate = useNavigate();

  function handleQuickView() {
    navigate(`/product/${p.id}`);
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden flex flex-col group">
      
      {/* Product Image */}
      <Link
        to={`/product/${p.id}`}
        className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 grid place-content-center text-6xl"
      >
        {p.emoji}
      </Link>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col gap-2">
        <Link
          to={`/product/${p.id}`}
          className="font-semibold line-clamp-2 hover:text-orange-500 transition"
        >
          {p.title}
        </Link>
        <div className="text-sm text-gray-500">{p.categoryName}</div>
        <div className="text-lg font-bold text-gray-900 mt-2">{money(p.price)}</div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-3">
          {/* Add to Cart Button */}
          <button
            onClick={() => add(p, 1)}
            className="flex-1 py-2 text-sm font-semibold rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:scale-105 hover:shadow-xl transition transform"
          >
            Add to Cart
          </button>

          {/* Quick View Button */}
          <button
            onClick={handleQuickView}
            className="flex-1 py-2 text-sm font-semibold rounded-2xl border-2 border-gray-300 text-gray-800 hover:bg-gray-100 hover:scale-105 transition transform"
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
}
