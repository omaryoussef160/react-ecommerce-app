import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Navbar() {

  const items = useSelector((state) => state.cart.items);

  const count = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const { lang, setLang } = useContext(LanguageContext);

  const linkClass = ({ isActive }) =>
    `relative pb-1 transition text-sm ${
      isActive
        ? "text-violet-300 font-medium after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-violet-400"
        : "text-gray-400 hover:text-gray-200"
    }`;

  return (
    <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-base font-medium text-violet-300 tracking-widest uppercase cursor-pointer">
          E—Commerce
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6">

          <NavLink to="/" className={linkClass}>
            Products
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          <NavLink to="/register" className={linkClass}>
            Register
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative pb-1 transition text-sm ${
                isActive
                  ? "text-violet-300 font-medium"
                  : "text-gray-400 hover:text-gray-200"
              }`
            }
          >
            Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-4 bg-violet-700 text-violet-100 
                               text-xs w-5 h-5 flex items-center justify-center 
                               rounded-full font-medium">
                {count}
              </span>
            )}
          </NavLink>

          {/* Language */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-transparent text-gray-400 border border-gray-700 
                       text-xs rounded-md px-2 py-1 
                       focus:outline-none focus:ring-1 focus:ring-violet-600
                       hover:border-gray-500 transition cursor-pointer"
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