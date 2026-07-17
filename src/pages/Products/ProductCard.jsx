import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      aria-label={`View ${product.title}`}
      className="group relative block overflow-hidden rounded-[1.25rem] border border-[#e7e3dc] bg-white
                 transition-all duration-300 hover:-translate-y-1 hover:border-[#afc5aa]
                 hover:shadow-[0_18px_35px_rgba(38,51,39,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#78966d]"
    >
      <div className="relative h-52 overflow-hidden bg-[#f1f0eb] p-5">
        <div className="absolute -bottom-9 -right-5 h-24 w-24 rounded-full border border-[#b9cfb4]/70" />
        <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#597651] backdrop-blur-sm">
          {product.category}
        </span>
        <div className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#597651] opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
          </svg>
        </div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
        />
        <span className="absolute bottom-3 left-3 text-[9px] font-bold tracking-[0.16em] text-[#78966d]/80">NO. {String(product.id).padStart(3, "0")}</span>
      </div>

      <div className="p-4 sm:p-5">
        <h2 className="min-h-10 font-['Playfair_Display'] text-base font-semibold leading-5 text-[#27332a] line-clamp-2">
          {product.title}
        </h2>
        <div className="mt-3 flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs font-semibold text-[#667085]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-[#c49445]" aria-hidden="true"><path d="m12 2.7 2.85 5.78 6.38.93-4.61 4.5 1.09 6.35L12 17.27l-5.71 3 1.09-6.35-4.61-4.5 6.38-.93L12 2.7Z" /></svg>
            {product.rating?.toFixed(1) || "New"}
          </span>
          {product.brand && <span className="max-w-24 truncate text-[10px] font-bold uppercase tracking-[0.1em] text-[#98a395]">{product.brand}</span>}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-[#f0eee9] pt-3">
          <div className="flex items-baseline gap-2"><span className="text-base font-bold text-[#45603e]">${product.price}</span>{product.discountPercentage > 0 && <span className="text-[10px] font-bold text-[#78966d]">-{Math.round(product.discountPercentage)}%</span>}</div>
          <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#758172] transition-transform duration-300 group-hover:translate-x-1">
            Discover
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
