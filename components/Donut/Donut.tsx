import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber'
import sprinkles from "./sprinkles.jpg";
import normal from "./normal.jpg";


const Donut = (props) => {
    const ref = useRef()
    useFrame((state, delta) => (ref.current.rotation.y += 0.005));
    // const material = useLoader(TextureLoader, sprinkles );
    // const material2 = useLoader(TextureLoader, normal);
    return (
        <group ref={ref} position={[0, -1, 0]}>
            <mesh position={[0, 2, 0]}>
                <torusGeometry args={[10, 3, 100]} />
                <meshStandardMaterial color={'pink'} />
            </mesh>
        </group>
    )
}
export default Donut;