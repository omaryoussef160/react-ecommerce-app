import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100
                    overflow-hidden hover:border-gray-300 transition duration-200 group">

      {/* Image */}
      <div className="overflow-hidden bg-gray-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-36 w-full object-cover
                     group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-3">

        {/* Category Badge */}
        <span className="text-xs text-violet-700 bg-violet-50 
                         px-2 py-0.5 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="font-medium text-gray-800 text-sm line-clamp-1 mt-1.5">
          {product.title}
        </h2>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-violet-800 font-semibold text-sm">
            ${product.price}
          </span>

          <Link
            to={`/products/${product.id}`}
            className="text-xs px-3 py-1.5 rounded-lg
                       bg-violet-800 text-violet-100
                       hover:bg-violet-900 transition"
          >
            View
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;