import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItem
} from "../redux/slices/cartSlice";

function Cart() {

  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">🛒</div>
        <h1 className="text-xl font-medium text-gray-800">
          Your cart is empty
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          Add some products to get started
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="flex justify-between items-end mb-6">
        <h1 className="text-2xl font-medium text-gray-900">
          Your cart
        </h1>
        <span className="text-sm text-gray-400">
          {items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white border border-gray-100 
                       rounded-xl p-4 hover:border-gray-200 transition"
          >

            {/* Thumbnail */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-16 h-16 rounded-lg object-cover bg-gray-50 shrink-0"
            />

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-medium text-gray-800 truncate">
                {item.title}
              </h2>
              <p className="text-sm text-violet-800 font-medium mt-0.5">
                ${item.price}
              </p>
            </div>

            {/* Qty Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="w-7 h-7 rounded-lg border border-gray-200 
                           text-gray-500 hover:border-gray-400 
                           hover:text-gray-800 transition text-sm flex 
                           items-center justify-center"
              >
                −
              </button>

              <span className="text-sm font-medium text-gray-700 w-4 text-center">
                {item.quantity}
              </span>

              <button
                onClick={() => dispatch(increaseQty(item.id))}
                className="w-7 h-7 rounded-lg border border-gray-200 
                           text-gray-500 hover:border-gray-400 
                           hover:text-gray-800 transition text-sm flex 
                           items-center justify-center"
              >
                +
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => dispatch(removeItem(item.id))}
              className="text-xs text-gray-400 hover:text-red-500 
                         transition shrink-0 ml-2"
            >
              Remove
            </button>

          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-6 border-t border-gray-100 pt-5 
                      flex justify-between items-center">
        <span className="text-sm text-gray-500">Total</span>
        <span className="text-xl font-medium text-violet-800">
          ${total.toFixed(2)}
        </span>
      </div>

      {/* Checkout */}
      <button className="mt-4 w-full bg-violet-800 text-violet-100 
                         py-3 rounded-xl text-sm font-medium 
                         hover:bg-violet-900 transition">
        Proceed to checkout
      </button>

    </div>
  );
}

export default Cart;