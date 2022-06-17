import React from 'react'
import { Canvas as ThreeCanvas } from '@react-three/fiber'
import { PerspectiveCamera } from 'three';


const Canvas = (props) => {
    return (
        <ThreeCanvas>
            <camera position={[-3, 30, 10]} />
            <pointLight color="0xffffff" position={[55, 55, 55]} />
            <ambientLight color="0xffffff" intensity={0.5} />
            <PerspectiveCamera position={[75, 0.1, 1000]} />
        </ThreeCanvas>
  )
}

export default Canvas;