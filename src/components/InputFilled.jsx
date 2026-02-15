import React from 'react'

const InputFiled = ({ label, type = "text", readOnly, onChange, value, placeholder }) => {
    return (
        <>
            <div className='mb-4'>
                {
                    label && <label className='capitalize text-white'>{label}</label>
                }
                <div className='relative'>
                    <input type={type} value={value} onChange={onChange} readOnly={readOnly} className={`max-w-[408px] w-full
 bg-[#18181C] capitalize  text-(--text-gray) rounded px-4 py-2 focus:outline-none focus:border-purple-500 transition`} placeholder={placeholder} />
                </div>
            </div>
        </>
    )
}

export default InputFiled