import React from 'react'
import { useNavigate } from "react-router-dom";
import { CirclePlus, Pencil, Trash2, Boxes, RotateCw } from 'lucide-react'
import TopNavbar from "../../components/TopNavbar";
import Button from "../../components/Button";

const Admin = () => {
    const navigate = useNavigate();
    const [eventNum, SetEventNum] = React.useState(5);
    const eventDelete = (id: number) => {
        console.log("======> eventDelete", id)
        alert(id)
    }
    const loadMore = () => {
        alert("I`m load More.")
    }
    return (
        <div className=' '>
            <TopNavbar />
            <hr />
            <div className="flex justify-between px-4 py-3">
                <div className="flex w-[50vw] px-2 items-center border border-gray-700 rounded-lg">
                    <CirclePlus />
                    <input type="text" name="title" placeholder="Search here ..." className="w-full border-gray-500 px-4 py-1 rounded-md" />
                </div>
                <div className='flex justify-center'>
                    <Button text="ADD Event" value="addEvent" className="flex px-3 bg-blue-700 text-white gap-2 justify-center items-center hover:bg-blue-300 rounded-md" onClick={() => navigate("/admin/addevent")} icon={<CirclePlus />} />
                </div>
            </div>
            <div className="flex justify-center">
                <div className='xl:w-[70vw] lg:w-full md:w-full sm:w-full w-full flex flex-col border-2 border-blue-300 '>
                    <div className='flex justify-around items-center py-2 text-[22px] font-semibold'>
                        <div className="w-[4vw]">Date</div>
                        <div className="w-[44vw]">Event Title</div>
                        <div className="w-[6vw] ">Edit</div>
                    </div> <hr />

                    {/* Event Show */}
                    <div className='flex justify-around items-center px-4 py-4 border-2 bg-gray-200 font-mono'>
                        <div className="w-[4vw] border-dashed">4   2024</div>
                        <div className="w-[44vw]">
                            <div className='flex gap-4 items-center'>
                                <Boxes /> Will Kamala announce VP pick on Monday?</div>
                        </div>

                        <div className="flex w-[7vw] items-center gap-4">
                            <Button value="del" className="flex hover:bg-indigo-600 cursor-pointer rounded-md" onClick={() => { }} icon={<Pencil />} />
                            <Button value="del" className="flex hover:bg-lime-400 cursor-pointer rounded-md" onClick={() => eventDelete(eventNum)} icon={<Trash2 />} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-8'>
                <Button text='Load More' value="loadMore" className="flex px-2 py-2 bg-blue-700 text-white gap-2 justify-center cursor-pointer rounded-md" onClick={() => loadMore()} icon={<RotateCw />} />
            </div>
        </div>
    )
}

export default Admin;