"use client";
import React from "react";
import { useCart } from "../context/cartContext";

interface CardProps {
  id: number;
  brand: string;
  size: string;
  price: number;
  image: string;
  viewId: string;
  setViewerDetails: (details: { isVisible: boolean; viewId: string }) => void;
}

const Card = ({
  id,
  brand,
  size,
  price,
  image,
  viewId,
  setViewerDetails,
}: CardProps) => {
  const { cart, addTocart } = useCart();

  const handleAddToCart = (id: number) => {
    addTocart(id);
  };

  const handleViewer = () => {
    setViewerDetails({
      isVisible: true,
      viewId, // Pass the viewId to the parent
    });
  };

  return (
    <div className="bg-white border-1 border-gray-200 max-w-sm rounded-lg shadow-lg flex flex-col m-4 hover:shadow-xl transition-shadow">
      <div className="aspect-w-4 aspect-h-6 rounded-t-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={`/images/${image}`}
          alt="T-shirts"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800 font-serif text-base mb-2">
          {brand}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
            Size: {size}
          </span>
          <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
            &#8377; {price}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <button
            className={`flex items-center justify-center bg-gray-900 text-white text-sm px-4 py-2 rounded-lg transition hover:bg-gray-700 ${
              cart.includes(id) ? "opacity-70 cursor-not-allowed" : ""
            }`}
            onClick={() => handleAddToCart(id)}
            disabled={cart.includes(id)}
          >
            Add to Cart
          </button>
          <button
            className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg transition hover:bg-gray-700"
            onClick={handleViewer}
          >
            3D Viewer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
