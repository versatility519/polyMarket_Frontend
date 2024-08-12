import React from "react";
import { Button, Tooltip, Typography } from "@material-tailwind/react";
import TradeSetting from "./TradeSetting";
import {
    Info,
    RefreshCcw,
    Plus,
    Minus, Settings
} from "lucide-react";
export default function BuySell() {
    const [number, setNumber] = React.useState(0);
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue === '' || /^[0-9]*$/.test(inputValue)) {
            setNumber(inputValue === '' ? 0 : parseInt(inputValue, 10));
        }
    }
    const [convertBgColor, setConvertBgColor] = React.useState < boolean > (false);
    const convertColor = () => {
        setConvertBgColor(!convertBgColor);
    };
    return (
        <div className="gap-4">
            <div className="flex justify-between  ">
                <div className="flex items-center gap-2">
                    Outcome
                    <Tooltip
                        placement="bottom"
                        content={
                            <div className="w-56 z-10">
                                <Typography className="font-medium">
                                    What do the prices mean?
                                    <div className="text-sm font-normal opacity-85">
                                        Prices reflect odds of {"yesNumber"}% Yes and {"noNumber"}% No. When it ends, the correct outcome will be $1 and incorrect $0.
                                    </div>
                                </Typography>
                                <Typography className="font-medium">
                                    Why don't they add up to 100?
                                    <div className="text-sm font-normal opacity-85">
                                        Slight offsets happen due to market uncertainty and other price factors.
                                    </div>
                                </Typography>
                            </div>
                        }
                        className="bg-white text-black z-10"
                    >
                        <Info size={14} className="cursor-pointer" />
                    </Tooltip>
                </div>
                <div className="flex items-center gap-2">
                    <RefreshCcw onClick={() => { }} size={14} />
                    <Tooltip content="Trade settings">
                        <Settings onClick={() => {< TradeSetting/> }} size={20} />
                    </Tooltip>

                </div>
            </div>


            <div className="flex gap-2 justify-between">
                <Button onClick={() => { convertColor(); }} className={`w-full text-md font-semibold rounded-md py-3 ${!convertBgColor ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`} text="Yes" price={20} >Yes{ }</Button>
                <Button onClick={() => { convertColor() }} className={`w-full text-md font-semibold  rounded-md py-3 ${convertBgColor ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'}`} text="No" price={20} >No</Button>
            </div>

            <div className="justify-between ">
                <p>Shares</p>
                <div className="flex  gap-2 justify-between px-2 py-2 rounded-md border-2">
                    <Tooltip content="-$10">
                        <Button className="p-0.5 text-black bg-gray-300 rounded-md" onClick={() => { setNumber(prevNumber => Math.max(prevNumber - 10, 0)) }} ><Minus /></Button>
                    </Tooltip>
                    <input className="w-full text-center" type="text" value={`$${number}`} onChange={handleInputChange} />
                    <Tooltip content="+$10">
                        <Button className="p-0.5 text-black bg-gray-300 rounded-md" onClick={() => { setNumber(prevNumber => Math.max(prevNumber + 10, 0)) }} ><Plus /></Button>
                    </Tooltip>
                </div>
                <Button onClick={() => { }} className="w-full bg-blue-600  text-white px-4 py-2 text-lg font-semibold rounded-md " >Log In</Button>
            </div>
            <div className="font-medium">
                <div className="flex justify-between px-3 ">
                    <p>Avg price</p>
                    <p className="border-dotted border-b-2 text-indigo-600 ">{number} ¢</p>
                </div>

                <div className="flex justify-between px-3 ">
                    <p>Shares</p>
                    <p className="  ">{number} ¢</p>
                </div>

                <div className="flex justify-between px-3 ">
                    <p className="text-nowrap">Potential return</p>
                    <p className="text-green-500 ">
                        ${number}({number / 100}%)</p>
                </div>
            </div>



        </div>
    )
}
