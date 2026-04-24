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
      <div className="min-h-screen bg-[#f0f5ff]">
        <Navbar />
        <main>
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