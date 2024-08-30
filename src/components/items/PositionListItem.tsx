import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Tooltip, } from "@material-tailwind/react";
import { Upload } from "lucide-react";
import { customers } from "../database";
import Button from "../Button/Button";

const PositionListItem: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState < boolean > (false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex w-full overflow-x-auto">

      <div className="w-full">

        <div className="uppercase text-sm  text-gray-500 py-1 lg:flex hidden ">
          <p className=" w-8/12">Market</p>
          <p className=" w-1/12">Avg</p>
          <p className=" w-2/12">Current</p>
          <p className="   ">Value</p>
        </div>
        {customers.map(({ avatar, eventName, isBet, avgPrice, curPrice, totalPrice, rate }, index) => (

          <div className=" ">
            <div key={index} className=" md:hidden hidden lg:flex w-full py-2 items-center">
              <div className=" flex gap-2 items-center w-8/12">
                <img width={48} className="rounded-md" src={avatar} alt="avatar" />

                <div className=" ">
                  <p className="text-base text-nowrap text-textWhiteColor  cursor-pointer font-normal">
                    {eventName}
                  </p>
                  <div className="flex text-nowrap items-center gap-2">
                    {isBet ? (
                      <p className="bg-yesBg text-yesBtnText  text-center text-sm w-6 font-semibold rounded-md">Yes</p>
                    ) : (
                      <p className=" bg-noBg text-noBtnText text-center  text-sm w-6 font-semibold rounded-md">No</p>
                    )}
                    <p className="text-gray-400">{33} shares</p>
                  </div>
                </div>
                {/* <Content avatar={avatar} eventName={eventName} isBet={isBet} value={33} /> */}
              </div>
              <div className=" w-1/12 lg:flex hidden">
                <p className="font-normal text-nowrap text-textWhiteColor">{avgPrice} $</p>
              </div>
              <div className=" w-1/12 lg:flex hidden">
                <p className="font-normal text-nowrap text-textWhiteColor">{curPrice} $</p>
              </div>
              <div className="flex text-end items-center gap-4">
                <div className="font-normal">
                  <p className="text-textWhiteColor">${totalPrice}</p>
                  <p className="text-nowrap font-normal text-green-600">{rate} (686.59%)</p>
                </div>
                <div className="items-end lg:flex hidden  rounded-md hover:bg-cardBg p-1">
                  <Tooltip content="Share">
                    <Upload size={20} className="text-textWhiteColor cursor-pointer" onClick={() => alert('Share button clicked!')} />
                  </Tooltip>
                </div>
              </div>
            </div>

            <div key={index} className="lg:hidden sm:flex flex-col gap-2 w-full py-1 items-center justify-between">
              <div className="flex w-full gap-2 tems-center">
                <img width={48} className="rounded-md" src={avatar} alt="avatar" />
                <p className="text-base cursor-pointer text-textWhiteColor font-normal">
                  {eventName}
                </p>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className=" text-nowrap items-center">
                  {isBet ? (
                    <p className="bg-yesBg text-yesBtnText text-center text-sm w-6 font-semibold rounded-md">Yes</p>
                  ) : (
                    <p className=" bg-noBg text-noBtnText text-center  text-sm w-6 font-semibold rounded-md">No</p>
                  )}

                  <div onClick={toggleVisibility} className={`flex gap-1 w-28 text-nowrap text-sm items-center bg-bgColor text-gray-400  rounded-full cursor-pointer`}>
                    <p className=" "> {2} shares</p>
                    {isVisible ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-end font-normal">
                    <p className="text-textColor">${totalPrice}</p>
                    <p className="text-nowrap font-normal text-green-600">{rate} (686.59%)</p>
                  </div>
                  <div className="items-end lg:flex hidden">
                    <Tooltip content="Share">
                      <Upload size={20} onClick={() => alert('Share button clicked!')} />
                    </Tooltip>
                  </div>
                </div>
              </div>

              <div className={`${!isVisible ? 'hidden' : ''} bg-cardBg rounded-md  w-full px-4 py-2 `}>
                <div className="flex  items-center justify-between ">
                  <div className="flex gap-2" >
                    <div className=" text-sm ">
                      <p className="text-gray-400">Avg</p>
                      <p className="font-normal text-textWhiteColor text-nowrap">{avgPrice} $</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-400">Current</p>
                      <p className="font-normal text-textWhiteColor text-nowrap">{curPrice} $</p>
                    </div>
                  </div>
                  <Button text="Trade" className="bg-black text-white hover:bg-btnHoverColor rounded-md px-4 py-2 w-16 text-center" />
                </div>
              </div>
            </div>
          </div>


        ))
        }
      </div >
    </div >
  );
};

export default PositionListItem;
