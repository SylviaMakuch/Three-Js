import React from "react";
import { useThree } from "@react-three/fiber";
import THREE from "three";

const Star = () => {
  function getRandom() {
    var num = Math.floor(Math.random()*10) + 1;
    num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
    return num;
  }

  // const [x, y, z] = Array(3).fill().map(() => 
  // const mathutils = THREE.MathUtils.randFloatSpread(250);

  return (
    <mesh
      position={[getRandom(), getRandom(), getRandom()]}
    >
      <sphereBufferGeometry attach="geometry" args={[0.20, 24, 24]} />
      <meshStandardMaterial attach="material" color={0xffffff} />

    </mesh>
  );
}
export default Star;