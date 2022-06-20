import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import CameraController from "./Sections/CameraControls";
import { Canvas } from "@react-three/fiber";
import Donut from "./Sections/Donut/Donut";
import Background from "./Sections/Background/Background";
import Moon from "./Sections/Moon/Moon";
import Stars from "./Sections/Stars/Stars";

// const Background = styled.img`
// `;


function App() {
    return (
    <>
        <Suspense fallback={<div>Loading... </div>}>
        <Canvas>
            <CameraController />
            <ambientLight color="white" intensity={0.5} />
            <pointLight color="white" position={[55, 55, 55]} />
            <perspectiveCamera position={[75, 0.1, 1000]} />
            <Background />
            <Stars />
                <Donut />
                <Moon />
        </Canvas>
        </Suspense>
    </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));