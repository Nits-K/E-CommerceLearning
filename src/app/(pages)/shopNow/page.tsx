"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Card from "@/app/components/card"; 
import productlist from "@/app/assets/data/productlist.json";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(productlist);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const router = useRouter();

  const handleSetViewerDetails = (details: any) => {
    console.log("Viewer Details:", details);
    // Implement functionality to set viewer details, e.g., updating a modal or state
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const search = searchParams.get('search');
    setSearchQuery(search);
  }, [router]);

  useEffect(() => {
    if (searchQuery) {
      const search = searchQuery.toLowerCase();
      const filtered = productlist.filter(product =>
        product.brand.toLowerCase().includes(search)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productlist);
    }
  }, [searchQuery]);

  return (
    <div>
      <Header />
      <p className="mt-12 mb-8 text-gray-50 text-4xl justify-center items-center flex font-bold">
        Our Products
      </p>
      {searchQuery && (
        <div className="mt-4">
          <h2 className="text-center text-2xl font-bold">
            Search Results for {searchQuery}
          </h2>
        </div>
      )}
      <div className="card-list flex-row flex-wrap space-x-4 object-cover sm:flex md:flex justify-center gap-4 mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Card
              key={product.id}
              id={product.id}
              brand={product.brand}
              size={product.size}
              price={product.price}
              image={product.image}
              setViewerDetails={handleSetViewerDetails} // Pass the function here
            />
          ))
        ) : (
          <p className="text-center">No products found</p>
        )}
        {filteredProducts.length < productlist.length && searchQuery && (
          productlist
            .filter(product => !filteredProducts.includes(product))
            .map(product => (
              <Card
                key={product.id}
                id={product.id}
                brand={product.brand}
                size={product.size}
                price={product.price}
                image={product.image}
                setViewerDetails={handleSetViewerDetails} // Pass the function here as well
              />
            ))
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Shop;
