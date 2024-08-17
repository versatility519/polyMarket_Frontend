import React from "react";

import { Button, Typography, Avatar } from "@material-tailwind/react";
import { TrendingUp } from "lucide-react";
// import Button from "../components/Button";

import TopEventCard from "../components/cards/TopEventCard";
import TopNavbar from "../components/TopNavbar";
import { content } from "../contents/landing";
import { event } from "../contents/event";
import UserProperty from "../components/cards/UserProperty";
import EventCard from "../components/event/EventCard";

import { getUsersData } from "../store/reducers/users";
import { dispatch } from "../store";
import { getAllEvents } from "../store/reducers/events";
import Footer from "../components/Footer";
import { customers } from "../components/database";
import MobileFooter from "../components/MobileFooter";
import { useNavigate } from "react-router-dom";
const App = () => {

    const [selectedButton, setSelectedButton] = React.useState < string | null > ('top');
    const handleButtonClick = (value: string) => {
        setSelectedButton(value);
    };
    // handle onChange event of the dropdown
    // const handleChange = () => {
    //     setSelectedOption(selectedOption);
    // }
    const navigate = useNavigate();
    React.useEffect(() => {
        dispatch(getUsersData())
        dispatch(getAllEvents())
    }, [])
    return (
        <div className=" ">
            <TopNavbar />
            <div className="xl:px-48 lg:w-full justify-center">
                <div style={{ scrollbarWidth: 'none' }} className="mt-4 md:flex-row flex flex-col sm:overflow-x-scroll overflow-x-scroll md:gap-5 justify-center px-6 ">
                    {/* <div className=" flex  overflow-x-scroll gap-3 px-4"> */}
                    <TopEventCard text="2024 Election Forecast" btn_text="View" onClick={() => { }} className="w-full px-2 flex bg-gradient-to-r from-blue-600 to-blue-200" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                    <TopEventCard text="2024 Presidential Election" btn_text="Bet now" onClick={() => { }} className="w-full flex px-2 bg-gradient-to-r from-red-600 to-red-400" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                    <TopEventCard text="U.S. Recession in 2024?" btn_text="Bet now" onClick={() => { }} className="w-full flex px-2 bg-gradient-to-r from-indigo-600 to-indigo-300" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                    <TopEventCard text="Trade Elections" btn_text="Sign Up" onClick={() => { }} className="w-full flex px-2 bg-gradient-to-r from-orange-500 to-orange-400" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                </div>

                <div style={{ scrollbarWidth: 'none' }} className="flex overflow-x-scroll w-full gap-2 px-4 py-3">
                    <div className=" ">
                        <Button style={{ fontSize: "14px", textTransform: "none", }} value="top"
                            className={`${selectedButton === 'top' ? 'bg-blue-600 text-white' : 'bg-gray-200 border-gray-200 text-black'} text-white flex font-medium px-1 py-2 outline-none text-nowrap  justify-center items-center text-center  gap-2 rounded-md border-2 border-gray-200 after:bg-red-500 hover:border-blue-600 focus:bg-blue-700 focus:text-white focus:border-blue-700`}
                            onClick={() => handleButtonClick('top')}>
                            <TrendingUp />Top
                        </Button>
                    </div>
                    {
                        content.filterBtns.all.map((item, index) =>
                            <div className="">
                                <Button style={{ fontSize: "14px", textTransform: "none", }} key={index} value={item.value} onClick={() => handleButtonClick(`${item.value}`)}
                                    className={`${selectedButton === `${item.value}` ? 'bg-blue-600  focus:text-white' : 'bg-gray-200 text-black'}   font-medium p-2 outline-none text-nowrap  justify-center items-center text-center  rounded-md border-2 border-gray-200 after:bg-red-500 hover:border-blue-600 focus:bg-blue-700 focus:text-white focus:border-blue-700`}>{item.text}</Button>
                            </div>
                        )
                    }
                </div>
                <div className="grid xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-1  px-4 gap-2 ">
                    {event.eventList
                        // .filter((key) => key.content.toLowerCase().includes(selectedButton.toLowerCase())) // Filter by selectedButton
                        .map((key, index) => (
                            <EventCard
                                key={index}
                                img={key.img}
                                text={key.content}
                                state={key.state}
                                percentage={key.percentage}
                                betAmount={key.betAmount}
                            />
                        ))
                    }
                </div>
                {/* Events */}
                {/* {event.science_card.filter((item) => item.content.toLowerCase().includes(search)).filter((item) => item.content.toLowerCase().includes(filter)).map((item, index) =>
                    <Card key={index} img={item.img} text={item.content} state={item.state}
                        percentage={item.percentage} Bet_amount={item.Bet_amount} />)
                } */}

                <div className="flex mt-3 justify-center">
                    <Button style={{ textTransform: "none" }} className="bg-blue-500 text-white">View all</Button>
                </div>

                <div className=" lg:px-6 lg:flex sm:px-6 gap-8">
                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <Typography className="text-black font-medium">
                                <p className="flex items-center py-4 text-2xl font-medium text-gray-600">Recent Activity</p>
                            </Typography>
                            <Typography>
                                <Button style={{ textTransform: "none" }} onClick={() => { navigate('/activity') }} className="items-center  px-3 py-1 border border-gray-700 text-gray-600">See all</Button>
                            </Typography>
                        </div>
                        {customers.map(({ eventName, username, laterTime, avatar, position, address, volume, isBet, isSold, price, count }, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-3 last:pb-2"
                            >
                                <div className="flex items-center gap-x-3">
                                    <Avatar size="md" src={avatar} alt={eventName} variant="rounded" />
                                    <div>
                                        {eventName &&
                                            <Typography className="font-semibold cursor-pointer" onClick={() => navigate('/event')}>
                                                {eventName}
                                            </Typography>
                                        }
                                        <Typography className="text-sm items-center flex gap-1">
                                            <div className="flex items-center text-base cursor-pointer gap-2" onClick={() => navigate('/profile')}>
                                                <p className=" font-semibold hover:underline underline-offset-4">
                                                    <UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />
                                                </p>
                                            </div>
                                            <p className="text-base">{isSold === true ? 'sold' : 'bought'}</p>

                                            <p className={`${isBet === true ? 'text-green-600 font-bold items-center' : 'text-orange-600 font-bold items-center'}`}>
                                                {isBet ? 'Yes' : 'No'}</p>
                                            <p className={`${isBet === true ? 'text-green-600 font-bold items-center' : 'text-orange-600 font-bold items-center'}`}>
                                                {count}</p>
                                            <p className=" text-base">at</p>
                                            <p className="font-">{price}¢ (${(price / 110).toPrecision(5)})</p>
                                        </Typography>
                                    </div>
                                </div>
                                <Typography>
                                    {laterTime} ago
                                </Typography>
                            </div>
                        ))}
                    </div>

                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <Typography className="text-black font-medium">
                                <p className="flex items-center py-4 text-2xl font-medium text-gray-600">Top Volume This Week</p>
                            </Typography>
                            <Typography>
                                <Button style={{ textTransform: "none" }} onClick={() => { navigate('/activity') }} className="items-center  px-3 py-1 border border-gray-700 text-gray-600">See all</Button>
                            </Typography>
                        </div>
                        {customers.map(({ username, avatar, position, address, volume }, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-2 last:pb-1 cursor-pointer"
                                onClick={() => navigate(`/profile?${index}`)}
                            >
                                <Typography>
                                    <UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />
                                </Typography>

                            </div>
                        ))}
                    </div>
                </div>
                <MobileFooter />
            </div >
            <Footer />
        </div >
    )
}

export default App;