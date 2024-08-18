import React, { ChangeEvent } from "react";
import { event } from "../../contents/event";
import EventNestedList from "./EventNestedList";
import { Button, Tooltip, } from "@material-tailwind/react";

import { ChevronsUp, ChevronsDown, Gift, MessageCircle, Star, CircleX } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface EventCardProps {
    state: string,
    img: string,
    text: string,
    percentage: string,
    betAmount: string,
}

const EventCard: React.FC<EventCardProps> = ({ img, text, betAmount, state }) => {
    const [modalopen, setModalOpen] = React.useState < boolean > (false)
    const navigate = useNavigate()
    const [betPrice, setBetPrice] = React.useState < number > (0);
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue === '' || /^[0-9]*$/.test(inputValue)) {
            setBetPrice(inputValue === '' ? 0 : parseInt(inputValue, 10));
        }
    };

    return (
        <>
            <div className="h-[180px] overflow-hidden rounded-md p-2 hover:shadow-md ">
                {modalopen === false ?
                    <div>
                        <div className="flex px-2">
                            <img className="w-[50px] h-[50px]" src={img} alt="evetnImage" />
                            <p className="line-clamp-2 cursor-pointer text-gray-700 text-base font-bold " onClick={() => { navigate('/event') }}>
                                {text}
                            </p>
                        </div>

                        {state === "1"
                            ?
                            <div className="flex justify-between h-[92px] items-end gap-2">
                                <div className="flex w-full gap-2 px-1 text-xs">
                                    <Button onClick={() => setModalOpen(true)} style={{ textTransform: 'none' }} className="w-full text-md  px-2 justify-center flex items-center bg-green-100 hover:bg-green-600 hover:text-white py-2 text-green-600">
                                        Bet Yes
                                        <ChevronsUp />
                                    </Button>
                                    <Button onClick={() => setModalOpen(true)} style={{ textTransform: 'none' }} className="w-full text-md px-2 justify-center flex items-center bg-red-100 hover:bg-red-600 hover:text-white py-2 text-red-600">
                                        Bet No<ChevronsDown />
                                    </Button>
                                </div>
                            </div>
                            :
                            <div className="flex flex-col px-2 py-2 justify-between h-[92px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}                        >
                                {event.nested1.map((item, index) =>
                                    <EventNestedList key={index} range={item.range} percentage={item.percent} />)
                                }
                            </div>
                        }

                        <div className="flex px-4 h-[30px] justify-between  text-gray-400 items-center">

                            <h4>${betAmount}k Bet</h4>

                            <div className="flex gap-2 items-center ">
                                <Tooltip content="Rewards">
                                    <Gift size={18} className="cursor-pointer" />
                                </Tooltip>

                                <MessageCircle size={18} className="cursor-pointer" />

                                <Tooltip content="Add to watchlist">
                                    <Star size={18} className="cursor-pointer" />
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="">
                        <div className="h-[30px] items-center flex py-4 gap-8">
                            <img className="w-[20px] h-[20px]" src={img} alt="" />
                            <p className="line-clamp-1 cursor-pointer text-gray-700 text-base font-bold " onClick={() => { navigate('/event') }}>
                                {text}
                            </p>
                            <div className="items-center">
                                <CircleX className="cursor-pointer" size={18} onClick={() => setModalOpen(false)} />
                            </div>
                        </div>

                        <div className="flex h-[100px] items-center py-4 gap-2">
                            <div className="flex w-full border rounded-md items-center py-2 px-1 justify-between gap-2  ">
                                <input
                                    className="w-12 items-center text-center"
                                    type="text"
                                    value={`$${betPrice}`}
                                    onChange={handleInputChange}
                                />
                                <div className="gap-1 items-center flex">
                                    <Button style={{ fontSize: '16px' }}
                                        className="text-lg font-medium text-gray-400 px-2 py-0 bg-gray-200 rounded-md cursor-pointer"
                                        onClick={() => setBetPrice(prevNumber => Math.max(prevNumber + 1, 0))}
                                    >+1
                                    </Button>

                                    <Button style={{ fontSize: '16px' }}
                                        className="text-lg font-medium text-gray-400 px-1 py-0 bg-gray-200 rounded-md cursor-pointer"
                                        onClick={() => setBetPrice(prevNumber => Math.max(prevNumber + 10, 0))} // Assuming max is 100
                                    >+10
                                    </Button>
                                </div>
                            </div>
                            <div className="w-full">
                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value={betPrice}
                                    className="slider rounded-3 border border-dark w-full"
                                    id="myRange"
                                    onChange={(e) => setBetPrice(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className="flex px-4 h-[12px] justify-between  text-gray-400 items-center">
                            <Button style={{ fontSize: '16px', textTransform: 'none' }}
                                className="text-lg w-full font-medium px-1 py-0.5 rounded-md cursor-pointer  bg-green-600 hover:bg-green-600 text-white "
                                onClick={() => setBetPrice(prevNumber => Math.max(prevNumber + 10, 0))} // Assuming max is 100
                            >
                                <p className="">Bet Yes</p>
                                <p className="text-sm">To win ${betPrice}</p>
                            </Button>

                            {/* <Button onClick={() => setModalOpen(true)} style={{ textTransform: 'none' }} className="w-full text-md justify-center items-center bg-green-100 hover:bg-green-600 hover:text-white  text-green-600">
                                <p className="">Bet Yes</p>
                                <p className="text-sm">To win ${betPrice}</p>
                            </Button> */}


                        </div>
                    </div>
                }
            </div>
        </>
    )
}


export default EventCard;