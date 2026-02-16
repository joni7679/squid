import React from 'react';

const Dashboard = () => {
    return (
        <div className=" flex items-center justify-center p-10 font-sans text-gray-400">
            <div className="relative w-full max-w-[1100px] h-[680px] bg-[#121214] rounded-[45px] shadow-2xl border border-white/5 flex p-8 gap-6">
                <div className="w-[28%] bg-[#1c1c1f] rounded-[35px] p-8 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-center mb-12">
                            <div className="relative">
                                <div className="w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 bg-gray-500 rounded-full" />
                                </div>
                                <div className="absolute -top-1 -left-1 w-3 h-3 bg-gray-700 rounded-full" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-700 rounded-full" />
                            </div>
                        </div>
                        <div className="space-y-8">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center gap-5 opacity-40 hover:opacity-100 transition-all cursor-pointer">
                                    <div className="w-7 h-7 bg-white/10 rounded-lg" />
                                    <div className="h-2 w-32 bg-white/10 rounded-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-pink-500 to-purple-500">
                            <img src="https://i.pravatar.cc/150?u=a" className="w-14 h-14 rounded-full border-4 border-[#1c1c1f]" alt="me" />
                        </div>
                        <div className="h-1.5 w-20 bg-white/5 rounded-full" />
                    </div>
                </div>

            
                <div className="w-[30%] flex flex-col gap-6">
                
                    <div className="flex-1 bg-[#1c1c1f] rounded-[35px] p-8 relative flex items-center justify-center">
                        <div className="absolute top-8 left-8 w-6 h-6 bg-white/5 rounded-md" />

                     
                        <div className="w-40 h-40 rounded-full border-[14px] border-white/5 flex items-center justify-center relative">
                       
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                                <circle cx="80" cy="80" r="66" fill="transparent" stroke="url(#grad1)" strokeWidth="14" strokeDasharray="415" strokeDashoffset="100" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="w-16 h-16 rounded-full border-8 border-white/5" />
                        </div>
                    </div>

                    {/* Bottom Bar Chart Card */}
                    <div className="flex-1 bg-[#1c1c1f] rounded-[35px] p-8 relative">
                        <div className="absolute top-8 right-8 w-6 h-6 bg-white/5 rounded-md" />
                        <div className="mt-12 flex items-end justify-center gap-3 h-28">
                            {[20, 45, 30, 60, 40, 75, 95].map((h, i) => (
                                <div
                                    key={i}
                                    style={{ height: `${h}%` }}
                                    className={`w-4 rounded-full ${i > 4 ? 'bg-gradient-to-t from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.3)]' : 'bg-white/10'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. Right Column */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* User List Card */}
                    <div className="flex-[2] bg-[#1c1c1f] rounded-[35px] p-8">
                        <div className="absolute top-8 right-8 w-6 h-6 bg-white/5 rounded-md" />
                        <div className="space-y-8 mt-4">
                            {[
                                { img: "https://i.pravatar.cc/150?u=1", color: "pink-500" },
                                { img: "https://i.pravatar.cc/150?u=2", color: "yellow-500" },
                                { img: "https://i.pravatar.cc/150?u=3", color: "purple-500" },
                                { img: "https://i.pravatar.cc/150?u=4", color: "blue-500" }
                            ].map((user, i) => (
                                <div key={i} className="flex items-center gap-5 group">
                                    <img src={user.img} className={`w-12 h-12 rounded-full border-2 border-${user.color}/50`} alt="" />
                                    <div className="flex-1 space-y-2.5">
                                        <div className="h-2 w-full bg-white/10 rounded-full" />
                                        <div className="h-2 w-2/3 bg-white/5 rounded-full opacity-50" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Placeholder Card */}
                    <div className="flex-1 bg-white/5 border border-white/5 rounded-[35px]" />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;