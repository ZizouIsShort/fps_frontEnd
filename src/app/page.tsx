"use client"

import type React from "react"

import { useState } from "react"
import { Gamepad2, User, Lock, ChevronRight, Loader2 } from "lucide-react"

export default function Home() {
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate login process
        setTimeout(() => setIsLoading(false), 1500)
    }

    return (
        <div className="bg-black min-h-screen flex items-center justify-center p-4 text-white">
            {/* Animated background pattern */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0,_transparent_8px)] bg-[length:24px_24px]"></div>
            </div>

            <div className="relative bg-zinc-900 p-8 rounded-lg border border-zinc-800 shadow-[0_0_15px_rgba(255,255,255,0.1)] w-full max-w-md backdrop-blur-sm">
                {/* Logo and header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <div className="bg-white text-black p-3 rounded-full">
                            <Gamepad2 className="h-8 w-8" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-white">PLAYER LOGIN</h1>
                    <p className="text-zinc-400 mt-2">Enter your credentials to continue</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                            Email
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-zinc-500" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full pl-10 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder:text-zinc-500 transition-all"
                                placeholder="gamer@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-zinc-500" />
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full pl-10 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder:text-zinc-500 transition-all"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 bg-zinc-800 border-zinc-700 rounded text-white focus:ring-white"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-400">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-white hover:text-zinc-300 underline underline-offset-4 transition-colors"
                            >
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 bg-white hover:bg-zinc-200 text-black font-bold rounded-md shadow-sm transition-all duration-200 ease-in-out flex items-center justify-center group"
                        >
                            {isLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <>
                                    SIGN IN
                                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-zinc-800"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-zinc-900 px-2 text-zinc-500">or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            className="py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-md transition-colors border border-zinc-700"
                        >
                            Discord
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-md transition-colors border border-zinc-700"
                        >
                            Steam
                        </button>
                    </div>

                    <div className="text-center text-sm text-zinc-400 mt-6">
                        Don&apos;t have an account?{" "}
                        <a
                            href="#"
                            className="font-medium text-white hover:text-zinc-300 underline underline-offset-4 transition-colors"
                        >
                            Sign up
                        </a>
                    </div>
                </form>

                {/* Gaming-themed decorative elements */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-white"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-white"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-white"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-white"></div>
            </div>
        </div>
    )
}
