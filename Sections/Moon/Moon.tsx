import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber'
import moon from "./moon.jpg";


const Moon = (props) => {
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const ref = useRef()
    useFrame((state, delta) => (ref.current.rotation.y += 0.10))
    const texture1 = useLoader(TextureLoader, moon);

    return (
        <group ref={ref} position={[-20, -10, 50]}>
            <mesh 
               {...props}
               scale={active ? 1.5 : 1}
               onClick={(event) => setActive(!active)}
               onPointerOver={(event) => setHover(true)}
               onPointerOut={(event) => setHover(false)}
               rotation={[0.05, 0.075, 0]}
               >
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <sphereGeometry args={[3, 32, 32]} />
                <meshStandardMaterial map={texture1} roughness={0.3}/>
            </mesh>
        </group>
    )
}
export default Moon;