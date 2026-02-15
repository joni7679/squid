import React from "react";
import logo from "../assets/images/navlogo.png"
const HeroSection = () => {
    return (
        <section className="relative min-h-screen bg-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-20"></div>
            <nav className="relative z-10 flex justify-between items-center px-16 py-6">
                <img src={logo} loading='lazy' alt="" />
                <div className="flex items-center gap-8">
                    <a href="#" className="text-(--text-gray) hover:text-white">
                        Home
                    </a>
                    <button className="px-5 py-2 rounded-md btn  text-sm font-medium">
                        Download Template
                    </button>
                </div>
            </nav>
            <div className="relative z-10 flex flex-col items-center text-center mt-20 px-4">

                <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
                    Beautiful Landing Page <br /> Design for You
                </h2>

                <p className="mt-6 text-(--text-gray) max-w-xl">
                    A good design is not only aesthetically pleasing, but also
                    functional. It should be able to solve the problem.
                </p>

                <button className="mt-8 px-6 py-3 rounded-md btn font-medium shadow-lg">
                    Download Template
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
