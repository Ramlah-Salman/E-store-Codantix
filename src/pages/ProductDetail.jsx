import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import PRODUCTS from "../data/Products.js";
import CATEGORIES from "../data/Categories.js";
import { useCart } from "../context/CartContext.jsx";
import { money } from "../utils/money.js";

export default function ProductDetail() {
  const { id } = useParams();
  const { add } = useCart();
  const [tab, setTab] = useState("description");

  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return <div className="mx-auto max-w-6xl px-4 py-10 text-center text-gray-500">Product not found.</div>;
  const cat = CATEGORIES.find((c) => c.id === p.category);

  // Related products (same category, exclude current)
  const related = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      
      {/* Main Product Section */}
      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange-100 to-orange-200 shadow-lg flex items-center justify-center text-8xl transition-transform hover:scale-105">
          {p.emoji}
        </div>

        <div className="space-y-4">
          <div className="text-sm text-orange-500 font-semibold">{cat?.name}</div>
          <h1 className="text-3xl font-bold">{p.title}</h1>
          <div className="text-3xl font-extrabold text-gray-900">{money(p.price)}</div>
          <p className="text-gray-600 leading-relaxed">
            {p.description || "This is a demo product description. Highlight key features, benefits, or specs to engage the customer."}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => add(p, 1)}
              className="flex-1 rounded-xl bg-orange-500 text-white px-6 py-3 font-medium shadow hover:bg-orange-600 transition"
            >
              Add to Cart
            </button>
            <Link
              to="/cart"
              className="flex-1 rounded-xl border border-gray-300 px-6 py-3 text-center font-medium hover:bg-gray-100 transition"
            >
              Go to Cart
            </Link>
          </div>

          {/* Highlights */}
          <ul className="mt-6 text-sm text-gray-700 list-disc pl-5 space-y-2">
            <li>Free returns within 7 days</li>
            <li>Ships worldwide</li>
            <li>1-year limited warranty</li>
          </ul>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex gap-6 border-b border-gray-200 mb-4">
          {["description", "reviews", "specs"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-2 font-medium ${
                tab === t ? "border-b-2 border-orange-500 text-orange-500" : "text-gray-500 hover:text-orange-500"
              } transition`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <div className="text-gray-700">
          {tab === "description" && <p>{p.description || "Detailed product description goes here."}</p>}
          {tab === "reviews" && (
            <div>
              <p>No reviews yet. Be the first to review!</p>
            </div>
          )}
          {tab === "specs" && (
            <ul className="list-disc pl-5 space-y-1">
              <li>Category: {cat?.name}</li>
              <li>Price: {money(p.price)}</li>
              <li>Warranty: 1-year limited</li>
            </ul>
          )}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r.id}
                to={`/product/${r.id}`}
                className="rounded-2xl bg-white shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <div className="text-6xl mb-2">{r.emoji}</div>
                <div className="font-medium">{r.title}</div>
                <div className="text-sm text-gray-500">{money(r.price)}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
