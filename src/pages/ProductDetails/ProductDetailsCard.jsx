import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

function ProductDetailsCard({ product }) {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl 
                    p-6 md:p-10 flex flex-col md:flex-row gap-10">

      {/* Image */}
      <div className="w-full md:w-1/2 bg-gray-50 rounded-xl 
                      flex items-center justify-center p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full max-w-sm rounded-lg object-cover 
                     hover:scale-105 transition duration-300"
        />
      </div>

      {/* Info */}
      <div className="w-full md:w-1/2 flex flex-col">

        {/* Category + Brand */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-violet-50 text-violet-700 
                           px-2.5 py-1 rounded-full capitalize">
            {product.category}
          </span>
          {product.brand && (
            <span className="text-xs text-gray-400">
              by {product.brand}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl font-medium text-gray-900">
          {product.title}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-2">
          <span className="text-sm text-amber-500 font-medium">
            ★ {product.rating}
          </span>
          <span className="text-xs text-gray-400">
            · {product.stock} in stock
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-4" />

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">
          {product.description}
        </p>

        {/* Price */}
        <p className="text-3xl font-medium text-violet-800 mt-6">
          ${product.price}
        </p>

        {/* Discount */}
        {product.discountPercentage && (
          <p className="text-xs text-green-600 mt-1">
            {product.discountPercentage}% off applied
          </p>
        )}

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-violet-800 text-violet-100 py-2.5 
                       rounded-lg hover:bg-violet-900 transition text-sm font-medium"
          >
            Add to cart
          </button>

          <button
            className="flex-1 border border-gray-200 text-gray-600 py-2.5 
                       rounded-lg hover:border-gray-400 hover:text-gray-800 
                       transition text-sm"
          >
            Buy now
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetailsCard;