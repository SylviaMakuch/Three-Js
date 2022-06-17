import React from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";
import Canvas from "./Canvas";

const AppContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

function App() {
    return (
        <AppContainer>
            <Canvas />
        </AppContainer>
    );
};

ReactDOM.render(<App />, document.getElementById('react-container'));