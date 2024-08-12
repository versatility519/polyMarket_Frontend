import React from 'react';
import { Tooltip } from '@material-tailwind/react'
import { ActivityListProps } from '../../types/rank';
const UserProperty: React.FC<ActivityListProps> = ({ avatar, username, address, position, volume }) => {
    return (
        <Tooltip className="bg-white  text-black" content={
            <div className="border-2">
                <div className="flex items-center  border-2 px-4 py-1 mb-3  rounded-md">
                    {/* <Avatar size="xs" alt="userAvatar" /> */}
                    <img className="w-8 rounded-full" src={avatar} alt="" />
                    <div className="flex flex-col ">
                        <p className="font-bold px-4">{username}</p>
                        <p className="font-bold px-4">{address}</p>

                    </div>
                </div>
                <div className="w-full flex gap-6 px-3 rounded-md">

                    <div className="flex flex-col ">
                        <p className="font-medium">${position}</p>
                        <p className="font-medium">Positions</p>
                    </div>
                    <div className="flex flex-col ">
                        <p className="font-medium">${volume}</p>
                        <p className="font-medium">Volume</p>
                    </div>
                </div>
            </div>
        }>
            {username}
        </Tooltip>
    )
}

export default UserProperty;