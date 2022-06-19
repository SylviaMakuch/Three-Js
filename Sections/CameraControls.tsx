import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
       () => {
          const controls = new OrbitControls(camera, gl.domElement);
          controls.minDistance = 3;
          controls.maxDistance = 2020;
          return () => {
            controls.dispose();
          };
       },
       [camera, gl]
    );
    return null;
 };
 export default CameraController;