import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

function ProductDetailsCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white border border-[#e0eaff] rounded-2xl
                    p-6 md:p-10 flex flex-col md:flex-row gap-10
                    shadow-[0_4px_24px_rgba(59,130,246,0.06)]">

      {/* Image */}
      <div className="w-full md:w-1/2 bg-blue-50/60 rounded-xl
                      flex items-center justify-center p-8 min-h-[280px]">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full max-w-sm object-contain
                     hover:scale-105 transition duration-300"
        />
      </div>

      {/* Info */}
      <div className="w-full md:w-1/2 flex flex-col">

        {/* Category + Brand */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-50 text-blue-500
                           px-2.5 py-1 rounded-full capitalize border border-blue-100">
            {product.category}
          </span>
          {product.brand && (
            <span className="text-xs text-slate-400">by {product.brand}</span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl font-medium text-slate-800">
          {product.title}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-2">
          <span className="text-sm text-amber-400 font-medium">
            ★ {product.rating}
          </span>
          <span className="text-xs text-slate-400">
            · {product.stock} in stock
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-50 my-4" />

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed">
          {product.description}
        </p>

        {/* Price */}
        <p className="text-3xl font-medium text-blue-600 mt-6">
          ${product.price}
        </p>

        {/* Discount */}
        {product.discountPercentage && (
          <p className="text-xs text-green-500 mt-1">
            {product.discountPercentage}% off applied
          </p>
        )}

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="flex-1 bg-blue-600 text-white py-2.5
                       rounded-xl hover:bg-blue-700 transition text-sm font-medium
                       shadow-[0_2px_12px_rgba(59,130,246,0.25)]"
          >
            Add to cart
          </button>

          <button
            className="flex-1 border border-blue-100 text-slate-500 py-2.5
                       rounded-xl hover:border-blue-300 hover:text-blue-600
                       transition text-sm bg-white"
          >
            Buy now
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetailsCard;