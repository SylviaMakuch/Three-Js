import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import sylvia from "./sylvia.jpg";


const Cube = (props) => {
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const ref = useRef()
    useFrame((state, delta) => (ref.current.rotation.y += 0.01
        + (active ? 0.01 : 0))) // rotate the cube around its Y axis
    useFrame((state, delta) => (ref.current.rotation.z += 0.04)) // rotate the cube around its Z axis
    const texture1 = useLoader(TextureLoader, sylvia);

    return (
        <group ref={ref} position={[-30, 0, 0]}>
            <mesh
                {...props}
                scale={active ? 1.5 : 1}
                onClick={(event) => setActive(!active)}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}
            >
                {/* <boxBufferGeometry attach="geometry" args={[1, 1, 1]} /> */}
                <boxGeometry args={[20, 20, 20]} />
                <meshStandardMaterial map={texture1} roughness={0.3}/>
            </mesh>
        </group>
    )
}
export default Cube;