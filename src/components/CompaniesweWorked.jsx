import React from 'react'
import c1 from "../assets/images/c1.png"
import c2 from "../assets/images/c2.png"
import c3 from "../assets/images/c3.png"
import c4 from "../assets/images/c4.png"
import c5 from "../assets/images/c5.png"
import c6 from "../assets/images/c6.png"
import FreeTrialBanner from './FreeTrialBanner'

const CompaniesweWorked = () => {
    const companiesData = [
        {
            icon: c1
        },
        {
            icon: c2
        },
        {
            icon: c3
        },
        {
            icon: c4
        },
        {
            icon: c5
        },
        {
            icon: c6
        },
    ]
    return (
        <>
            <section className="bg-[#18181C] text-white py-20 px-6">
                <div className="max-w-6xl mx-auto font-[Poppins-Regular]">
                    <h4 className='font-semibold  text-center text-[48px]'>Companies we Worked <br />
                        With in SInce 2015</h4>
                    <div className='flex items-center justify-center gap-16 mt-5'>
                        {
                            companiesData.map((val, index) => {
                                return (
                                    <div key={index} className='bg-[#000000] rounded-[10px] px-6 py-4'>
                                        <img src={val.icon} loading='lazy' className='w-22' alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className=''>
                        <FreeTrialBanner/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompaniesweWorked
