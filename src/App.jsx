import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>

      {/* Layout Wrapper */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-violet-50">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 py-6">

          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;