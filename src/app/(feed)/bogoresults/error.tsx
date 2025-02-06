"use client";
import Image from "next/image";

export default function ErrorPage({ error }: { error: Error }) {
    return (
        <div className="h-screen w-screen bg-gray-50 flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                <div className="w-full lg:w-1/2 mx-8">
                    <div className="sm:text-7xl text-5xl text-green-500 font-dark font-extrabold mb-8"> Something went wrong :( </div>
                    <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                        {error.message}
                    </p>

                    <a href="https://ubereats-bogo.vercel.app/"
                        className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">
                        Back to homepage
                    </a>
                </div>
                <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                    <Image
                        src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
                        className=""
                        alt="Page not found"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    );
}