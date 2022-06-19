import * as THREE from 'three'
import React, { Suspense } from 'react';
import space from "../media/space.jpg";
import { Canvas, useLoader, useThree } from '@react-three/fiber';


const Background = (props) =>{
  const { scene } = useThree();
  const loader = new THREE.TextureLoader();
  const texture = loader.load(space);
  scene.background = texture;
  return (null)
};

export default Background;