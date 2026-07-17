import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((total, item) => total + item.quantity, 0);
  const { lang, setLang } = useContext(LanguageContext);

  const linkClass = ({ isActive }) =>
    `text-sm px-3 py-2 rounded-full transition-all duration-200 ${
      isActive
        ? "text-[#1f2933] bg-[#e7eee4] font-semibold"
        : "text-[#667085] hover:text-[#1f2933]"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-[#f8f7f4]/85 px-3 py-3 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <Link to="/" className="font-['Playfair_Display'] text-2xl font-bold tracking-tight text-[#27332a] transition-colors hover:text-[#45603e]" aria-label="Nest home">
          nest<span className="text-[#78966d]">.</span>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-[#e2ded6] bg-white/90 p-1 shadow-[0_8px_22px_rgba(38,51,39,0.07)] md:flex">
          <NavLink to="/" className={linkClass}>Products</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/register" className={linkClass}>Join us</NavLink>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            aria-label="Language"
            className="hidden cursor-pointer appearance-none rounded-full border border-[#ddd9d1] bg-white px-3 py-2 text-[10px] font-bold tracking-[0.12em] text-[#667085] outline-none transition hover:border-[#9ab392] hover:text-[#45603e] sm:block"
          >
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>

          <NavLink
            to="/cart"
            aria-label={`Cart with ${count} items`}
            className={({ isActive }) => `relative flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
              isActive ? "border-[#27332a] bg-[#27332a] text-white" : "border-[#ddd9d1] bg-white text-[#45603e] hover:border-[#9ab392] hover:bg-[#e7eee4]"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4.5 w-4.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h2l1.5 10a2 2 0 0 0 2 1.7h8.8a2 2 0 0 0 1.9-1.4L20 8H6.3M9 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#78966d] text-[9px] font-bold text-white ring-2 ring-[#f8f7f4]">{count}</span>
            )}
          </NavLink>
        </div>
      </div>

      <div className="mx-auto mt-2 flex max-w-sm items-center justify-center rounded-full border border-[#e2ded6] bg-white/90 p-1 shadow-sm md:hidden">
        <NavLink to="/" className={linkClass}>Shop</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        <NavLink to="/register" className={linkClass}>Join</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
