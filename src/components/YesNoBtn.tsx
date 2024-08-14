import React from 'react'
import { Button, ListItem, Menu, MenuHandler, Typography, MenuList } from '@material-tailwind/react';
import { BtnProps } from "../types/buttons";

const YesNoBtn: React.FC<BtnProps> = ({ text, price, icon, onClick, className, }) => {
    const [convertBgColor, setConvertBgColor] = React.useState < boolean > (false);
    const convertColor = () => {
        setConvertBgColor(!convertBgColor);
    }

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <div className=' flex w-full gap-4 justify-center '>
            <Button style={{ textTransform: "none" }} onClick={() => { convertColor(); }} className={`w-full text-md font-semibold text-nowrap rounded-md py-3 ${!convertBgColor ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`} price={20} >Yes 53¢</Button>
            <Button style={{ textTransform: "none" }} onClick={() => { convertColor() }} className={`w-full text-md font-semibold text-nowrap rounded-md py-3 ${convertBgColor ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'}`} price={20} >No 40¢</Button>
            {/* <Button style={{ textTransform: "none" }} onClick={() => { convertColor() }} className={`block sm:viw-full text-md font-semibold text-nowrap rounded-md py-3 ${convertBgColor ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'}`} price={20} >No 40¢</Button> */}
        </div>
    )
}
export default YesNoBtn;