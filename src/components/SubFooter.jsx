import { Twitter, Linkedin, Dribbble } from "lucide-react";

export default function SubFooter() {
    return (
        <footer className="bg-black">
            <div className="max-w-7xl mx-auto py-5 px-12 flex items-center justify-between">
                <p className="text-(--text-gray) text-sm">
                    All Rights Reserved Inkyy.com 2022
                </p>
                <div className="flex items-center gap-3">
                    <SocialIcon>
                        <Twitter size={16} />
                    </SocialIcon>
                    <SocialIcon>
                        <Linkedin size={16} />
                    </SocialIcon>
                    <SocialIcon>
                        <Dribbble size={16} />
                    </SocialIcon>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ children }) {
    return (
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-900 hover:bg-purple-600 transition-all duration-300 cursor-pointer">
            <span className="text-(--text-gray) group-hover:text-white">
                {children}
            </span>
        </div>
    );
}
