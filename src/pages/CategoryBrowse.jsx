import { useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CATEGORIES from "../data/Categories.js";
import PRODUCTS from "../data/Products.js";
import ProductCard from "../components/ProductCard.jsx";
import Sidebar from "../components/Sidebar.jsx";

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

export default function CategoryBrowse() {
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const q = useQuery().get("q") || "";

  const products = useMemo(() => {
    const base = id === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === id);
    const term = (q || "").toLowerCase();
    const filtered = term ? base.filter((p) => p.title.toLowerCase().includes(term)) : base;
    return filtered.map((p) => ({
      ...p,
      categoryName: CATEGORIES.find((c) => c.id === p.category)?.name || "",
    }));
  }, [id, q]);

  const catName = CATEGORIES.find((c) => c.id === id)?.name || "All Products";

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
      <Sidebar query={query} setQuery={setQuery} />

      <section className="min-h-[70vh] rounded-2xl bg-white p-4 ring-1 ring-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{catName}</h2>
          <div className="text-sm text-gray-600">{products.length} items</div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </div>
  );
}