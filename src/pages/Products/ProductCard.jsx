import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl border border-[#e0eaff] overflow-hidden
                    hover:border-blue-300 hover:shadow-[0_4px_16px_rgba(59,130,246,0.08)]
                    transition-all duration-200 group cursor-pointer">

      {/* Image */}
      <div className="bg-blue-50/60 h-36 flex items-center justify-center overflow-hidden px-4 py-3">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain
                     group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-3 border-t border-blue-50">

        <span className="text-[10px] font-medium text-blue-500 bg-blue-50
                         px-2 py-0.5 rounded-full capitalize">
          {product.category}
        </span>

        <h2 className="font-medium text-slate-800 text-xs line-clamp-1 mt-1.5">
          {product.title}
        </h2>

        <div className="flex items-center justify-between mt-3">
          <span className="text-blue-600 font-semibold text-sm">
            ${product.price}
          </span>

          <Link
            to={`/products/${product.id}`}
            className="text-[11px] font-medium px-2.5 py-1 rounded-lg
                       bg-blue-50 text-blue-600 border border-blue-200
                       hover:bg-blue-100 hover:border-blue-300 transition-all"
          >
            View
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;