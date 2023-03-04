import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
const LamboRims = forwardRef(() => {
  return (
    <group>
      <LamboRim scale={[0.72, 1, 1]} position={[0, 0.322, -1.63]} />
      <LamboRim scale={[0.72, 1, 1]} position={[-0.04, 0.322, 1.2]} />
      <LamboRim
        scale={[0.72, 1, 1]}
        position={[-1.775, 0.322, 1.195]}
        rotation={[-Math.PI / 2, -Math.PI / 1, 0]}
      />
      <LamboRim
        scale={[0.72, 1, 1]}
        position={[-1.815, 0.322, -1.64]}
        rotation={[-Math.PI / 2, -Math.PI / 1, 0]}
      />
    </group>
  );
});
function LamboRim(props) {
  const { nodes, materials } = useGLTF("/LamboWheels.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_16.geometry} material={materials["Material.030"]} />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.Matte__FF070707__spec}
        >
          {/* <meshBasicMaterial attach="material" color={"#1f1f1f"} /> */}
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/LamboWheels.gltf");

export default LamboRims;