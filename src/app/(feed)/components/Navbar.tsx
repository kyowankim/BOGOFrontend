'use client'
import { BogoStores } from '@/app/types';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';  // Hamburger menu icons
import Image from 'next/image';

const Navbar = ({ bogoStores, setBogoStores }: { bogoStores: BogoStores[], setBogoStores: Dispatch<SetStateAction<BogoStores[]>> }) => {
    const [originalBogoStores, setOriginalBogoStores] = useState<BogoStores[]>(bogoStores);
    const [filterBy, setFilterBy] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to manage the menu toggle

    const sortDisplayValues = new Map<string, Sort>([
        ["", Sort.NONE],
        ["Best Deals", Sort.PRICE],
        ["Shortest Delivery Time", Sort.DELIVERY_TIME]
    ]);

    const sortStores = (criteria: Sort) => {
        const sortedStores = [...bogoStores].sort((a, b) => {
            if (criteria === Sort.PRICE) {
                const highestA = Math.max(...a.bogoFoods.map(val => val.price));
                const highestB = Math.max(...b.bogoFoods.map(val => val.price));
                return highestB - highestA;
            } else if (criteria === Sort.DELIVERY_TIME) {
                const timeA = parseInt(a.etaRange.text.split("–")[0], 10);
                const timeB = parseInt(b.etaRange.text.split("–")[0], 10);
                return timeA - timeB;
            }
            return 0;
        });

        setBogoStores(sortedStores);
    };

    const filterStores = (criteria: string) => {
        let filteredStores = [];
        if (criteria === Filter.NONE) {
            filteredStores = originalBogoStores;
        } else {
            filteredStores = originalBogoStores.filter(store => store.categories.includes(criteria));
        }
        setBogoStores(filteredStores);
    }

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setFilterBy(value);
        filterStores(value);
        setIsMenuOpen(false);
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSortBy(value);
        sortStores(sortDisplayValues.get(value)!);
        setIsMenuOpen(false)
    };

    return (
        <motion.div
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Fixed Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50">
                <div className="flex justify-between items-center p-4 w-full">
                    <Link href="/" className="flex items-center space-x-2 text-white text-2xl font-semibold hover:opacity-90 transition duration-300 ease-in-out">
                        <Image
                            src="/bogo.png" // Path to your image in the public folder
                            alt="Logo"
                            width={45} // Adjust the width
                            height={45} // Adjust the height
                        />
                        <p className='pl-2'>Home</p>
                    </Link>

                    {/* Mobile Hamburger Menu */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Menu Options for Desktop and Mobile */}
                    <div className={`flex-1 flex justify-end items-center ${isMenuOpen ? 'flex-col absolute top-16 left-0 w-full bg-gray-800 p-6 z-50' : 'hidden lg:flex'}`}>
                        {/* Sorting Dropdown */}
                        <div className="flex flex-col pr-5 pb-3 sm:pb-0 lg:flex-row lg:items-center lg:space-x-4 mb-4 lg:mb-0 w-full lg:w-auto">
                            <span className="text-lg pr-2 mb-2 lg:mb-0">Sort By:</span>
                            <select
                                className="bg-gray-700 p-3 rounded-md text-white w-full lg:w-36"
                                value={sortBy}
                                onChange={handleSortChange}
                            >
                                {Array.from(sortDisplayValues.entries()).map(([key, value]) => (
                                    <option value={key} key={value}>{key}</option>
                                ))}
                            </select>
                        </div>

                        {/* Filtering Dropdown */}
                        <div className="flex flex-col pr-5 pb-3 sm:pb-0 lg:flex-row lg:items-center lg:space-x-4 w-full lg:w-auto">
                            <span className="text-lg pr-2 mb-2 lg:mb-0">Filter By:</span>
                            <select
                                className="bg-gray-700 p-3 rounded-md text-white w-full lg:w-36"
                                value={filterBy}
                                onChange={handleFilterChange}
                            >
                                {Object.values(Filter).map((displayValue) => (
                                    <option value={displayValue} key={displayValue}>{displayValue}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </nav>
        </motion.div>
    );
};

enum Filter {
    NONE = "None",
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

export default Navbar;