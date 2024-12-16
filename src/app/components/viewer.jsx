import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Importing the specific product components
import Tshirt from "@/app/components/Tshirt";
import T2 from "@/app/components/T2"
// import Shoes from "@/app/components/Shoes"; // Example of another product type

// You can add more components as needed for different products
const getProductComponent = (viewId) => {
  switch (viewId) {
    case "tshirt":
      return <Tshirt scale={[1.5, 1.5, 1.5]} />;
    case "denim":
      return <T2/>;
    // Add more cases for other products
    default:
      return <Tshirt />; // Default fallback product if none match
  }
};

function Viewer({ viewId }) {
  return (
    <Canvas camera={{
      position:[0,400,20],
      rotation:[0,0,0],
    }}>
      <ambientLight />
      <OrbitControls target={[0,0,0]} />
      <Suspense fallback={<div>Loading 3D Model...</div>}> 
        {/* Render the model dynamically based on viewId */}
        {getProductComponent(viewId)}
      </Suspense>
    </Canvas>
  );
}

export default Viewer;
