import React from 'react';
import { IoIosFlash } from 'react-icons/io';
import { Spotlight } from './ui/Spotlight';
import Link from 'next/link'; // Next.js Link import

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Spotlights */}
      <Spotlight
        className="absolute top-[-10rem] left-[-2.5rem] md:left-[-8rem] md:top-[-5rem] h-full opacity-30"
        fill="red"
      />
      <Spotlight
        className="absolute top-[-2.5rem] left-[100%] md:left-[-8rem] md:top-[-5rem] h-[80vh] w-[50vw] opacity-20"
        fill="black"
      />
      <Spotlight
        className="absolute top-[-7rem] left-[20rem] h-[80vh] w-[50vw] opacity-10"
        fill="red"
      />

      {/* Hero Content */}
      <div className="h-full w-full flex flex-col items-center justify-center text-center px-6 relative">
        {/* Radial Gradient Overlay */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-10 z-20">
          <IoIosFlash className="text-5xl text-red-500 animate-bounce" />
          <span className="text-4xl font-bold text-red-400 tracking-wider">
            Keplit
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-gray-400 to-red-500 z-20 leading-tight">
          Empowering your business with <br />
          <span className="text-red-400">end-to-end software solutions</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-sm md:text-lg lg:text-xl text-gray-300 max-w-3xl z-20 leading-relaxed">
          We specialize in Web and App Development, Cloud-Native Solutions, QA
          Testing, Deployment, and MVP Development to bring your ideas to life.
        </p>

        {/* Learn More Button */}
        <button className="mt-8 px-8 py-4 bg-gradient-to-r from-red-500 to-gray-600 hover:from-gray-600 hover:to-red-500 text-white font-medium text-lg rounded-full shadow-lg transition duration-300 z-20 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
