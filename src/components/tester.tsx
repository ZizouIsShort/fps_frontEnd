"use client"

import {Canvas, useFrame} from "@react-three/fiber";
import {useRef} from "react";
import * as THREE from "three";

function Dabba(){
    const boxref = useRef(null);
    useFrame(
        () => {
            boxref.current.rotation.x += 0.005;
            boxref.current.rotation.y += 0.005;
            boxref.current.rotation.z += 0.005;
        }
    )
    return (
        <mesh ref={boxref}>
            <boxGeometry args={[2, 2, 2]}/>
            <meshBasicMaterial color={"gold"}/>
        </mesh>
    )
}

export default function Mkc(){
    return (
        <>
            <Canvas>
                <Dabba/>
            </Canvas>
        </>
    )
}