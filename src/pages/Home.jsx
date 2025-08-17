import { useState } from "react";
import { Link } from "react-router-dom";
import CATEGORIES from "../data/Categories.js";
import PRODUCTS from "../data/Products.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Home() {
  const [q, setQ] = useState("");
  const featured = PRODUCTS.slice(0, 6).map((p) => ({
    ...p,
    categoryName: CATEGORIES.find((c) => c.id === p.category)?.name || "",
  }));

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-orange-500/90 to-red-500/90 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-[280px_minmax(0,1fr)] items-center">
          {/* Sidebar categories */}
          <div className="hidden md:block">
            <div className="rounded-2xl bg-white p-3 shadow-lg backdrop-blur">
              <div className="flex items-center gap-2 px-2 pb-2">
                <span className="text-lg">📂</span>
                <h3 className="text-sm font-semibold text-gray-900">
                  Browse Categories
                </h3>
              </div>
              <div className="space-y-1">
                {CATEGORIES.slice(0, 7).map((c) => (
                  <Link
                    key={c.id}
                    to={`/category/${c.id}`}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-800 hover:bg-orange-100 hover:text-orange-600 transition"
                  >
                    <span className="text-xl">{c.icon}</span>
                    <span className="text-sm font-medium">{c.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Hero content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Find <span className="text-yellow-300">Suppliers</span> & Products
              You’ll Love ✨
            </h1>
            <p className="mt-3 text-lg text-orange-100">
              One stop shop for all your needs
            </p>
            <div className="mt-6 flex gap-2 max-w-lg mx-auto md:mx-0">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products…"
                className="flex-1 rounded-xl border-none px-4 py-3 text-gray-800 shadow-md outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <Link
                to={`/category/all?q=${encodeURIComponent(q)}`}
                className="rounded-xl bg-yellow-400 text-gray-900 px-6 py-3 font-semibold hover:bg-yellow-300 transition"
              >
                Search
              </Link>
            </div>

            {/* Country selector */}
            <div className="mt-4 text-sm">
              Delivering to: <span className="font-medium">Pakistan 🇵🇰</span>{" "}
              <button className="ml-2 underline hover:text-yellow-200">
                Change
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">🔥 Featured Products</h2>
          <Link
            to="/category/all"
            className="text-sm text-orange-600 hover:underline"
          >
            Browse all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-extrabold text-gray-800">10k+</p>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-gray-800">5k+</p>
            <p className="text-gray-600">Trusted Suppliers</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-gray-800">50k+</p>
            <p className="text-gray-600">Products</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-gray-800">99.9%</p>
            <p className="text-gray-600">Secure Transactions</p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-center">Why Shop With Us?</h2>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="text-4xl">🚚</p>
            <h3 className="mt-3 font-semibold text-lg">Fast Delivery</h3>
            <p className="text-sm text-gray-600">
              Get your orders delivered quickly and safely.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="text-4xl">💳</p>
            <h3 className="mt-3 font-semibold text-lg">Secure Payments</h3>
            <p className="text-sm text-gray-600">
              Multiple safe & trusted payment methods.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="text-4xl">🔄</p>
            <h3 className="mt-3 font-semibold text-lg">Easy Returns</h3>
            <p className="text-sm text-gray-600">
              Hassle-free returns within 14 days.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-orange-600 to-red-500 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            🎉 Summer Sale is Live!
          </h2>
          <p className="mt-2 text-lg">Up to 50% off on selected items</p>
          <Link
            to="/category/all"
            className="inline-block mt-6 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl shadow hover:scale-105 hover:shadow-lg transition"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
