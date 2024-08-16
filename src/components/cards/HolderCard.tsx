import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import UserProperty from "../cards/UserProperty";
import { customers } from "../database";
import React from "react";
interface HolderCard {
    first?: string,
    second?: string,
    icon?: React.ReactNode
}
const HolderCard: React.FC<HolderCard> = ({first, second, icon}) => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 py-3 rounded-lg">
            <div className="w-full flex px-8 justify-between items-center font-semibold">
                <h2 className="flex gap-2 text-lg text-black font-semibold">{icon} {first || second}</h2>
                <p className="uppercase cursor-pointer text-sm text-gray-400">shares</p>
            </div>
            <Card className="w-full flex gap-4 border-b-2 border-gray-100">
                <CardBody>
                    <div className="divide-y divide-gray-200">
                        {customers.map(({ username, laterTime, avatar, position, address, volume }, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-2 last:pb-1 cursor-pointer"
                                onClick={() => navigate(`/customer/${index}`)}
                            >
                                <Typography>
                                    <UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />
                                </Typography>

                                <Typography className={`text-right ${first ? 'text-green-600' : second ? 'text-red-600' : 'text-blue-gray-500'}`}>
                                    {laterTime}
                                </Typography>

                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default HolderCard;