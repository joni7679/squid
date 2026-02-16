import { FiBox, FiLayers, FiFeather, FiPenTool, FiScissors, FiMessageSquare } from "react-icons/fi";
import icon1 from "../../src/assets/images/icon1.png"
import icon2 from "../../src/assets/images/icon2.png"
import icon3 from "../../src/assets/images/icon3.png"
import icon4 from "../../src/assets/images/icon4.png"
import icon5 from "../../src/assets/images/icon5.png"
import icon6 from "../../src/assets/images/icon6.png"


const features = [
    {
        icon: icon1,
        title: "Fully Customizable",
        desc: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
    },
    {
        icon: icon2,
        title: "Fully Customizable",
        desc: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
    },
    {
        icon: icon3,
        active: true,
        title: "Fully Customizable",
        desc: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
    },
    {
        icon: icon4,
        title: "Fully Customizable",
        desc: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
    },
    {
        icon: icon5,
        title: "Fully Customizable",
        desc: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
    },
    {
        icon: icon6,
        title: "Fully Customizable",
        desc: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
    },
];

export default function FeatureSection() {
    return (
        <section className="bg-black text-white py-20 px-6">
            <div className="max-w-6xl mx-auto font-[Poppins-Regular]">

                {/* Heading */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-3">Feature Boxes</h2>
                    <p className="text-(--text-gray) max-w-lg text-sm">
                        A good design is not only aesthetically pleasing, but also
                        functional. It should be able to solve the problem
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#18181C] h-[371px] rounded-[20px] p-8 text-center  shadow-lg">
                            <div className={`w-[104px]  h-[104px]  rounded-[30px] mx-auto flex items-center justify-center 
              bg-[#222228]  mb-6 text-gray-300 ${index === 2 ? "active" : ""}`}>
                                <img src={item.icon} loading='lazy' alt="" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">
                                {item.title}
                            </h3>
                            <p className="text-(--text-gray) text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
