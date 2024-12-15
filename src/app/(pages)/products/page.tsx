"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Slider from "../../components/slider";
import Card from "@/app/components/card";
import productlist from "@/app/assets/data/productlist.json";
import { useState } from "react";
import Viewer from "../../components/viewer";

const Products = () => {
  const [viewerDetails, setViewerDetails] = useState({
    isVisible: false,
    viewId: "",
  });

  return (
    <>
      <div>
        <Header />
        <Slider />
        <p className="mt-12 mb-8 text-gray-50 text-4xl justify-center items-center flex font-bold">
          Our Products
        </p>
        <div className="card-list flex-row flex-wrap space-x-4 object-cover sm:flex md:flex justify-center gap-4 mt-4">
          {productlist.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              brand={product.brand}
              size={product.size}
              price={product.price}
              image={product.image}
              viewId={product.viewId} // Passing the unique viewId
              setViewerDetails={setViewerDetails} // To control the viewer visibility and model
            />
          ))}
        </div>

        {/* The Viewer Popup */}
        {viewerDetails.isVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="viewer-popup bg-white p-8 rounded-lg shadow-lg">
              <Viewer viewId={viewerDetails.viewId} />
              <button
                className="close absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full"
                onClick={() => setViewerDetails({ isVisible: false, viewId: "" })}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Products;
