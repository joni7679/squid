import React from 'react'

import logo from "../assets/images/logo.png"
import SubFooter from './SubFooter'

const Footer = () => {
    const navLinks = [

        {
            label: "Home",
        },
        {
            label: "section one",
        },
        {
            label: "section two",
        },
        {
            label: "section three",
        },
    ]
    return (
        <>
            <footer class="bg-[#18181C] ">
                <div class="max-w-screen-xl mx-auto flex items-center  justify-around gap-9 px-4 sm:px-6 pt-12 pb-6">
                    <div class="space-y-6 w-[305px] ">
                        <img loading='lazy' src={logo} alt="" className='w-14' />
                        <p className='text-(--text-gray) text-[14px]'>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>

                    </div>


                    <div className='flex items-center justify-center gap-16'>
                        <div class="space-y-6">
                            <h6 class="text-sm text-white font-medium">Sections</h6>
                            <ul class="space-y-3">
                                {
                                    navLinks.map((v, i) => {
                                        const { label } = v;

                                        return (
                                            <li key={i}><a class="text-[13px] text-(--text-gray) hover:text-white">{label}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div class="space-y-6">
                            <ul class="space-y-3">
                                {
                                    navLinks.map((v, i) => {
                                        const { label } = v;

                                        return (
                                            <li key={i}><a class="text-[13px] text-(--text-gray) hover:text-white">{label}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div class="space-y-6">
                            <ul class="space-y-3">
                                {
                                    navLinks.map((v, i) => {
                                        const { label } = v;

                                        return (
                                            <li key={i}><a class="text-[13px] text-(--text-gray) hover:text-white">{label}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <SubFooter />
            </footer>
        </>
    )
}

export default Footer
