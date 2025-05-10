"use client"

import {Canvas} from "@react-three/fiber";
export default function Mkc(){
    return (
        <>
            <Canvas camera={{position: [2, 2, 2]}}>
                <mesh>
                    <boxGeometry args={[2, 3, 2]} />
                    <meshBasicMaterial color={"gold"}/>
                </mesh>
            </Canvas>
        </>
    )
}