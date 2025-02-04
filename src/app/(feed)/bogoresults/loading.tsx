"use client"

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Loading() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="space-y-4">
            {/* Skeleton for Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50 p-4">
                <div className="container h-[45px] mx-auto flex justify-between items-center">
                    {/* Loading text and spinner */}
                    <div className="flex flex-row items-center justify-center text-center space-y-2 space-x-4 lg:space-y-0 lg:space-x-10">
                        <div className="w-6 h-6 border-4 border-t-4 border-transparent border-t-gray-500 rounded-full animate-spin" />
                        <p className="text-sm lg:text-lg text-gray-300">Give us 10-15 seconds as we fetch your BOGOs!</p>
                    </div>
                </div>
            </nav>

            {/* Skeleton for BogoStores Layout */}
            <div className="relative min-h-screen px-6 py-12 bg-white pt-20">
                <motion.div
                    className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="flex flex-col h-full px-2 animate-pulse">
                            <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border-[3px] border-black rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100 flex flex-col h-full">

                                {/* Image Skeleton */}
                                <div className="h-[236px] bg-gray-200 animate-pulse"></div>

                                {/* Content Skeleton */}
                                <div className="p-4 flex-grow flex flex-col">
                                    <div className="w-32 h-6 bg-gray-300 rounded-md mb-4 animate-pulse"></div>
                                    <div className="space-y-2">
                                        <div className="w-full h-6 bg-gray-200 rounded-md animate-pulse"></div>
                                        <div className="w-full h-6 bg-gray-200 rounded-md animate-pulse"></div>
                                        <div className="w-full h-6 bg-gray-200 rounded-md animate-pulse"></div>
                                    </div>
                                </div>

                                <div className="mt-auto border-t border-gray-200 pt-4 pb-3 px-4">
                                    <div className="w-24 h-6 bg-gray-200 rounded-md animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
