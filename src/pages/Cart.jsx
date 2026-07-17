import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-5">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#e7eee4] text-[#55734e]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h2l1.4 10.2a2 2 0 0 0 2 1.8h8.9a2 2 0 0 0 1.9-1.5L21 8H6.2M9 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
            </svg>
          </div>
          <h1 className="font-['Playfair_Display'] text-2xl font-semibold text-[#27332a]">
            Your cart is empty
          </h1>
          <p className="text-sm text-[#7b8e78] mt-2">
            Add some products to get started
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-5 sm:px-8 py-10 sm:py-14">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#78966d]">Your selection</span><h1 className="mt-1 font-['Playfair_Display'] text-3xl font-semibold tracking-tight text-[#27332a]">Your cart</h1></div>
          <span className="rounded-full bg-[#e7eee4] px-3 py-1.5 text-xs font-bold text-[#597651]">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
        <div>
          <div className="mb-4 flex items-center gap-3 rounded-2xl border border-[#d8e4d4] bg-[#eef5eb] px-4 py-3 text-sm text-[#45603e]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#597651]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M12 4v16" /></svg></span>
            <span><strong>Good choice.</strong> Your pieces are reserved while you shop.</span>
          </div>
          <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative grid grid-cols-[88px_1fr] gap-4 rounded-[1.35rem] border border-[#e7e3dc] bg-white p-4
                         transition-all hover:border-[#b9cfb4] hover:shadow-[0_12px_28px_rgba(38,51,39,0.08)] sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-5 sm:p-5"
            >

              <button onClick={() => dispatch(removeItem(item.id))} aria-label={`Remove ${item.title} from cart`} className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#eadfda] bg-[#fffafa] text-[#b96b61] transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:right-4 sm:top-4"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M10 11v6m4-6v6M9 7l1-3h4l1 3m-9 0 1 13h10l1-13" /></svg></button>

              {/* Thumbnail */}
              <div className="h-[88px] w-[88px] rounded-2xl bg-[#f1f0eb]
                              flex items-center justify-center overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="min-w-0 self-center pr-9 sm:pr-0">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#e7eee4] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.09em] text-[#597651]">{item.category}</span>
                  {item.brand && <span className="truncate text-[10px] font-semibold uppercase tracking-[0.08em] text-[#98a395]">{item.brand}</span>}
                </div>
                <h2 className="mt-2 text-base font-['Playfair_Display'] font-semibold text-[#27332a] line-clamp-1">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs font-medium text-[#7b8e78]">
                  ${item.price} each
                </p>
              </div>

              <div className="col-span-2 flex items-center justify-between border-t border-[#efede8] pt-3 sm:col-span-1 sm:border-0 sm:pt-0 sm:pl-4">
                <div className="flex items-center rounded-full border border-[#e1ddd6] bg-[#fcfbf8] p-1">
                  <button onClick={() => dispatch(decreaseQty(item.id))} aria-label="Decrease quantity" className="flex h-7 w-7 items-center justify-center rounded-full text-[#667085] transition hover:bg-[#e7eee4] hover:text-[#45603e]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden="true"><path strokeLinecap="round" d="M5 12h14" /></svg></button>
                  <span className="w-7 text-center text-sm font-bold text-[#27332a]">{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQty(item.id))} aria-label="Increase quantity" className="flex h-7 w-7 items-center justify-center rounded-full text-[#667085] transition hover:bg-[#e7eee4] hover:text-[#45603e]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden="true"><path strokeLinecap="round" d="M12 5v14m-7-7h14" /></svg></button>
                </div>
                <div className="ml-4 text-right sm:ml-0 sm:mt-3">
                  <p className="text-base font-bold text-[#45603e]">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>

            </div>
          ))}
          </div>
          <Link to="/" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#597651] transition hover:text-[#27332a]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m6 6-6-6 6-6" /></svg>Continue browsing</Link>
        </div>

        <aside className="rounded-[1.5rem] border border-[#e7e3dc] bg-white p-5 shadow-[0_14px_30px_rgba(38,51,39,0.07)] lg:sticky lg:top-24">
          <h2 className="font-['Playfair_Display'] text-xl font-semibold text-[#27332a]">Order summary</h2>
          <div className="mt-5 space-y-3 border-b border-[#eeeae4] pb-5 text-sm">
            <div className="flex justify-between text-[#667085]"><span>Subtotal</span><span className="font-semibold text-[#27332a]">${total.toFixed(2)}</span></div>
            <div className="flex justify-between text-[#667085]"><span>Shipping</span><span className="font-semibold text-[#597651]">Complimentary</span></div>
          </div>
          <div className="flex items-end justify-between py-5"><span className="text-sm font-semibold text-[#27332a]">Total</span><span className="text-2xl font-bold text-[#45603e]">${total.toFixed(2)}</span></div>
          <button className="w-full rounded-full bg-[#27332a] py-3.5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(38,51,39,0.18)] transition hover:bg-[#45603e]">Proceed to checkout</button>
          <div className="mt-5 grid grid-cols-2 gap-2 border-t border-[#eeeae4] pt-5 text-center text-[10px] font-bold uppercase tracking-[0.08em] text-[#6e7e6d]"><span className="rounded-lg bg-[#f4f5f1] px-2 py-2">Secure payment</span><span className="rounded-lg bg-[#f4f5f1] px-2 py-2">Easy returns</span></div>
        </aside>
        </div>

      </div>
    </div>
  );
}

export default Cart;
