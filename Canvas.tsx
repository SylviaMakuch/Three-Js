import React from 'react'
import { Canvas as ThreeCanvas } from '@react-three/fiber';
import Donut from "./components/Donut/Donut";


const Canvas = (props) => {
    return (
        <ThreeCanvas>
            <camera position={[-3, 30, 10]} />
            <pointLight color="white" position={[55, 55, 55]} />
            <ambientLight color="white" intensity={0.5} />
            <perspectiveCamera position={[75, 0.1, 1000]} />
            <Donut />
        </ThreeCanvas>
  )
}

export default Canvas;