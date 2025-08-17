import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import PRODUCTS from "../data/Products.js";
import { money } from "../utils/money.js";

export default function Cart() {
  const { items, set, remove, subtotal, tax, shipping, total } = useCart();
  const ids = Object.keys(items);
  const empty = ids.length === 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_360px]">
      {/* Cart Items */}
      <section className="rounded-2xl backdrop-blur-lg bg-white/50 shadow-xl border border-white/30">
        <div className="p-5 border-b border-gray-200 font-semibold text-lg text-gray-800">
          🛒 Your Cart
        </div>
        <div className="divide-y divide-gray-200">
          {empty && (
            <div className="p-6 text-gray-600 text-center">
              Your cart is empty.
            </div>
          )}

          {ids.map((id) => {
            const { qty } = items[id];
            const p = PRODUCTS.find((x) => x.id === id) || items[id].product;
            return (
              <div
                key={id}
                className="p-5 flex items-center gap-5 hover:bg-white/70 transition rounded-xl"
              >
                {/* Product Thumbnail */}
                <div className="size-16 rounded-xl border border-gray-200 bg-white grid place-content-center text-2xl shadow-sm">
                  {p.emoji}
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{p.title}</div>
                  <div className="text-sm text-gray-600">{money(p.price)}</div>
                </div>

                {/* Quantity Input */}
                <input
                  type="number"
                  min={0}
                  value={qty}
                  onChange={(e) => set(p.id, parseInt(e.target.value || 0))}
                  className="w-20 rounded-lg border border-gray-300 px-3 py-1 text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                {/* Remove Button */}
                <button
                  onClick={() => remove(p.id)}
                  className="ml-2 text-xs font-medium bg-red-100 text-red-600 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        {/* Continue Shopping Button */}
        {!empty && (
          <div className="p-5 flex justify-end">
            <Link
              to="/"
              className="rounded-xl bg-gray-100 text-gray-700 px-4 py-2 font-medium shadow-sm hover:bg-gray-200 transition"
            >
              ← Continue Shopping
            </Link>
          </div>
        )}
      </section>

      {/* Order Summary */}
      <aside className="rounded-2xl backdrop-blur-lg bg-white/60 shadow-xl border border-white/30 h-fit p-6">
        <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-3">
          Order Summary
        </h3>

        <div className="mt-4 space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{money(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>{money(tax)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{money(shipping)}</span>
          </div>

          <div className="border-t border-gray-200 pt-3 font-semibold flex justify-between text-gray-900">
            <span>Total</span>
            <span>{money(total)}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <Link
          to="/checkout"
          className="mt-6 block text-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 font-semibold shadow-md hover:scale-[1.02] transition"
        >
          Proceed to Checkout
        </Link>
      </aside>
    </div>
  );
}
