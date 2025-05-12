"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


function Model() {
    const modelRef = useRef<THREE.Group>(new THREE.Group());
    const movement = useRef({ forward: false, backward: false, left: false, right: false, up: false, down: false });
    const velo = useRef(0)
    const h = 0.9;
    const g = 9.8;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowLeft":
                    movement.current.left = true;
                    break;
                case "ArrowRight":
                    movement.current.right = true;
                    break;
                case "ArrowUp":
                    movement.current.forward = true;
                    break;
                case "ArrowDown":
                    movement.current.backward = true;
                    break;
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowLeft":
                    movement.current.left = false;
                    break;
                case "ArrowRight":
                    movement.current.right = false;
                    break;
                case "ArrowUp":
                    movement.current.forward = false;
                    break;
                case "ArrowDown":
                    movement.current.backward = false;
                    break;
                case " ":
                    if(modelRef.current.position.y === 0) {
                        velo.current = Math.sqrt(2*g*h);
                    }
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    useFrame((_, delta) => {
        const model = modelRef.current as THREE.Group | null;
        if (!model) return;

        const speed = 5 * delta;

        if (movement.current.forward) model.position.z -= speed;
        if (movement.current.backward) model.position.z += speed;
        if (movement.current.left) model.position.x -= speed;
        if (movement.current.right) model.position.x += speed;

        if(model.position.y > 0 || velo.current > 0) {
            velo.current -= g * delta;
            model.position.y += velo.current * delta;
            if (model.position.y < 0) model.position.y = 0;
        }

    });

    const result = useLoader(GLTFLoader, "/Penguin.gltf");
    return <primitive object={result.scene} ref={modelRef} />;
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

export default function Pingu() {
    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "white" }}>
            <Canvas>
                <gridHelper args={[20, 20, "pink", "blue"]}></gridHelper>
                <ambientLight intensity={1} />
                <OrbitControls />
                <Model />
            </Canvas>
        </div>
    );
}
