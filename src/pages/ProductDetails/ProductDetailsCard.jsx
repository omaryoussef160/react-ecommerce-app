import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

function ProductDetailsCard({ product }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return undefined;
    const timer = setTimeout(() => setAdded(false), 2800);
    return () => clearTimeout(timer);
  }, [added]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
  };

  return (
    <div className="bg-white border border-[#e7e3dc] rounded-[1.5rem]
                    p-5 sm:p-7 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12
                    shadow-[0_18px_35px_rgba(38,51,39,0.08)]">

      {/* Image */}
      <div className="w-full md:w-1/2 bg-[#f1f0eb] rounded-[1.1rem]
                      flex items-center justify-center p-8 min-h-[320px]">
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
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] bg-[#e7eee4] text-[#597651]
                           px-2.5 py-1.5 rounded-full capitalize border border-[#d7e3d3]">
            {product.category}
          </span>
          {product.brand && (
            <span className="text-xs text-[#7b8e78]">by {product.brand}</span>
          )}
        </div>

        {/* Title */}
        <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold leading-tight text-[#27332a]">
          {product.title}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-2">
          <span className="flex items-center gap-1 text-sm text-amber-500 font-medium">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="m12 2.7 2.85 5.78 6.38.93-4.61 4.5 1.09 6.35L12 17.27l-5.71 3 1.09-6.35-4.61-4.5 6.38-.93L12 2.7Z" /></svg>
            {product.rating}
          </span>
          <span className="text-xs text-[#7b8e78]">
            · {product.stock} in stock
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-[#ece9e2] my-5" />

        {/* Description */}
        <p className="text-sm text-[#667085] leading-7">
          {product.description}
        </p>

        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-[#f4f5f1] px-3 py-3 text-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="mx-auto h-4 w-4 text-[#597651]" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v10H3zM14 10h3l3 3v4h-6zM7 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm10 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" /></svg><p className="mt-1.5 text-[10px] font-bold uppercase tracking-wide text-[#5c6d5d]">Quick delivery</p></div>
          <div className="rounded-xl bg-[#f4f5f1] px-3 py-3 text-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="mx-auto h-4 w-4 text-[#597651]" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path strokeLinecap="round" d="M12 7v5l3 2" /></svg><p className="mt-1.5 text-[10px] font-bold uppercase tracking-wide text-[#5c6d5d]">Easy returns</p></div>
          <div className="rounded-xl bg-[#f4f5f1] px-3 py-3 text-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="mx-auto h-4 w-4 text-[#597651]" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m12 3 7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4Z" /><path strokeLinecap="round" d="m9 12 2 2 4-4" /></svg><p className="mt-1.5 text-[10px] font-bold uppercase tracking-wide text-[#5c6d5d]">Secure order</p></div>
        </div>

        {/* Price */}
        <p className="text-3xl font-bold text-[#45603e] mt-7">
          ${product.price}
        </p>

        {/* Discount */}
        {product.discountPercentage && (
          <p className="text-xs font-medium text-[#597651] mt-1">
            {product.discountPercentage}% off applied
          </p>
        )}

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#27332a] text-white py-3
                       rounded-full hover:bg-[#45603e] transition text-sm font-semibold
                       shadow-[0_8px_18px_rgba(38,51,39,0.18)]"
          >
            <span className="flex items-center justify-center gap-2">
              {added && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-4 w-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" /></svg>}
              {added ? "Added to cart" : "Add to cart"}
            </span>
          </button>

          <button
            className="flex-1 border border-[#dcd8d0] text-[#58645a] py-3
                       rounded-full hover:border-[#9ab392] hover:text-[#45603e]
                       transition text-sm font-semibold bg-white"
          >
            Buy now
          </button>
        </div>

        {added && (
          <div role="status" className="mt-3 flex items-center gap-2 rounded-xl border border-[#cfe0ca] bg-[#eef5eb] px-3 py-2.5 text-xs font-semibold text-[#45603e]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" /></svg>
            {product.title} is now in your cart.
          </div>
        )}

        <div className="mt-7 border-t border-[#ece9e2] pt-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#78966d]">The fine print</p>
          <div className="mt-3 grid gap-2 text-xs text-[#667085] sm:grid-cols-2">
            <p><span className="font-semibold text-[#45603e]">Shipping:</span> {product.shippingInformation || "Dispatched with care"}</p>
            <p><span className="font-semibold text-[#45603e]">Warranty:</span> {product.warrantyInformation || "Quality checked"}</p>
            <p className="sm:col-span-2"><span className="font-semibold text-[#45603e]">Returns:</span> {product.returnPolicy || "Simple returns, no fuss"}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetailsCard;
