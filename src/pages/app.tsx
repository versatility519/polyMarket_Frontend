import React from "react";
import Button from "../components/Button/Button";
import { TrendingUp } from "lucide-react";

import TopEventCard from "../components/cards/TopEventCard";
import TopNavbar from "../components/layouts/TopNavbar";
import { content } from "../contents/landing";
import { Tooltip } from "@material-tailwind/react";
// import { event } from "../contents/event";
import UserProperty from "../components/cards/UserProperty";
import EventCard from "../components/event/EventCard";

import { dispatch, useSelector } from "../store";
import { getUsersData } from "../store/reducers/users";
import { getAllEvents } from "../store/reducers/events";
import { customers } from "../components/database";

import Footer from "../components/layouts/Footer";
import MobileFooter from "../components/layouts/MobileFooter";
import { useNavigate } from "react-router-dom";
import ActivityListItem from "../components/eventInfo/ActivityListItem";


const App = () => {

    const [selectedButton, setSelectedButton] = React.useState < string | null > ('top');
    const handleButtonClick = (value: string) => {
        setSelectedButton(value);
    };

    const eventData = useSelector((state) => state.events.events)

    const navigate = useNavigate();
    React.useEffect(() => {
        dispatch(getUsersData())
        dispatch(getAllEvents())
    }, [])
    return (
        <div className="h-screen overflow-hidden-scrollbar overflow-y-auto bg-bgColor">
            <TopNavbar />
            <div className="flex mt-36  justify-center ">
                <div className="flex lg:w-[90rem] w-full flex-col gap-4 ">
                    {/* <div className="lg:px-[12rem] px-2 justify-center overscroll-auto"> */}
                    <div className="w-full px-3  ">
                        <div style={{ scrollbarWidth: 'none' }} className="overflow-x-auto ">
                            <div className="flex space-x-4 justify-between">
                                <TopEventCard text="2024 Election Forecast" btn_text="View" onClick={() => { }} className="flex-none  bg-gradient-to-r from-blue-600 to-blue-200" img_url=" https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2Fopen-ai.png&w=256&q=75 " />
                                <TopEventCard text="U.S. Recession in 2024?" btn_text="Bet now" onClick={() => { }} className="flex-none  bg-gradient-to-r from-indigo-600 to-indigo-300" img_url=" https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2FDeposit.png&w=256&q=75 " />
                                <TopEventCard text="2024 Presidential Election" btn_text="Bet now" onClick={() => { }} className="flex-none  bg-gradient-to-r from-red-600 to-red-400" img_url=" https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2Fhurricanes.png&w=256&q=75 " />
                                <TopEventCard text="Trade Elections" btn_text="Sign Up" onClick={() => { }} className="flex-none  bg-gradient-to-r from-orange-500 to-orange-400" img_url="https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2Fhottest-record.png&w=256&q=75 " />
                            </div>
                        </div>
                    </div>
                    <div style={{ scrollbarWidth: 'none' }} className="flex overflow-x-scroll w-full gap-2 px-3  py-3">
                        <div className="">
                            <Button
                                text="Top"
                                value="top"
                                className={`${selectedButton === 'top' ? 'bg-btnColor  focus:text-white' : 'bg-selectBtnBg border-selectBtnBg'} border  text-textColor hover:border-btnHoverColor flex font-medium  px-3 py-1.5 text-nowrap  justify-center items-center text-center  gap-2 rounded-md border-selectBtnBg  `}
                                onClick={() => handleButtonClick('top')} icon={<TrendingUp className="" size={24} />}
                            />
                        </div>
                        {
                            content.filterBtns.all.map((item, index) =>
                                <div key={index} className="">
                                    <Button value={item.value} onClick={() => handleButtonClick(`${item.value}`)}
                                        text={item.text} className={`${selectedButton === `${item.value}` ? 'bg-btnColor focus:text-white' : 'bg-selectBtnBg border-selectBtnBg'} border  text-textColor hover:border-btnHoverColor font-medium px-2 py-1.5  text-nowrap  justify-center items-center text-center  rounded-md `} />
                                </div>
                            )
                        }
                    </div>

                    <div style={{ scrollbarWidth: "none" }} className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 px-3 gap-4 ">
                        {/* <div style={{ scrollbarWidth: "none" }} className="flex flex-wrap  gap-2 "> */}
                        {eventData
                            // .filter((key) => key.content.toLowerCase().includes(selectedButton.toLowerCase())) // Filter by selectedButton
                            .map((item, index) => (

                                <EventCard
                                    tid={item.id}
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    volume={item.volume}
                                    // active={item.active}
                                    // closed={item.closed}
                                    // new={item.new}
                                    // liquidity={0}
                                    // commentCount={0}
                                    // startDate={item.startDate}
                                    // endDate={item.endDate}
                                    market={item.market}
                                />
                            ))
                        }

                    </div>

                    <div className="flex my-6 justify-center">
                        <Button className="font-semibold rounded-md px-3 py-2 bg-btnColor text-white" text="View all" />
                    </div>

                    <div className=" lg:flex w-full gap-8  ">
                        <div className="w-full shadow-md">
                            <ActivityListItem text="Recent" />
                        </div>

                        <div className="w-full  shadow-md px-3">
                            <div className="flex items-center justify-between">
                                <p className="text-textColor flex items-center py-4 text-2xl font-medium">Top Volume This Week</p>
                                <Button onClick={() => { navigate('/leaderboard') }} text="See all" className="rounded-md items-center text-nowrap px-2 py-1 border font-semibold text-textColor border-gray-500  hover:bg-cardHoverBg" />
                            </div>
                            {customers.map(({ username, laterTime, avatar, position, address, volume }, index) => (
                                <div
                                    key={index}
                                    className="flex items-center py-2 gap-4 last:pb-1 cursor-pointer"
                                    onClick={() => navigate(`/profile?${index}`)}
                                >
                                    <div className="flex w-full items-center justify-between">
                                        <div className='flex w-full items-center gap-3'>
                                            <Tooltip
                                                className="bg-bgColor text-textColor z-50 rounded-lg"
                                                content={<UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />}
                                            >
                                                <div className="flex  gap-4">
                                                    <button className=" relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                                                        onClick={() => navigate(`/profile?${index}`)}
                                                    >
                                                        <img width={48} src={avatar} className="rounded-full" />
                                                        <span className="absolute items-center inset-0 object-right-top left-10">
                                                            <div className="inline-flex items-center w-4 justify-center border border-white rounded-full text-xs font-semibold leading-4 bg-black text-white">
                                                                1
                                                            </div>
                                                        </span>
                                                    </button>
                                                    {/* <img width={48} src={avatar} className="rounded-full" /> */}
                                                    <div className=" ">
                                                        <p className="text-textColor">{username}</p>
                                                        <p className="text-gray-500">${laterTime}</p>
                                                    </div>
                                                </div>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <MobileFooter />
            </div >
            <Footer />
        </div >
    )
}

export default App;