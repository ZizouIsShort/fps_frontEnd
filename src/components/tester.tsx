"use client"

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import {FirstPersonControls, OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Model(){
    const result = useLoader(GLTFLoader, "/Penguin.gltf")

    return (
            <primitive object={result.scene}/>
    )
}

function Dabba() {
    const boxref = useRef<THREE.Mesh>(null!);

    useFrame(() => {
        if (boxref.current) {
            boxref.current.rotation.x += 0.005;
            boxref.current.rotation.y += 0.005;
            boxref.current.rotation.z += 0.005;
        }
    });

    return (
        <mesh ref={boxref} position={[0, 0, 0]}>
            <boxGeometry args={[3, 3, 3]} />
            <meshBasicMaterial color={"gold"} />
        </mesh>
    );
}

export default function Mkc() {
    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "white" }}>
            <Canvas>
                <gridHelper args={[20, 20, "pink", "blue"]}></gridHelper>
                <OrbitControls />
                <Model/>
            </Canvas>
        </div>
    );
}
