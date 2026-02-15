import React from 'react'
import eath from "../assets/images/earth.png"

const FreeTrialBanner = () => {
    return (
        <>
            <div className=' flex items-center justify-center py-20'>
                <div className="relative w-[900px] rounded-[40px] px-16 py-14 overflow-hidden
        bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
                    <div className="relative z-10 max-w-md">
                        <p className="text-white text-sm mb-4">
                            Love our Our Tool?
                        </p>
                        <h2 className="text-white text-4xl font-semibold leading-tight mb-6">
                            Fell Free to Join our <br />
                            15 Days free Trial
                        </h2>
                        <button className="bg-black text-white px-6 py-2 rounded-md text-sm hover:opacity-90 transition">
                            Download Template
                        </button>
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-40">
                        <img
                            src={eath}  loading='lazy'
                            alt="world pattern"
                            className="w-[350px]"
                        />
                    </div>
                </div>

            </div>

        </>
    )
}

export default FreeTrialBanner
