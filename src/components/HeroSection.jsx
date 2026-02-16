import React from "react";
import logo from "../assets/images/navlogo.png"
import herograp from "../assets/images/herograph.png"
import graph from "../assets/images/homegrap2.png"
import graph2 from "../assets/images/homegrap2.png"
import graph3 from "../assets/images/homeGrap3.png"
import Dashboard from "./Dashboard";
const HeroSection = () => {
    return (
        <section className="relative  bg-black text-white overflow-hidden">
            <div className="">
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
                    <img src={graph} alt="" className=" absolute top-[-20%] w-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
                    <img src={graph} alt="" className=" absolute top-[65%] w-32 right-23 " />
                    <img src={graph} alt="" className=" absolute top-[70%] w-32 left-23 " />


                    <img src={herograp} alt="" className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl z-20">
                        Beautiful Landing Page <br /> Design for You
                    </h2>
                    <p className="mt-6 text-(--text-gray) max-w-xl">
                        A good design is not only aesthetically pleasing, but also
                        functional. It should be able to solve the problem.
                    </p>
                    <button className="mt-8 px-6 py-3 rounded-md btn font-medium shadow-lg z-20">
                        Download Template
                    </button>
                </div>
            </div>
           
        </section>
    );
};

export default HeroSection;
