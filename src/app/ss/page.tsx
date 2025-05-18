"use client"

import type React from "react"
import { type JSX, useState, useEffect } from "react"
import Chicken from "@/components/chars/chicken/chicken"
import Crab from "@/components/chars/crab/crab"
import Cyclops from "@/components/chars/cyclops/cyclops"
import Demon from "@/components/chars/demon/demon"
import Ghost from "@/components/chars/ghost/ghost"
import Panda from "@/components/chars/panda/panda"
import Penguin from "@/components/chars/penguin/penguin"
import Skull from "@/components/chars/skull/skull"
import YD from "@/components/chars/yellowdragon/yellowdragon"
import Bee from "@/components/chars/bee/bee"

// Map image names to corresponding components
const componentMap: Record<string, JSX.Element> = {
    "beeimg.png": <Bee />,
    "chickenimg.png": <Chicken />,
    "crabimg.png": <Crab />,
    "cyclopsimg.png": <Cyclops />,
    "demonimg.png": <Demon />,
    "ghostimg.png": <Ghost />,
    "pandaimg.png": <Panda />,
    "pinguimg.png": <Penguin />,
    "skullimg.png": <Skull />,
    "yellowdragonimg.png": <YD />,
}

const images = Object.keys(componentMap)

export default function SelectScreen() {
    const [selectedComponent, setSelectedComponent] = useState<React.ReactNode>(null)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [blocks, setBlocks] = useState<JSX.Element[]>([])

    // Generate Minecraft-style blocks for the background
    useEffect(() => {
        const blockTypes = ["dirt", "grass-top", "stone", "cobblestone", "oak-planks", "sand", "gravel"]

        const newBlocks = []
        const blockCount = 200 // Number of blocks to generate

        for (let i = 0; i < blockCount; i++) {
            const blockType = blockTypes[Math.floor(Math.random() * blockTypes.length)]
            const size = Math.floor(Math.random() * 30) + 30 // Random size between 30-60px
            const x = Math.random() * 100 // Random x position (0-100%)
            const y = Math.random() * 100 // Random y position (0-100%)
            const z = Math.floor(Math.random() * 10) // Random z-index for depth
            const rotation = Math.floor(Math.random() * 4) * 90 // Random rotation (0, 90, 180, 270 degrees)

            newBlocks.push(
                <div
                    key={i}
                    className={`absolute block-${blockType}`}
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${x}%`,
                        top: `${y}%`,
                        zIndex: z,
                        transform: `rotate(${rotation}deg)`,
                        animation: `float-block ${Math.random() * 10 + 20}s infinite linear`,
                    }}
                />,
            )
        }

        setBlocks(newBlocks)
    }, [])

    const handleSelect = (img: string) => {
        setSelectedComponent(componentMap[img])
        setSelectedImage(img)
    }

    return (
        <div className="h-screen w-screen flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-green-800 p-2 border-b border-green-900 shadow-md">
                <h1 className="text-xl font-bold text-center text-white">Select Your Character</h1>
            </div>

            {/* Main content - side by side layout */}
            <div className="flex flex-1 overflow-hidden">
                {/* Character selection sidebar - WHITE BACKGROUND */}
                <div className="w-72 bg-white border-r border-gray-200 p-3 overflow-y-auto shadow-md">
                    <div className="grid grid-cols-4 gap-2">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={`relative cursor-pointer transition-transform hover:scale-105 ${
                                    selectedImage === img ? "border-2 border-green-500 rounded-md" : "border border-gray-200"
                                }`}
                                onClick={() => handleSelect(img)}
                            >
                                <div className="bg-white rounded-md p-1 hover:bg-gray-50 transition-colors shadow-sm">
                                    <img src={`/${img}`} alt={img.replace("img.png", "")} className="w-[50px] h-[50px] object-contain" />
                                    {selectedImage === img && (
                                        <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-0.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3 w-3"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Character info */}
                    {selectedImage && (
                        <div className="mt-4 p-3 bg-gray-100 rounded-md border border-gray-200">
                            <h3 className="font-medium text-gray-800 capitalize">{selectedImage.replace("img.png", "")}</h3>
                            <p className="text-xs text-gray-600 mt-1">Click the button below to confirm your selection</p>
                            <button className="mt-3 w-full py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition-colors shadow-sm">
                                Confirm Selection
                            </button>
                        </div>
                    )}
                </div>

                {/* Character display area - WITH MINECRAFT BACKGROUND */}
                <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                    {/* Minecraft background */}
                    <div className="absolute inset-0 minecraft-background">
                        {/* Minecraft sky */}
                        <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-sky-600"></div>

                        {/* Minecraft blocks grid */}
                        <div className="absolute inset-0 minecraft-grid">{blocks}</div>

                        {/* Minecraft ground */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/4 minecraft-ground"></div>
                    </div>

                    {/* Character display */}
                    <div className="relative z-10 flex justify-center items-center h-full w-full">
                        {selectedComponent ? (
                            <div className="flex justify-center items-center h-full w-full">{selectedComponent}</div>
                        ) : (
                            <div className="text-center text-white bg-black/30 p-6 rounded-lg backdrop-blur-sm border-2 border-gray-800 minecraft-panel">
                                <div className="mb-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 mx-auto text-white/70"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <p className="text-lg font-minecraft">Select a character to preview</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
