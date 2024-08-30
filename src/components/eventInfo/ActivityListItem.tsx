import React from "react";
import { useNavigate } from "react-router-dom";
import UserProperty from "../cards/UserProperty";
import { customers } from "../database";
import { Tooltip } from "@material-tailwind/react";
import { ActivityListItemProps } from "../../types/rank";
import Button from "../Button/Button";

const ActivityListItem: React.FC<ActivityListItemProps> = ({ text }) => {
    const [, setMenuNum] = React.useState < number | string > ('Amount');
    const navigate = useNavigate();
    return (
        <div className="mt-4 gap-4 px-3">
            <div className="flex mb-4 items-center justify-between">
                <p className="flex items-center text-2xl font-medium text-textWhiteColor">{text} Activity</p>
                {text ?
                    <Button onClick={() => { navigate('/activity') }} text="See all" className="rounded-md items-center px-2 py-1 border font-semibold text-textColor border-gray-500 hover:bg-cardHoverBg" />
                    :
                    <select className="bg-cardBg text-textWhiteColor  border border-gray-300  py-1  w-40 text-md rounded-md text-gray-800  px-2 font-semibold gap-1">
                        <option onClick={() => setMenuNum("Amount")}>Min Amount</option>
                        <option onClick={() => setMenuNum(10)}>$10</option>
                        <option onClick={() => setMenuNum(100)}>$100</option>
                        <option onClick={() => setMenuNum(1000)}>$1000</option>
                        <option onClick={() => setMenuNum(10000)}>$10,000</option>
                    </select>
                }
            </div>
            <div className="divide-y divide-gray-200">
                {customers.map(({ eventName, username, laterTime, avatar, toAvatar, position, address, volume, isBet, isSold, price, count }, index) => (
                    <div key={index} className="flex items-center justify-between py-3 last:pb-2" >
                        <div className="flex flex-col w-full justify-stretch gap-3">
                            <div className=" flex gap-2 ">
                                <img src={avatar} alt={eventName} className="w-12 h-12 rounded-md" />
                                <div className="w-full">
                                    <div className="flex justify-between ">
                                        <p className="text-textColor cursor-pointer " onClick={() => navigate('/event')}>
                                            {eventName}
                                        </p>
                                        <p className="text-textColor text-nowrap">
                                            {laterTime} ago
                                        </p>
                                    </div>
                                    <div className="md:hidden lg:flex hidden text-sm items-center  gap-1">
                                        <Tooltip
                                            className="bg-bgColor border text-black z-50 rounded-lg"
                                            content={<UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />}
                                        >
                                            <div className="flex items-center gap-2">
                                                <img width={22} className="rounded-full" src={toAvatar} alt="" />
                                                <p className="text-base font-semibold cursor-pointer text-textWhiteColor " onClick={() => navigate('/profile')}> {username}</p>
                                            </div>
                                        </Tooltip>

                                        <p className="text-base text-textWhiteColor">{isSold === true ? 'sold' : 'bought'}</p>

                                        <p className={`${isBet === true ? 'text-green-600 font-bold items-center' : 'text-orange-600 font-bold items-center'}`}>
                                            {isBet ? 'Yes' : 'No'}</p>
                                        <p className={`${isBet === true ? 'text-green-600 font-bold items-center' : 'text-orange-600 font-bold items-center'}`}>
                                            {count}</p>
                                        <p className="text-textWhiteColor text-base">at</p>
                                        <p className="text-textWhiteColor">{price}¢ (${(price / 110).toPrecision(5)})</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:hidden flex w-full text-sm  items-center text-wrap gap-1">
                                <Tooltip
                                    className="bg-bgColor border text-black z-50 rounded-lg"
                                    content={<UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />}
                                >
                                    <div className="flex items-center gap-2">
                                        <img width={22} className="rounded-full" src={toAvatar} alt="" />
                                        <p className="text-base font-semibold cursor-pointer  text-textWhiteColor" onClick={() => navigate('/profile')}> {username}</p>
                                    </div>
                                </Tooltip>

                                <p className="text-base text-textWhiteColor text-nowrap">{isSold === true ? 'sold' : 'bought'}</p>

                                <p className={`${isBet === true ? 'text-green-600 font-bold items-center' : 'text-orange-600 font-bold items-center'} `}>
                                    {isBet ? 'Yes' : 'No'}</p>
                                <p className={`${isBet === true ? 'text-green-600 font-bold items-center' : 'text-orange-600 font-bold items-center'} `}>
                                    {count}</p>
                                <p className="text-textWhiteColor text-base ">at</p>
                                <p className="text-textWhiteColor ">{price}¢ (${(price / 110).toPrecision(5)})</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div >
        </div >
    );
};

export default ActivityListItem;
