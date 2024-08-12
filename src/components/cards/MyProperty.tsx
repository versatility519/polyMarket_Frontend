import React from "react";
import { MyPropertyProps } from "../../types";

const MyProperty: React.FC<MyPropertyProps> = ({ className, text, icon, value, onClick, }) => {
    return (
        <div className="flex md:w-full border-2 px-6 py-4 justify-between rounded-xl">
            <div className="flex flex-col items-center gap-3 text-black-700" onClick={onClick}>
                <div className={`${className}`}>
                    {icon}
                </div>
                <div className="flex flex-col text-wrap">
                    <div className="text-md text-nowrap">{text}</div>
                    <div className="text-xl font-bold">{value}</div>
                </div>
            </div>
        </div>
    )
}

export default MyProperty;
