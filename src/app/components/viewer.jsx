import {useState,Suspense} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useAspect } from '@react-three/drei';

import Tshirt from './Tshirt';


function Viewer({viewId}) {
  const [count, setCount] = useState(0);
  return (
    <>
    <Canvas>
      <ambientLight />
      <OrbitControls  />
      <Suspense fallback={null}> 
        <Tshirt/>
       </Suspense> 
    </Canvas>
    </>
  );
}

export default Viewer;
