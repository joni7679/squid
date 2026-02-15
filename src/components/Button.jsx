import React from 'react'
const Button = ({ title }) => {
    return (
        <>
            <button className="px-7 py-3 rounded-[5px] text-white 
bg-gradient-to-r from-pink-400 to-purple-600
transition-all duration-300 hover:-translate-y-1 
hover:shadow-lg">
                {title}
            </button>
        </>
    )
}

export default Button
