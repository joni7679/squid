import React from 'react'

const Card = ({ data }) => {
    return (
        <>
            <div
                class="bg-white border border-gray-200 shadow-md w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                <div class="p-6">
                    <div>
                        <h3 class="text-lg font-semibold"> Name:{data.name}</h3>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">Email : {data.email}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">Phone : {data.phone}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">Website : {data.website}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
