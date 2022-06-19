import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber'
// import sprinkles from "./sprinkles.jpg";
// import normal from "./normal.jpg";

const Donut = (props) => {
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const ref = useRef()
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    // const texture = useLoader(TextureLoader, normal);
    // const material = useLoader(TextureLoader, sprinkles );
   
    return (
        <group ref={ref} position={[0, 0, 0]}>
            <mesh 
               {...props}
               scale={active ? 1.5 : 1}
               onClick={(event) => setActive(!active)}
               onPointerOver={(event) => setHover(true)}
               onPointerOut={(event) => setHover(false)}
               rotation={[0.01, 0.005, 0.01]}
               >
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <torusGeometry args={[10, 3, 16, 100]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} roughness={0.3}/>
            </mesh>
        </group>
    )
}
export default Donut;