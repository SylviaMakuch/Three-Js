import React from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Donut from "./components/Donut/Donut";

const AppContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

function App() {
    return (
        <Canvas>
            <ambientLight color="white" intensity={0.5} />
            <pointLight color="white" position={[55, 55, 55]} />
            <perspectiveCamera position={[75, 0.1, 1000]} />
            <Donut />
        </Canvas>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));