import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((total, item) => total + item.quantity, 0);
  const { lang, setLang } = useContext(LanguageContext);

  const linkClass = ({ isActive }) =>
    `text-xs px-3 py-1.5 rounded-lg transition-all duration-200 ${
      isActive
        ? "text-blue-600 bg-blue-500/10 font-medium"
        : "text-slate-500 hover:text-blue-600 hover:bg-blue-500/8"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-blue-100/50 backdrop-blur-xl border-b border-blue-200">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-[11px] font-medium text-blue-800 tracking-[5px] uppercase cursor-pointer">
          E — Commerce
        </h1>

        {/* Links */}
        <div className="flex items-center gap-1">
          <NavLink to="/" className={linkClass}>Products</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/register" className={linkClass}>Register</NavLink>

          <div className="w-px h-3.5 bg-blue-200 mx-1" />

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative text-xs px-3 py-1.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? "text-blue-600 bg-blue-500/10 font-medium"
                  : "text-slate-500 hover:text-blue-600 hover:bg-blue-500/8"
              }`
            }
          >
            Cart
            {count > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-blue-500 text-white
                               text-[9px] w-[14px] h-[14px] flex items-center justify-center
                               rounded-full font-semibold">
                {count}
              </span>
            )}
          </NavLink>

          <div className="w-px h-3.5 bg-blue-200 mx-1" />

          {/* Language */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-white text-slate-500 border border-blue-200
                       text-[11px] font-medium tracking-widest rounded-lg px-2.5 py-1.5
                       focus:outline-none hover:border-blue-400 hover:text-blue-600
                       transition-all cursor-pointer appearance-none"
          >
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;