"use client"
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true); // Track if image is loading
  const router = useRouter();

  const handleClick = () => {
    router.push(`/bogoresults?address=${encodeURIComponent(address)}`);
  };

  return (
    <div className="relative h-screen w-screen bg-gradient-to-tr bg-black bg-opacity-25">
      <div className="absolute inset-0 w-full h-full object-cover filter blur-sm -z-10">
        <Image
          src="/background.jpg"
          alt="Background Image"
          fill
          quality={100}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
          onLoad={() => setLoading(false)} // Hide loader when image loads
        />
      </div>

      {/* Display a blank page while background image loads */}
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
        </div>
      )}

      {!loading && (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Find all UberEats BOGO deals
          </h1>
          <p className="text-gray-300">
            Ex: 888 david st manhatten NY 12345
          </p>

          <div className="relative p-3 border border-gray-200 rounded-lg w-full max-w-lg">
            <div className="flex rounded-md border-2 border-blue-500 overflow-hidden mx-auto font-[sans-serif]">
              <input type="email" placeholder="Enter your address here..."
                className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
                onChange={(e) => setAddress(e.target.value)} />
              <button type='button' className="flex items-center justify-center bg-[#007bff] px-5" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
                  <path
                    d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
