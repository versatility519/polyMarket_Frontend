// ActivityListItem.tsx
import React from 'react';
import Select from "react-select";
import { useNavigate } from 'react-router-dom';

import { Input, Card, CardBody, Avatar, Typography, Button, Option } from '@material-tailwind/react';
import { ChevronUp, ChevronDown, Shield } from 'lucide-react';
import { sortItem } from "../../contents/selectItem";
import { customStyles } from "../../contents/selectStyle";

import { customers } from "../database";
import UserProperty from '../cards/UserProperty';

const CommentListItem = () => {
    const [selectValue, setSelectValue] = React.useState < string > ('');
    const [selectedOption, setSelectedOption] = React.useState < Option | null > (sortItem[0]);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState < boolean > (false);

    const navigate = useNavigate();
    return (

        <div className="flex flex-col px-2 gap-3">
            <div className="flex w-full py-1 border border-gray-500 focus-within:border-black rounded-full">
                <Input
                    type="text"
                    value={selectValue}
                    onChange={e => setSelectValue(e.target.value.trim())} // Trim whitespace
                    className="outline-none border-none px-4 py-3"
                    placeholder='Add a Comment'
                    containerProps={{
                        className: "min-w-0",
                    }}
                    aria-label="Comment input" // Accessibility
                />
                <Button
                    size="sm"
                    disabled={!selectValue}
                    className={`${selectValue ? "text-blue-700" : "text-blue-200"} px-8 outline-none border-none cursor-pointer`} // Add cursor style
                    aria-label="Post comment" // Accessibility
                >
                    Post
                </Button>
            </div>

            <div className="flex bg-gray-200 border-2 items-center text-lg font-medium gap-2 rounded-full py-3 justify-center">
                <Shield />
                <p className="text-lg">Beware of external links, they may be phishing attacks.</p>
            </div>

            <div className="flex items-center gap-2 ">
                <p className="text-gray-400 text-lg font-medium">Sort by</p>
                <Select
                    className="flex w-36 border px-1 bg-gray-300 border-gray-400 focus-within:border-gray-600 rounded-full "
                    value={selectedOption}
                    styles={customStyles}
                    options={sortItem}
                    onMenuOpen={() => setIsDropdownOpen(true)}
                    onMenuClose={() => setIsDropdownOpen(false)}
                    onChange={(option) => setSelectedOption(option)}
                    components={{
                        DropdownIndicator: () => (
                            <div className="  ">
                                {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                            </div>
                        ),
                    }}
                    getOptionLabel={(option) => (
                        <div className="flex font-semibold border-none gap-2 ">
                            <option.icon cx />
                            <span className="text-md text-nowrap">{option.text}</span>
                        </div>
                    )}
                />
            </div>

            <Card className="md:px-2 sm:px-4 lg:px-6 flex gap-4 border-b-2 border-gray-100">
                <CardBody>
                    <div className="divide-y divide-gray-200">
                        {customers.map(({ eventName, username, address, avatar, position, volume, yes, no }, index) => (
                            <div
                                key={index}
                                className="flex hover:bg-gray-200 hover:rounded-md items-center justify-between pb-3 pt-3 last:pb-0"
                            >
                                <div className="flex items-center gap-3">
                                    <Avatar size="md" src={avatar} alt={eventName} variant="rounded" />
                                    <div className=''>
                                        <Typography className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/profile')} color="blue-gray" variant="h6">

                                            <UserProperty username={username} address={address} position={position} volume={volume} />
                                            <p className="text-gray-600 text-sm">2mo ago</p>
                                        </Typography>

                                        <Typography className="text-sm items-center flex gap-1" variant="small" color="gray">
                                            <p className="font-semibold">$124,937 Bet</p>
                                        </Typography>
                                    </div>
                                </div>
                                <Typography className="flex gap-4 text-md font-semibold" color="blue-gray" variant="h6">
                                    <Button style={{ textTransform: "none" }} onClick={() => { convertColor(); }} className=" rounded-lg bg-green-100 text-green-800 px-2" price={20} >{yes} ¢</Button>
                                    <Button style={{ textTransform: "none" }} onClick={() => { convertColor(); }} className=" rounded-lg bg-orange-200 text-orange-600 px-2 " price={20} >{no}¢</Button>
                                </Typography>
                            </div>
                        ))}
                    </div>
                </CardBody >
            </Card >
        </div >
    );
};

export default CommentListItem;
