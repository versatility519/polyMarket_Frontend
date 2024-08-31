import React from "react";
import Content from "./Content";
import { SquareArrowOutUpRight } from "lucide-react";
// import { activityItem } from "../../contents/profileItem";
import { customers } from "../database";

const ProfileAcitiveListItem: React.FC = () => {
  return (
    <div className="flex w-full overflow-x-auto">
      <div className="w-full ">
        <div className="uppercase text-gray-300 gap-2 lg:flex hidden ">
          <p className="w-16 ">Type</p>
          <div className="w-full justify-between flex">
            <p className="">Market</p>
            <p className="">Amount</p>
          </div>
        </div>

        {customers.map(({ avatar, eventName, isBet, totalPrice }, index) => {
          return (
            <div className=" ">
              <div key={index} className="md:hidden hidden lg:flex w-full py-2 items-center gap-2">
                <p className="font-normal text-textWhiteColor w-14" >Convert</p>
                <div className="w-full">
                  <Content avatar={avatar} eventName={eventName} isBet={isBet} value={20} />
                </div>

                <div className=" ">
                  <p className="  text-textWhiteColor text-end">
                    ${totalPrice}
                  </p>
                  <div className="flex gap-2 justify-end  text-gray-400 items-center ">
                    <p className="">${totalPrice}</p>
                    <SquareArrowOutUpRight size={12} />
                  </div>
                </div>
              </div>

              <div key={index} className="lg:hidden sm:flex flex-col w-full py-2 tems-center ">
                <div className="flex w-full gap-2 tems-center">
                  <img width={48} className="rounded-md" src={avatar} alt="avatar" />
                  <p className="text-base text-textWhiteColor cursor-pointer font-normal">
                    {eventName}
                  </p>
                </div>

                <div className="justify-between w-full pt-4 text-gray-600 flex items-center">
                  <div className="items-center">
                    <p className="text-base text-textWhiteColor ">Convert</p>
                    <div className="flex text-nowrap items-center gap-2">
                      {isBet ? (
                        <p className="bg-yesBg text-yesBtnText  text-center text-sm w-8 font-semibold rounded-md">Yes</p>
                      ) : (
                        <p className=" bg-noBg text-noBtnText text-center  text-sm w-8 font-semibold rounded-md">No</p>
                      )}
                      <p className="text-gray-400">{33} shares</p>
                    </div>
                  </div>

                  <div className=" ">
                    <p className="text-textWhiteColor text-end">
                      ${totalPrice}
                    </p>
                    <div className="flex gap-2 justify-end   text-gray-400 items-center ">
                      <p className="">in {totalPrice} minutes</p>
                      <SquareArrowOutUpRight size={12} />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </div>
    </div >
  );
};

export default ProfileAcitiveListItem;
