import React from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber';

const Donut = (props) => {
    const material = useLoader(TextureLoader, "sprinkles.png");
    const material2 = useLoader(TextureLoader, "normal.png");
    return (
        <mesh>
            <torusGeometry attach="geometry" args={[10, 3, 26, ]} />
            <meshStandardMaterial />
        </mesh>

    )
}
export default Donut;