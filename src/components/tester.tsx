"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Terrain() {
    const result = useLoader(GLTFLoader, "/scene.gltf");

    return <primitive object={result.scene} />;
}



export default function Mkc() {
    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "white" }}>
            <Canvas>
                <gridHelper args={[20, 20, "pink", "blue"]}></gridHelper>
                <ambientLight intensity={1} />
                <OrbitControls />
                <Terrain />
            </Canvas>
        </div>
    );
}
