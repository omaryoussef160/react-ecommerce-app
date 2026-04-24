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
      <div className="min-h-screen bg-[#f0f5ff] flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🛒</div>
          <h1 className="text-xl font-medium text-slate-700">
            Your cart is empty
          </h1>
          <p className="text-sm text-blue-300 mt-2">
            Add some products to get started
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f5ff] px-4 py-10">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-end mb-6">
          <h1 className="text-2xl font-medium text-slate-800 tracking-tight">
            Your cart
          </h1>
          <span className="text-xs text-blue-300">
            {items.length} {items.length === 1 ? "item" : "items"}
          </span>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white border border-[#e0eaff]
                         rounded-xl p-4 hover:border-blue-300
                         hover:shadow-[0_4px_16px_rgba(59,130,246,0.06)] transition-all"
            >

              {/* Thumbnail */}
              <div className="w-16 h-16 rounded-lg bg-blue-50 shrink-0
                              flex items-center justify-center overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h2 className="text-sm font-medium text-slate-700 truncate">
                  {item.title}
                </h2>
                <p className="text-sm text-blue-600 font-medium mt-0.5">
                  ${item.price}
                </p>
              </div>

              {/* Qty Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="w-7 h-7 rounded-lg border border-blue-100
                             text-slate-400 hover:border-blue-300
                             hover:text-blue-600 transition text-sm flex
                             items-center justify-center bg-white"
                >
                  −
                </button>

                <span className="text-sm font-medium text-slate-700 w-4 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="w-7 h-7 rounded-lg border border-blue-100
                             text-slate-400 hover:border-blue-300
                             hover:text-blue-600 transition text-sm flex
                             items-center justify-center bg-white"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="text-xs text-slate-300 hover:text-red-400
                           transition shrink-0 ml-2"
              >
                Remove
              </button>

            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-6 border-t border-blue-100 pt-5
                        flex justify-between items-center">
          <span className="text-sm text-slate-400">Total</span>
          <span className="text-xl font-medium text-blue-600">
            ${total.toFixed(2)}
          </span>
        </div>

        {/* Checkout */}
        <button className="mt-4 w-full bg-blue-600 text-white
                           py-3 rounded-xl text-sm font-medium
                           hover:bg-blue-700 transition
                           shadow-[0_2px_12px_rgba(59,130,246,0.25)]">
          Proceed to checkout
        </button>

      </div>
    </div>
  );
}

export default Cart;