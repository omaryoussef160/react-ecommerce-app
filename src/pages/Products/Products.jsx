import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filters = ["All", "Beauty", "Fragrances", "Furniture", "Groceries"];

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=10&skip=${page * 10}`)
      .then((res) => setProducts(res.data.products));
  }, [page]);

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = activeFilter === "All" ||
      p.category.toLowerCase() === activeFilter.toLowerCase();
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-[#f0f5ff]">

      {/* Hero Search */}
      <div className="bg-gradient-to-b from-blue-100 to-[#f0f5ff]
                      px-6 pt-10 pb-8 flex flex-col items-center gap-3">

        <h1 className="text-xl font-medium text-[#1e3a5f] tracking-tight">
          Explore Products
        </h1>
        <p className="text-xs text-blue-300">Showing page {page + 1} results</p>

        {/* Search Input */}
        <div className="flex items-center w-full max-w-md bg-white
                        border border-blue-200 rounded-xl px-4 py-2.5 gap-3
                        shadow-[0_2px_12px_rgba(59,130,246,0.08)]">
          <svg className="w-4 h-4 text-blue-300 flex-shrink-0" fill="none"
               stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="bg-transparent flex-1 text-sm text-slate-700
                       placeholder:text-blue-300 outline-none"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-blue-300 hover:text-blue-500 text-xs transition"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Filter Pills */}
        <div className="flex gap-2 flex-wrap mb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200
                ${activeFilter === f
                  ? "bg-blue-50 border-blue-300 text-blue-600 font-medium"
                  : "bg-white border-blue-100 text-slate-500 hover:border-blue-300 hover:text-blue-500"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-5 text-center py-16 text-blue-300 text-sm">
              No products found
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-10 pb-10">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
            className="px-5 py-2 rounded-xl border border-blue-100 bg-white
                       text-slate-500 text-xs hover:border-blue-300 hover:text-blue-500
                       disabled:opacity-30 transition-all"
          >
            Prev
          </button>

          <span className="text-xs text-blue-300 px-1">Page {page + 1}</span>

          <button
            onClick={() => setPage(page + 1)}
            className="px-5 py-2 rounded-xl text-xs font-medium
                       bg-blue-50 border border-blue-200 text-blue-600
                       hover:bg-blue-100 transition-all"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}

export default Products;