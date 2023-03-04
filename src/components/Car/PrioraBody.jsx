/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/LadaBody.gltf
*/
import * as THREE from "three";
import React, { forwardRef, useMemo } from "react";
import { MeshReflectorMaterial, useGLTF } from "@react-three/drei";
import { useSelector } from "react-redux";
//Доделать приора боди, дворники, и красоту п окоду
const PrioraBody = forwardRef(({ ...props }, ref) => {
  const { nodes, materials } = useGLTF("/LadaBody.gltf");
  const BodyColor = /* useSelector((state) => state.color.color); */ '#ff0000'
  const BodyHeight = /* useSelector((state) => state.color.suspension); */ 0.1
  
  const colorMemo = useMemo(
    () => new THREE.Color(BodyColor).convertSRGBToLinear(),
    [BodyColor]
  );

  /* console.log(materials.priora_body__pri1) */
  materials.priora_body__pri1.color = colorMemo;
  materials.priora_body__pri1.metalness = 0.6;
  materials.priora_body__pri1.roughness = 0.01;
  materials.PRIORA_STEKLA__e1.color = new THREE.Color(
    "#101010"
  ).convertSRGBToLinear();
  materials.PRIORA_STEKLA__e1.metalness = 0.6;
  materials.PRIORA_STEKLA__e1.roughness = 0.01;
    

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      position={[0, BodyHeight, 0]}
    >
      <Body colors={colorMemo} />
      <Lights />

      <mesh
        geometry={
          nodes.Mesh49_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={
            nodes.Mesh29_default1_skpE862_1_Group1_Model_1.geometry
          }
          material={materials.priora_misc__spe1}
        />
        <mesh
          geometry={
            nodes.Mesh29_default1_skpE862_1_Group1_Model_2.geometry
          }
          material={materials.Matte__FF050505_1}
        />
      </group>
      <mesh
        geometry={
          nodes.Mesh115_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh290_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF656872_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh37_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh46_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={
            nodes.Mesh576_default1_skpE862_1_Group1_Model_1.geometry
          }
          material={materials.PRIORA_OPTIK_REA1}
        />
        <mesh
          geometry={
            nodes.Mesh576_default1_skpE862_1_Group1_Model_2.geometry
          }
          material={materials.Matte__FF050505_1}
        />
      </group>
      <mesh
        geometry={
          nodes.Mesh564_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_GLUSH__sp1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh273_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF000000_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh93_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh25_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh513_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_BLACK_DIR1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh72_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh19_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh494_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF7B7B7B_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh14_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh39_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh292_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF656872_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh28_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={
          nodes.Mesh509_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_BLACK_DIR1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={
            nodes.Mesh429_default1_skpE862_1_Group1_Model_1.geometry
          }
          material={materials.Matte__FF797B8D_1}
        />
        <mesh
          geometry={
            nodes.Mesh429_default1_skpE862_1_Group1_Model_2.geometry
          }
          material={materials.priora_body__sec1}
        />
      </group>
      <mesh
        geometry={
          nodes.Mesh78_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh87_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh21_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh44_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh9_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh285_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF656872_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh507_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_BLACK_DIR1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={
            nodes.Mesh279_default1_skpE862_1_Group1_Model_1.geometry
          }
          material={materials.PRIORA_GLUSH__sp1}
        />
        <mesh
          geometry={
            nodes.Mesh279_default1_skpE862_1_Group1_Model_2.geometry
          }
          material={materials.Matte__FF000000_1}
        />
      </group>
      <mesh
        geometry={
          nodes.Mesh111_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={
          nodes.Mesh287_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF656872_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh84_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh26_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh75_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh515_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_BLACK_DIR1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh40_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh27_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={
            nodes.Mesh430_default1_skpE862_1_Group1_Model_1.geometry
          }
          material={materials.Matte__FF797B8D_1}
        />
        <mesh
          geometry={
            nodes.Mesh430_default1_skpE862_1_Group1_Model_2.geometry
          }
          material={materials.priora_body__sec1}
        />
      </group>
      <mesh
        geometry={
          nodes.Mesh10_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh110_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh18_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh113_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh77_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh7_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh91_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={
          nodes.Mesh531_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_RED_DIRT_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh8_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh289_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF656872_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh103_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh47_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh11_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh2_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh105_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh530_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_RED_DIRT_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh12_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh71_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh24_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh511_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_BLACK_DIR1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh518_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_BLACK_DIR1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh92_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh89_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh563_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_GLUSH__sp1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh97_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh86_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh288_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF656872_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh562_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_GLUSH__sp1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh90_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh510_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_BLACK_DIR1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh506_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_BLACK_DIR1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh100_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh4_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh20_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh42_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh70_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh80_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh85_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh96_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={
            nodes.Mesh33_default1_skpE862_1_Group1_Model_1.geometry
          }
          material={materials.PRIORA_OPTIK_REA1}
        />
        <mesh
          geometry={
            nodes.Mesh33_default1_skpE862_1_Group1_Model_2.geometry
          }
          material={materials.Matte__FF050505_1}
        />
      </group>
      <mesh
        geometry={
          nodes.Mesh283_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF656872_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh69_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh17_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh108_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh532_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_RED_DIRT_1}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={
          nodes.Mesh22_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh284_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF656872_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh274_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF000000_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={
            nodes.Mesh226_default1_skpE862_1_Group1_Model_1.geometry
          }
          material={materials.priora_misc__spe1}
        />
        <mesh
          geometry={
            nodes.Mesh226_default1_skpE862_1_Group1_Model_2.geometry
          }
          material={materials.PRIORA_PRIB2__sp1}
        />
        <mesh
          geometry={
            nodes.Mesh226_default1_skpE862_1_Group1_Model_3.geometry
          }
          material={materials.TORPEDO_LEATHER_1}
        />
        <mesh
          geometry={
            nodes.Mesh226_default1_skpE862_1_Group1_Model_4.geometry
          }
          material={materials.vehiclelights3}
        />
        <mesh
          geometry={
            nodes.Mesh226_default1_skpE862_1_Group1_Model_5.geometry
          }
          material={materials.Matte__FF050505_1}
        />
      </group>
      <mesh
        geometry={
          nodes.Mesh68_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh6_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh5_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh286_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF656872_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh81_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh88_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={
          nodes.Mesh13_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh15_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh16_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh98_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh109_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh529_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_RED_DIRT_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh291_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF656872_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh282_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF656872_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={
            nodes.Mesh23_default1_skpE862_1_Group1_Model_1.geometry
          }
          material={materials.priora_misc__spe1}
        />
        <mesh
          geometry={
            nodes.Mesh23_default1_skpE862_1_Group1_Model_2.geometry
          }
          material={materials.Matte__FF050505_1}
        />
      </group>
      <mesh
        geometry={
          nodes.Mesh76_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh94_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh269_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF000000_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh508_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_BLACK_DIR1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh1_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh512_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.PRIORA_BLACK_DIR1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh293_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF656872_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh99_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh264_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF000000_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh74_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh73_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.Mesh101_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.Matte__FF050505_1}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
});

const Body = ({ colors }) => {
  const { nodes, materials } = useGLTF("/LadaBody.gltf");
  materials.PRIORA_POLIK__sp1.color = new THREE.Color(
    "#101010"
  ).convertSRGBToLinear();
  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      {/* РЕШЕТКА */}
      <mesh
        geometry={
          nodes.Mesh3_default1_skpE862_1_Group1_Model_10.geometry
        }
        material={materials.Matte__FF656872_1}
      />
      {/* БАМПЕР */}
      <mesh
        geometry={
          nodes.Mesh256_default1_skpE862_1_Group1_Model.geometry
        }
        material={materials.priora_body__pri1}
      />
      {/* Стекла */}
      <mesh
        geometry={
          nodes.Mesh3_default1_skpE862_1_Group1_Model_2.geometry
        }
        material={materials.PRIORA_STEKLA__e1}
      />
      {/* Пороги */}
      <mesh
        geometry={
          nodes.Mesh3_default1_skpE862_1_Group1_Model_3.geometry
        }
        material={materials.priora_body__sec1}
      />
      {/* КУЗОВ */}
      <mesh
        geometry={
          nodes.Mesh3_default1_skpE862_1_Group1_Model_11.geometry
        }
        material={materials.priora_body__pri1}
      />
      {/* Арки */}
      <mesh
        geometry={
          nodes.Mesh3_default1_skpE862_1_Group1_Model_12.geometry
        }
        material={materials.Matte__FF050505_1}
      />
      {/* Днище */}
      <mesh
        geometry={nodes.Mesh3_default1_skpE862_1_Group1_Model_13.geometry}
        material={materials.PRIORA_POLIK__sp1}
      />
      {/* ЗА РЕШЕТКОЙ МЕШ */}
      <mesh
        geometry={
          nodes.Mesh3_default1_skpE862_1_Group1_Model_5.geometry
        }
        material={materials.Matte__FF000000_1}
      />
    </group>
  );
};

const Lights = ({}) => {
  const { nodes, materials } = useGLTF("/LadaBody.gltf");
  materials.PRIORA_OPTIK_REA1.color = new THREE.Color(
    "#800000"
  ).convertSRGBToLinear();
  materials.PRIORA_OPTIK_REA1.metalness = 0.5;
  materials.PRIORA_OPTIK_REA1.roughness = 0.01;
  materials.vehiclelights1.color = new THREE.Color(
    "#e6e6e6"
  ).convertSRGBToLinear();
  materials.vehiclelights1.metalness = 0.5;
  materials.vehiclelights1.roughness = 0.01;
  materials.vehiclelights3.color = new THREE.Color(
    "#e6e6e6"
  ).convertSRGBToLinear();
  materials.vehiclelights3.metalness = 0.5;
  materials.vehiclelights3.roughness = 0.01;
  materials.vehiclelights4.color = new THREE.Color(
    "#ffcd45"
  ).convertSRGBToLinear();
  materials.vehiclelights4.metalness = 0.5;
  materials.vehiclelights4.roughness = 0.01;
  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        geometry={
          nodes.Mesh3_default1_skpE862_1_Group1_Model_15.geometry
        }
        material={materials.PRIORA_OPTIK_REA1}
      />
      <mesh
        geometry={nodes.rearlights3.geometry}
        material={materials.vehiclelights1}
      />
      <mesh
        geometry={nodes.rearlights4.geometry}
        material={materials.vehiclelights3}
      />

      <mesh
        geometry={nodes.rearlights2.geometry}
        material={materials.vehiclelights4}
      />
   
      <mesh
        geometry={nodes.rearlights1.geometry}
        material={materials.vehiclelights4}
      />

      {/* Отражайки */}
      <mesh
        geometry={
          nodes.Mesh256_default1_skpE862_1_Group1_Model_1.geometry
        }
        material={materials.PRIORA_OPTIK_REA1}
      >
        
      </mesh>
    </group>
  );
};

useGLTF.preload("/LadaBody.gltf");

export default PrioraBody;