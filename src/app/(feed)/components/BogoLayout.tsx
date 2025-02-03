"use client";
import { BogoStores } from '@/app/types';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function BogoLayout({ stores }: { stores: BogoStores[] }) {
    const [bogoStores, setBogoStores] = useState<BogoStores[]>(stores);

    //Format Delivery time 
    const displayDeliveryTime = (etaText: string) => {
        const range = etaText.split(" ")[0] //10-10
        const etaValues = range.split("–")
        if (etaValues[0] === etaValues[1]) {
            return etaValues[0]
        } else {
            return range
        }
    }

    return (
        <div className="space-y-4 ">
            <Navbar bogoStores={bogoStores} setBogoStores={setBogoStores} />

            <div className="relative min-h-screen px-6 py-12 bg-gradient-to-br">
                {/* Dark Overlay for Contrast */}
                <div className="absolute inset-0"></div>

                {/* Grid Layout */}
                <motion.div
                    className="relative pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {bogoStores.map((store, index) => (
                        <div key={index} className="flex flex-col h-full px-2">
                            <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border-[5px] border-black rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100 flex flex-col h-full">

                                {/* Image Section */}
                                <div className="h-[236px] bg-cover bg-center">
                                    <Image
                                        src={store.heroImageUrls[1].url}
                                        alt="food picture"
                                        width={600}
                                        height={600}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-4 flex-grow flex flex-col">
                                    <p className="font-bold text-black-700 text-[22px] leading-7 mb-1 text-left">{store.title}</p>

                                    {/* BOGO Foods List */}
                                    <div className="mt-4 space-y-2 flex-grow">
                                        {store.bogoFoods.map((bogoFood, index) => (
                                            <div className="flex items-start justify-between space-x-2" key={index}>
                                                <span className="text-black"> • {bogoFood.title}</span>
                                                <span className="font-medium text-purple-500">
                                                    ${(bogoFood.price / 100).toFixed(2)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto border-t border-gray/20 pt-4 pb-3 px-4">


                                    <p className="text-black-300 text-md text-left">
                                        <span className="font-medium text-blue-500">{displayDeliveryTime(store.etaRange.text)}</span> Min Delivery
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

enum Filter {
    RESET = "Reset",
    PIZZA = "Pizza",
    ASIAN = "Asian",
    MEXICAN = "Mexican",
    ITALIAN = "Italian"
}

enum Sort {
    NONE = 0,
    PRICE = 1,
    DELIVERY_TIME = 2
}

