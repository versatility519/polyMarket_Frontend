import React from "react";
import { TopEventCardProps } from "../../types";

const TopEventCard: React.FC<TopEventCardProps> = ({ text, btn_text, img_url, onClick, className }) => {
    return (
        <div className={`${className} flex items-center justify-between lg:w-[100vw] h-[16vh] rounded-xl`}>
            <div className="flex flex-col gap-10 ml-3 items-center text-white">
                <p className="text-lg font-bold">{text}</p>
                <button onClick={onClick} className="text-sm px-3 py-1 bg-gray-500 hover:bg-gray-400 rounded-full">{btn_text}</button>
            </div>
            <img src={img_url} alt="" className="lg:w-24 sm:w-20 w-20 border-2 flex rounded-lg border-white" />
        </div>
    )
}

export default TopEventCard;