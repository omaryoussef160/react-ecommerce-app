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
    <div className="min-h-screen">

      {/* Hero Search */}
      <section className="grain relative overflow-hidden bg-[#e7eee4] px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border-[26px] border-[#d2e1cf] opacity-80" />
        <div className="absolute right-[12%] top-12 hidden h-12 w-12 rotate-45 border border-[#78966d]/40 sm:block" />
        <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-[#f3e3c8] opacity-80" />
        <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[10px] font-bold uppercase tracking-[0.28em] text-[#78966d] lg:block">Living well — 2026</div>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="rounded-full border border-[#9ab392]/60 bg-white/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#5e7957]">Curated for everyday</span>

        <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-semibold text-[#27332a] tracking-tight">
          Things you’ll love to live with.
        </h1>
        <p className="text-sm text-[#687569]">Discover considered pieces for your space and routine · Page {page + 1}</p>

        {/* Search Input */}
        <div className="mt-3 flex items-center w-full max-w-xl bg-white/90
                        border border-white rounded-full px-5 py-3.5 gap-3 shadow-[0_12px_30px_rgba(65,85,61,0.12)]">
          <svg className="w-4 h-4 text-[#7b8e78] flex-shrink-0" fill="none"
               stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="bg-transparent flex-1 text-sm text-slate-700
                       placeholder:text-[#98a395] outline-none"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-[#7b8e78] hover:text-[#45603e] text-xs transition"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-label="Clear search">
                <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          )}
        </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs whitespace-nowrap font-semibold border transition-all duration-200
                ${activeFilter === f
                  ? "bg-[#27332a] border-[#27332a] text-white"
                  : "bg-white border-[#e4e0d9] text-[#667085] hover:border-[#9ab392] hover:text-[#45603e]"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-5 text-center py-16 text-[#7b8e78] text-sm">
              No products found
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-10 pb-10">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
            className="px-5 py-2.5 rounded-full border border-[#e4e0d9] bg-white
                       text-[#667085] text-xs hover:border-[#9ab392] hover:text-[#45603e]
                       disabled:opacity-30 transition-all"
          >
            Prev
          </button>

          <span className="text-xs text-[#7b8e78] px-1">Page {page + 1}</span>

          <button
            onClick={() => setPage(page + 1)}
            className="px-5 py-2.5 rounded-full text-xs font-semibold
                       bg-[#27332a] border border-[#27332a] text-white
                       hover:bg-[#45603e] transition-all"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}

export default Products;
