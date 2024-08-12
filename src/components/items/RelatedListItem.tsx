import React from "react";
import { ActivityListItemProps } from "../../types/rank"; // Make sure this path is correct
import { Card, Button, CardBody, Typography, Avatar, Menu, MenuHandler, MenuItem, MenuList, Tooltip } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
// Define the ActivityList component
import { customers } from "../database";

const RelatedListItem: React.FC<ActivityListItemProps> = ({ avatar, toAvatar, isBet, isSold, eventName, address, onClick, count, price, time, username }) => {
    const navigate = useNavigate();
    return (
        <Card className="md:px-2 sm:px-4 lg:px-6 flex gap-4 border-b-2 border-gray-100">
            <CardBody>
                <div className="divide-y divide-gray-200">
                    {customers.map(({ eventName, avatar, yes, no }, index) => (
                        <div
                            key={index}
                            className="flex hover:bg-gray-200 hover:rounded-md items-center justify-between pb-3 pt-3 last:pb-0"
                        >
                            <div className="flex items-center gap-x-3">
                                <Avatar size="md" src={avatar} alt={eventName} variant="rounded" />
                                <div>
                                    {eventName &&
                                        <Typography className="cursor-pointer" onClick={() => navigate('/event')} color="blue-gray" variant="h6">
                                            {eventName}
                                        </Typography>
                                    }
                                    <Typography className="text-sm items-center flex gap-1" variant="small" color="gray">
                                        <p className="font-semibold">$124,937 Bet</p>
                                    </Typography>
                                </div>
                            </div>
                            <Typography className="flex gap-4 text-md font-semibold" color="blue-gray" variant="h6">
                                <Button style={{ textTransform: "none" }} onClick={() => { convertColor(); }} className=" rounded-full bg-green-50 text-green-800 px-3" price={20} >{yes} ¢</Button>
                                <Button style={{ textTransform: "none" }} onClick={() => { convertColor(); }} className=" rounded-full bg-orange-100 text-orange-500 px-3" price={20} >{no}¢</Button>

                            </Typography>
                        </div>
                    ))}
                </div>
            </CardBody >
        </Card >
    );
};

export default RelatedListItem;
