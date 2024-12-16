import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Tshirt(props) {
  const { nodes, materials } = useGLTF('/images/t1.gltf')

  return (
    <group {...props} dispose={null}>
      {/* Set the camera position to center the model and reset the rotation */}
      <perspectiveCamera fov={100} position={[0, 0, 2]} near={0.1} far={1000} />
      
      {/* Correct rotation to ensure model is facing upwards */}
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Rib_2X2_468gsm_Copy_1_FRONT_2685}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials['Rib_2X2_468gsm_Copy_1_FRONT_2685.001']}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.Dark_FRONT_2667}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.Rib_2X2_468gsm_FRONT_2673}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials['Rib_2X2_468gsm_FRONT_2673.001']}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials['Dark_FRONT_2667.001']}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials['Rib_2X2_468gsm_Copy_1_FRONT_2685.002']}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials['Rib_2X2_468gsm_Copy_1_FRONT_2685.003']}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials['Rib_2X2_468gsm_Copy_1_FRONT_2685.004']}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials['Rib_2X2_468gsm_Copy_1_FRONT_2685.005']}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials['Rib_2X2_468gsm_Copy_1_FRONT_2685.006']}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials['Rib_2X2_468gsm_Copy_1_FRONT_2685.007']}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials.Yellow_FRONT_2660}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials['Yellow_FRONT_2660.001']}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials['Yellow_FRONT_2660.002']}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials['Yellow_FRONT_2660.003']}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_36.geometry}
        material={materials['Yellow_FRONT_2660.004']}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials['Yellow_FRONT_2660.005']}
        rotation={[Math.PI, 0, 0]}  // Correcting the rotation (rotating 180 degrees along X-axis)
        scale={0.1}  // Adjust scale if necessary
      />
    </group>
  )
}

useGLTF.preload('/images/t1.gltf')
