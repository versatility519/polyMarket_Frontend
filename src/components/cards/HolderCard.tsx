import React from "react";
import { ActivityListItemProps } from "../../types/rank"; // Make sure this path is correct
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import UserProperty from "../cards/UserProperty";
// Sample customer data
import { customers } from "../database";

// Define the ActivityItem component
const HolderCard = ({ yesHolder, noHolder }) => {
    const [menuNum, setMenuNum] = React.useState < number | string > ('Amount');
    const navigate = useNavigate();
    return (
        <div className="flex-1 py-3 border rounded-lg shadow-md">
            <div className="flex px-5 justify-between items-center font-semibold">
                <h2 className="text-lg text-black font-semibold ">{yesHolder || noHolder}</h2>
                <p className="uppercase cursor-text text-sm text-gray-400">shares</p>
            </div>
            <Card className="md:px-2 sm:px-4 lg:px-6 flex gap-4 border-b-2 border-gray-100">
                <CardBody>
                    <div className="divide-y divide-gray-200">
                        {customers.map(({ eventName, username, laterTime, avatar, toAvatar, position, address, volume, isBet, isSold, count }, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-1 last:pb-2 cursor-pointer"
                            >
                                <Typography >
                                    <UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />
                                </Typography>

                                <Typography className={`text-right ${yesHolder ? 'text-green-600' : noHolder ? 'text-red-600' : 'text-blue-gray'}`} >
                                    {laterTime}
                                </Typography>

                            </div>
                        ))}
                    </div>
                </CardBody >
            </Card >
        </div>
    );
};

export default HolderCard;
