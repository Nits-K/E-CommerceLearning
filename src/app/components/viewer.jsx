import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Denim from "./Denim";
import Tshirt_1 from "./Tshirt_1";

function Viewer({ viewId }) {
  console.log("viewer.jsx", viewId);
  const modelData = {
    1: <Tshirt_1 />,
    2: <Denim />,
    // add rest of product ids and there equivalent models
  };
  const [count, setCount] = useState(0);
  console.log(modelData[viewId]);
  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>{modelData[viewId]}</Suspense>
      </Canvas>
    </>
  );
}

export default Viewer;
