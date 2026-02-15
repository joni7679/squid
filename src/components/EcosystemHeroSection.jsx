import { FaReact } from "react-icons/fa";
import { SiJavascript, SiFigma, SiWebflow } from "react-icons/si";
import logo from "../assets/images/logo.png"
import man from "../assets/images/man.png"
import grap from "../assets/images/grap.png"
import start from "../assets/images/start.png"
import image3 from "../assets/images/imge3.png"

export default function EcosystemHeroSection() {
    return (
        <section className="bg-black text-white min-h-screen flex items-center px-6 relative">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center font-[Poppins-Regular]">

                <div className="relative flex justify-center items-center">
                    <div className="absolute w-120 h-120 border border-gray-800 rounded-full"></div>

                    <div className="absolute w-100 h-100 border border-gray-800 rounded-full"></div>

                    <div className="absolute w-75 h-75 border border-gray-800 rounded-full"></div>

                    <div className="absolute w-[200px] h-[200px] border border-gray-800 rounded-full"></div>

                    <div className="w-[120px] h-[120px] bg-[#18181C] rounded-full flex items-center justify-center shadow-lg z-10">
                        <img src={logo} alt="" loading='lazy' />
                    </div>
                    <div className="absolute w-100 h-100  animate-spin-slow">
                        <div className="absolute top-5 left-1/2 -translate-x-1/2  p-3 rounded-full">
                            <img src={grap} alt="" loading='lazy' />
                        </div>
                        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2  p-3 rounded-full">
                            <img src={image3} loading='lazy' className="w-14" alt="" />
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 ">
                        </div>
                        <img src={start} className="w-12 absolute -translate-x-1/2 left-[80px] top-22" alt="" />
                        <img src={man} className="w-12 absolute -translate-x-1/2 right-[40px] top-23" alt="" />
                        <div className="absolute  top-1/2 -translate-y-1/2 left-6  p-3 rounded-full">
                            <img src={grap} alt="" loading='lazy'/>
                        </div>
                        <div className="absolute  bottom-14 -translate-y-1/2 right-6">
                            <img src={grap} alt="" loading='lazy'/>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                        We're here to <br />
                        guide and help <br />
                        you at all times
                    </h1>
                    <p className="text-(--text-gray) font-normal text-sm mb-8 max-w-md">
                        A good design is not only aesthetically pleasing, but also functional.
                        It should be able to solve the problem.
                    </p>
                    <button className="px-7 py-3 rounded-[5px] text-white 
btn
transition-all duration-300 hover:-translate-y-1 
hover:shadow-lg">
                        Download
                    </button>
                </div>

            </div>
        </section>
    );
}
