"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model() {
    const modelRef = useRef<THREE.Group>(new THREE.Group());
    const result = useLoader(GLTFLoader, "/Bee.gltf");

    return <primitive object={result.scene} ref={modelRef} position={[0, 0, 0]} />;
}



export default function Bee() {
    return (
        <div className={"w-full h-full"}>
            <Canvas>
                <ambientLight intensity={1} />
                <OrbitControls enableZoom={false} enablePan={false} />
                <Model />
            </Canvas>
        </div>
    );
}

