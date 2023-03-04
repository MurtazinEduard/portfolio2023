import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
function GarageOld(props) {
  const { nodes, materials } = useGLTF("/garageOld.glb");
  /* const blockPositions = [
    { position: [9.07, -4.8, 0.36], rotation: [Math.PI / 2, 0, -1.59] },
    { position: [0.23, -4.8, 0.26], rotation: [Math.PI / 2, 0, -1.53] },
    { position: [-8.87, -4.8, 0.15], rotation: [Math.PI / 2, 0, -1.54] },
    { position: [-8.79, -4.8, -20.18], rotation: [Math.PI / 2, 0, Math.PI / 2] },
    { position: [9.9, -4.8, -19.97], rotation: [Math.PI / 2, 0, 1.5] },
    { position: [0, -4.8, -19.97], rotation: [Math.PI / 2, 0, 1.61] },
  ];
  const blocks = useMemo(() =>  blockPositions.map((block) => (
    <ConcreteBlock
      nodes={nodes}
      materials={materials}
      position={block.position}
      rotation={block.rotation}
    />
  )), []); */
  return (
    <group {...props}>
      <Blocks nodes={nodes} materials={materials} />
      <Pillars nodes={nodes} materials={materials} />
      <Other nodes={nodes} materials={materials} />
      <Lamp position={[0, 6, -9.39]} />
    </group>
  );
}

function Blocks({ nodes, materials }) {
  return (
    <>
      <group
        position={[9.07, -4.8, 0.36]}
        rotation={[Math.PI / 2, 0, -1.59]}
        scale={2.42}
      >
        <mesh geometry={nodes.Object_67.geometry} material={materials.block_low} />
        <mesh geometry={nodes.Object_68.geometry} material={materials.petli_low} />
      </group>
      <group
        position={[0.23, -4.8, 0.26]}
        rotation={[Math.PI / 2, 0, -1.53]}
        scale={2.42}
      >
        <mesh geometry={nodes.Object_67.geometry} material={materials.block_low} />
        <mesh geometry={nodes.Object_68.geometry} material={materials.petli_low} />
      </group>
      <group
        position={[-8.87, -4.8, 0.15]}
        rotation={[Math.PI / 2, 0, -1.54]}
        scale={2.42}
      >
        <mesh geometry={nodes.Object_70.geometry} material={materials.block_low} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.petli_low} />
      </group>
      <group
        position={[-8.79, -4.8, -20.18]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={2.42}
      >
        <mesh geometry={nodes.Object_73.geometry} material={materials.block_low} />
        <mesh geometry={nodes.Object_74.geometry} material={materials.petli_low} />
      </group>
      <group position={[9.9, -4.8, -19.97]} rotation={[Math.PI / 2, 0, 1.5]} scale={2.42}>
        <mesh geometry={nodes.Object_76.geometry} material={materials.block_low} />
        <mesh geometry={nodes.Object_77.geometry} material={materials.petli_low} />
      </group>
      <group position={[0, -4.8, -19.97]} rotation={[Math.PI / 2, 0, 1.61]} scale={2.42}>
        <mesh geometry={nodes.Object_79.geometry} material={materials.block_low} />
        <mesh geometry={nodes.Object_80.geometry} material={materials.petli_low} />
      </group>
    </>
  );
}

function Pillars({ nodes, materials }) {
  return (
    <>
      <group
        position={[15.27, 0, 0.06]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 6.14, 1]}
        castShadow
      >
        <mesh geometry={nodes.Object_10.geometry} material={materials.Poll_1} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.poll3} />
      </group>
      <group
        position={[-14.83, 0, 0.06]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 6.14, 1]}
      >
        <mesh geometry={nodes.Object_13.geometry} material={materials.Poll_1} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.poll3} />
      </group>
      <group
        position={[-14.83, 0, -20]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 6.14, 1]}
      >
        <mesh geometry={nodes.Object_16.geometry} material={materials.Poll_1} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.poll3} />
      </group>
      <group
        position={[15.27, 0, -19.93]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 6.14, 1]}
      >
        <mesh geometry={nodes.Object_19.geometry} material={materials.Poll_1} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.poll3} />
      </group>
    </>
  );
}

/* function ConcreteBlock({ nodes, materials, position, rotation }) {
  const ref = useRef(null);
  {
    <mesh geometry={nodes.Object_65.geometry} material={materials.petli_low} />
  }
  return (
    <instancedMesh
      args={[null, null, 6]}
      ref={ref}
      position={position}
      rotation={rotation}
      scale={2.42}
      geometry={nodes.Object_64.geometry}
      material={materials.block_low}
    />
  );
} */

function Other({ nodes, materials }) {
  const wave = useRef()
  return (
    <group dispose={null}>
      {/* ВСЕ СТЕНЫ */}
      <group
        position={[0, 0, -10.19]}
        scale={[45.47, 5.94, 59.74]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          scale={[0.6, 1, 0.9]}
          geometry={nodes.Object_28.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          scale={[0.6, 1, 0.9]}
          geometry={nodes.Object_29.geometry}
          material={materials.ground}
          castShadow
          receiveShadow
        >
          {/* <waveMaterial
            ref={wave}
            key={WaveMaterial.key}
            toneMapped={true}
            colorStart={"red"}
            colorEnd={"blue"}
          /> */}
        </mesh>
        <mesh
          geometry={nodes.Object_57.geometry}
          material={materials.DOOR}
          position={[0, 0, -0.105]}
          rotation={[0, 0, 0]}
        />
      </group>
      {/* Красивая задняя стенка */}
      <group position={[15.25, 0.04, -9.93]} scale={[0.96, 5.95, 9.08]}>
        <mesh geometry={nodes.Object_59.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.ground} />
      </group>
      {/* Справа сверху бетонная балка */}
      <mesh
        geometry={nodes.Object_31.geometry}
        material={materials.top_concrete}
        position={[0.2, 5.06, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1, 15.5, 0.9]}
      />
      {/* Слева сверху балка */}
      <mesh
        geometry={nodes.Object_35.geometry}
        material={materials.top_concrete}
        position={[0, 5.06, -20]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1, 15.5, 0.95]}
      />
      {/* Красивая синяя стенка */}
      {/* <mesh
        geometry={nodes.Object_39.geometry}
        material={materials["Material.001"]}
        position={[0.24, -4.27, -40.04]}
        scale={[14.08, 1.85, 0.58]}
      /> */}
      {/* Труба сверху справа */}
      <mesh
        geometry={nodes.Object_47.geometry}
        material={materials.pipe}
        position={[0, 5.53, 1.58]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.28, 45.55, 0.28]}
      />
      {/* Слева внутренняя труба */}
      <mesh
        geometry={nodes.Object_49.geometry}
        material={materials.pipe}
        position={[0, 5.53, -18.54]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.28, 45.55, 0.28]}
      />

      {/* Прутья в бетоне */}
      <mesh
        geometry={nodes.Object_62.geometry}
        material={materials.metal_rod}
        position={[15.32, 0, -6.71]}
        scale={[0.04, 5.17, 0.04]}
      />
      {/* Сверху провода */}
      <mesh
        geometry={nodes.Object_82.geometry}
        material={materials["Material.003"]}
        position={[0, 19.56, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={3.59}
      />
    </group>
  );
}

function Lamp(props) {
  const { nodes, materials } = useGLTF("/lamp.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.04}>
        <mesh
          geometry={nodes.Lamp_01a001__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/lamp.glb");

useGLTF.preload("/garageOld.glb");

export default GarageOld;
