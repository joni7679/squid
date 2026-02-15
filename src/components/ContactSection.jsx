import React from 'react'
import cricle from "../assets/images/cricle.png"
import criclegrap from "../assets/images/criclegrap.png"
import InputFiled from './InputFilled'

const ContactSection = () => {
    return (
        <>
            <section className='contact-section mx-auto container py-11  px-11'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 min-h-screen">
                    <div className='w-[500px]  flex-1 relative'>

                        <img loading='lazy' src={cricle} alt="" className='w-full h-auto object-cover' />
                        <img loading='lazy' src={criclegrap} alt="" className=' absolute top-[-28px] left-[-4%]' />
                        <img loading='lazy' src={criclegrap} alt="" className=' absolute bottom-[50px] right-[-4%]' />

                    </div>
                    <div >
                        <h2 className="text-5xl font-semibold mb-4 text-white">Get In Touch</h2>
                        <p className="text-(--text-gray) mb-8 text-lg">
                            A good design is not only aesthetically pleasing, but  <br /> also functional. It should be able to solve the problem
                        </p>
                        <form className="space-y-4">
                            <InputFiled placeholder="your Email" />
                            <InputFiled placeholder="name" />
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="max-w-[408px] w-full
 bg-[#18181C] text-(--text-gray) rounded-md px-4 py-3 focus:outline-none focus:border-purple-500 transition"
                            ></textarea>
                            <div>
                                <button
                                    type="submit"
                                    className="py-3 px-7 btn rounded-[5px] text-white  btn  cursor-pointer
transition-all duration-300 hover:-translate-y-1 
">
                                    Get In Touch
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection
