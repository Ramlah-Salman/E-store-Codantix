import CategoryRow from "./CategoryRow.jsx";
import CATEGORIES from "../data/Categories.js";

export default function Sidebar({ query, setQuery }) {
  const filtered = !query
    ? CATEGORIES
    : CATEGORIES.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <aside className="lg:sticky lg:top-20 h-full">
      <div className="rounded-3xl bg-gray-50 p-4 shadow-sm ring-1 ring-gray-200">
        {/* Header */}
        <div className="px-2 pb-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <span>Categories for you</span>
          </div>

          {/* Search Input */}
          <div className="mt-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search categories…"
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
            />
          </div>
        </div>

        {/* Categories List */}
        <div className="max-h-[60vh] overflow-y-auto pr-1 space-y-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {filtered.map((c) => (
            <CategoryRow
              key={c.id}
              id={c.id}
              name={c.name}
              icon={c.icon}
              className="hover:bg-orange-50 rounded-xl transition-colors"
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
