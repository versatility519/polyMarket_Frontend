import { useNavigate } from "react-router-dom";
import UserProperty from "../cards/UserProperty";
import { Tooltip } from "@material-tailwind/react";
import { customers } from "../database";
import React from "react";
interface HolderCard {
    first?: string,
    second?: string,
    icon?: React.ReactNode
}
const HolderCard: React.FC<HolderCard> = ({ first, second, icon }) => {
    const navigate = useNavigate();

    return (
        <div className="justify-between w-full rounded-lg border-gray-100 border shadow-md p-2 ">
            <div className=" flex justify-between items-center font-semibold">
                <h2 className="flex gap-2 text-2xl text-black font-semibold">{icon} {first || second}</h2>
            </div>
            <div className="gap-4 border-b-2 mt-4 border-gray-100">
                <div className="divide-y divide-gray-200">
                    {customers.map(({ username, laterTime, avatar, position, address, volume }, index) => (
                        <div
                            key={index}
                            className="flex  items-center py-2 gap-4 last:pb-1 cursor-pointer"
                            onClick={() => navigate(`/profile?${index}`)}
                        >
                            <div className="flex w-full items-center justify-between">
                                <div className='flex w-full items-center  gap-3'>
                                    <Tooltip
                                        className="bg-white border text-black z-50 rounded-lg"
                                        content={<UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />}
                                    >
                                        <img width={48} src={avatar} className="rounded-full" />
                                    </Tooltip>
                                    <div className="flex w-full justify-between gap-5">
                                        <Tooltip
                                            className="bg-white border text-black z-50 rounded-lg"
                                            content={<UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />}
                                        >
                                            <p className="">{username}</p>
                                        </Tooltip>
                                        <p className={` ${first ? 'text-green-600' : second ? 'text-red-600' : 'text-blue-gray-500'}`}>
                                            $ {laterTime}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default HolderCard;