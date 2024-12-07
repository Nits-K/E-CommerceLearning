
"use client"
import Header from "@/app/components/Header";
import Slider from "../../components/slider";
import Card from "@/app/components/card";
import productlist from "@/app/assets/data/productlist.json";
import { useState } from "react";

import Viewer from '../../components/viewer'

const Products = () => {
  const [viewerDetails, setViewerDetails]=useState({
    viewID: "",
    isVisible: false
  })
  
  return (
    <div>
      <Header />     
      <Slider />
      <div className="card-list flex-row flex-wrap space-x-4 object-cover sm:flex md:flex justify-center gap-4 mt-4">
        {productlist.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            brand={product.brand}
            size={product.size}
            price={product.price}
            image={product.image}
            // viewerDetails={viewerDetails}
            setViewerDetails={setViewerDetails}
          />
        ))}
      </div>
      {
        viewerDetails.isVisible ? <div className="viewer-popup">
        <Viewer viewId={viewerDetails.viewID} />
        <button className="close" onClick={()=>{
          setViewerDetails({isVisible: false, viewID: ""})
        }} >Close</button>
        </div>  :""
      }
    </div>
  );
};
export default Products;
