import React from 'react'
import { BtnProps } from "../types/buttons";
import Button from './Button/Button';

const YesNoBtn: React.FC<BtnProps> = () => {
    const [convertBgColor, setConvertBgColor] = React.useState < boolean > (false);
    const convertColor = () => {
        setConvertBgColor(!convertBgColor);
    }

    return (
        <div className=' grid grid-cols-2 w-full items-center gap-2 text-center justify-center '>
            <Button onClick={() => { convertColor(); }} className={`w-full  text-md font-semibold text-nowrap rounded-md py-3 ${!convertBgColor ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`} text='Yes'></Button>
            <Button onClick={() => { convertColor() }} className={`w-full text-md font-semibold text-nowrap rounded-md  py-3 ${convertBgColor ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'}`} text='No '></Button>
        </div>
    )
}
export default YesNoBtn;