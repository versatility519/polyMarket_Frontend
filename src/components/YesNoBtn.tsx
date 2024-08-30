import React from 'react'
import { YesNoProps } from "../types/buttons";
import Button from './Button/Button';

const YesNoBtn: React.FC<YesNoProps> = () => {
    const [convertBgColor, setConvertBgColor] = React.useState < boolean > (false);
    const convertColor = () => {
        setConvertBgColor(!convertBgColor);
    }

    return (
        <div className='bg-bgColor grid grid-cols-2 md:grid-flow-col  w-full items-center gap-1 text-center justify-center px-1 '>
            <Button onClick={() => { convertColor(); }} className={`w-full  text-md font-semibold text-nowrap rounded-md py-3 ${!convertBgColor ? 'bg-green-600 text-white' : 'bg-selectBtnBg text-gray-400'}`} text='Yes'></Button>
            <Button onClick={() => { convertColor(); }} className={`w-full text-md font-semibold text-nowrap rounded-md  py-3 ${convertBgColor ? 'bg-orange-600 text-white' : 'bg-selectBtnBg text-gray-400'}`} text='No '></Button>
        </div>
    )
}
export default YesNoBtn;