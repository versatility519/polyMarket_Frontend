import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { CirclePlus, Pencil, Trash2, Boxes, RotateCw } from 'lucide-react';
import TopNavbar from '../../components/TopNavbar';

const Admin = () => {
    const navigate = useNavigate();
    const [eventNum, setEventNum] = useState(5);

    const eventDelete = (id) => {
        console.log('======> eventDelete', id);
        alert(id);
    };

    const loadMore = () => {
        alert("I'm load More.");
    };

    return (
        <div>
            <TopNavbar />
            <hr />
            {/* <div className="flex justify-center">
                <div className="xl:w-[70vw] lg:w-full md:w-full sm:w-full w-full justify-between gap-8 flex border-2 border-blue-300">
                    <div className="flex w-full px-2 items-center border border-gray-700 rounded-lg">
                        <CirclePlus />
                        <input
                            type="text"
                            name="title"
                            placeholder="Search here ..."
                            className="w-full border-gray-500 px-4 py-1 rounded-md"
                        />
                    </div>
                    <Button
                        style={{ textTransform: 'none',color:'white' }}
                        className="flex p-1 bg-blue-700  gap-2 justify-center items-center text-nowrap hover:bg-blue-300 rounded-md"
                        onClick={() => navigate('/admin/addevent')}
                    >
                        <CirclePlus />
                        Add Event
                    </Button>
                </div>
            </div> */}
            <div className="flex justify-center">
                <div className="xl:w-[70vw] lg:w-full md:w-full sm:w-full w-full flex flex-col border-2 border-blue-300">
                    <div className='flex gap-8 px-3 py-2'>
                        <div className="flex w-full px-2 items-center border border-gray-700 rounded-lg">
                            <CirclePlus />
                            <input
                                type="text"
                                name="title"
                                placeholder="Search here ..."
                                className="w-full border-gray-500 px-4 py-1 rounded-md"
                            />
                        </div>
                        <Button
                            style={{ textTransform: 'none', color: 'white' }}
                            className="flex p-1 bg-blue-700  gap-2 justify-center items-center text-nowrap hover:bg-blue-300 rounded-md"
                            onClick={() => navigate('/admin/addevent')}
                        >
                            <CirclePlus />
                            Add Event
                        </Button>
                    </div>

                    <div className="flex justify-around items-center py-2 text-[22px] font-semibold">
                        <div className="w-[4vw]">Date</div>
                        <div className="w-[44vw]">Event Title</div>
                        <div className="w-[6vw]">Edit</div>
                    </div>
                    <hr />

                    {/* Event Show */}
                    <div className="flex justify-around items-center px-4 py-4 border-2 bg-gray-200 font-mono">
                        <div className="w-[4vw] border-dashed">4 2024</div>
                        <div className="w-[44vw]">
                            <div className="flex gap-4 items-center">
                                <Boxes />
                                Will Kamala announce VP pick on Monday?
                            </div>
                        </div>
                        <div className="flex w-[7vw] items-center gap-4">
                            <Button
                                style={{ textTransform: 'none' }}
                                className="flex hover:bg-indigo-600 cursor-pointer rounded-md"
                                onClick={() => { }}
                            >
                                <Pencil />
                            </Button>
                            <Button
                                style={{ textTransform: 'none' }}
                                className="flex hover:bg-lime-400 cursor-pointer rounded-md"
                                onClick={() => eventDelete(eventNum)}
                            >
                                <Trash2 />
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center pt-8">
                        <Button
                            style={{ textTransform: 'none' }}
                            className="flex px-2 py-2 bg-blue-700 text-white gap-2 justify-center cursor-pointer rounded-md items-center"
                            onClick={loadMore}
                            icon={<RotateCw />}
                        >
                            <RotateCw />
                            Load More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;