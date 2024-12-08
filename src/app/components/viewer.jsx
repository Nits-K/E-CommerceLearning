import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAspect } from "@react-three/drei";

import Denim from "./Denim";
import SkirtT from "./Skirt_Tshirt";

function Viewer({ viewId }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <Canvas
        camera={{
          position: [800, 100, 100], // Adjust position [x, y, z] to get the desired view
        }}
      >
        <ambientLight intensity={0.5} />
        <OrbitControls
          target={[1, 1, 1]} // Set the origin of the orbit controls
          // enableZoom={false}
        />
        <Suspense fallback={null}>
          <Denim />
          {/* <SkirtT /> */}
        </Suspense>
      </Canvas>
    </>
  );
}

export default Viewer;
