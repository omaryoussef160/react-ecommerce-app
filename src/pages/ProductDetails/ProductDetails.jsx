import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetailsCard from "./ProductDetailsCard";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent
                          rounded-full animate-spin" />
          <p className="text-sm text-blue-300">Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f5ff] px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <ProductDetailsCard product={product} />
      </div>
    </div>
  );
}

export default ProductDetails;