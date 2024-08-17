import { event } from "../../contents/event";
import EventNestedList from "./EventNestedList";
import { Button, Tooltip } from "@material-tailwind/react";
import { ChevronsUp, ChevronsDown, Gift, MessageCircle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface EventCardProps {
    state: string,
    img: string,
    text: string,
    percentage: string,
    betAmount: string,
}

const EventCard: React.FC<EventCardProps> = ({ img, text, betAmount, state }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className=" h-[220px] overflow-hidden rounded-md  p-2 hover:shadow-md ">
                <div className="h-[80px]  flex px-2 py-4">
                    <img className="w-[50px] h-[50px]" src={img} alt="" />
                    <p className=" cursor-pointer text-gray-700 text-base font-bold " onClick={() => { navigate('/event') }}>
                        {text}
                    </p>
                </div>

                {state === "1"
                    ?
                    <div className="flex justify-between h-[100px] items-center gap-2">
                        <div className="flex w-full gap-2 text-xs">
                            <Button style={{ textTransform: 'none' }} className="w-full text-md  px-2 justify-center flex items-center bg-green-100 hover:bg-green-600 hover:text-white py-2 text-green-600">
                                Bet Yes
                                <ChevronsUp />
                            </Button>
                            <Button style={{ textTransform: 'none' }} className="w-full text-md px-2 justify-center flex items-center bg-red-100 hover:bg-red-600 hover:text-white py-2 text-red-600">
                                Bet No<ChevronsDown />
                            </Button>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col px-4 justify-between h-[100px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}                        >
                        {event.nested1.map((item, index) =>
                            <EventNestedList key={index} range={item.range} percentage={item.percent} />)
                        }
                    </div>
                }

                <div className="flex px-4 h-[30px] justify-between  text-gray-400 items-center">

                    <h4>${betAmount}k Bet</h4>

                    <div className="flex gap-2  items-center ">
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
        </>
    )
}

export default EventCard;