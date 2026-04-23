import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Beauty", "Fragrances", "Furniture", "Groceries"];

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?limit=10&skip=${page * 10}`)
      .then((res) => {
        setProducts(res.data.products);
      });
  }, [page]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* Header */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-medium text-gray-900">
            Explore Products
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Showing page {page + 1} results
          </p>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex gap-2 flex-wrap mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm border transition
              ${activeFilter === f
                ? "bg-violet-800 border-violet-800 text-violet-200"
                : "bg-white border-gray-200 text-gray-500 hover:border-gray-400"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-3
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          className="px-5 py-2 rounded-lg border border-gray-200
                     bg-white text-gray-600 hover:border-gray-400
                     disabled:opacity-30 transition text-sm"
        >
          Prev
        </button>

        <span className="text-sm font-medium text-gray-500">
          Page {page + 1}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          className="px-5 py-2 rounded-lg text-sm
                     bg-violet-800 text-violet-100
                     hover:bg-violet-900 transition"
        >
          Next
        </button>
      </div>

    </div>
  );
}

export default Products;