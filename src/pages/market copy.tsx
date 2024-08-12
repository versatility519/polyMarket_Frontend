import React from "react";
import Button from "../components/Button";
import TopEventCard from "../components/cards/TopEventCard";
import Navbar from "../components/Navbar";
import { ListFilter, Star, TrendingUp, List, Search } from "lucide-react";
import { MarketsIcon } from "../components/icons";
import { content } from "../contents/landing";
import { selectItem } from "../contents/selectItem";
import { getUsersData } from "../store/reducers/users";
import { dispatch } from "../store";
import { getAllEvents } from "../store/reducers/events";

const Main = () => {
    const [listView, setListView] = React.useState < boolean > (false)
    const [selectedOption, setSelectedOption] = React.useState < string > ('');

    React.useEffect(() => {
        dispatch(getUsersData())
        dispatch(getAllEvents())
    }, [])
    return (
        <div className=" ">
            <Navbar />
            <div className="lg:flex flex-row overflow-x-scroll scrollbar-hide gap-5 justify-center px-6 my-10">
                <TopEventCard text="Science Beta" btn_text="Bet now" onClick={() => { }} className="bg-gradient-to-r from-blue-600 to-blue-200" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                <TopEventCard text="Science Beta" btn_text="Bet now" onClick={() => { }} className="bg-gradient-to-r from-red-600 to-red-400" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                <TopEventCard text="Science Beta" btn_text="Bet now" onClick={() => { }} className="bg-gradient-to-r from-indigo-600 to-indigo-300" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                <TopEventCard text="Science Beta" btn_text="Bet now" onClick={() => { }} className="bg-gradient-to-r from-orange-500 to-orange-400" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
            </div>
            {/* SubBar */}
            <div className="lg:flex sm:grid-cols-2 grid-cols-2 grid px-4 gap-2">
                {/* <div className="flex lg:w-[70vw] sm:flex"> */}
                <div className="lg:order-1 sm:order-3 order-3 px-3 border-2 justify-center items-center gap-2 rounded-md flex">
                    <ListFilter size={24} />
                    <p className="sm:visible lg:hidden">Filters</p>
                </div>
                {/* <Button textHidden={true} value="listfilter" text="Filters" className="flex gap-4 border p-2 items-center justify-center rounded-md cursor-pointer" onClick={() => { }} icon={<ListFilter size={24} />} />            */}

                <div className="lg:order-2 sm:order-1 order-1 flex lg:w-full gap-5 px-4 py-1 items-center border-2 border-gray-400 focus:border-red-300 rounded-lg">
                    <Search color="black" />
                    <input type="text" className="w-full py-1 outline-none" placeholder="Search by markets" />
                </div>
                {/* </div> */}
                {/* <div className="flex lg:w-[70vw] sm:flex"> */}
                <div className="lg:order-3 lg:w-[20vw] sm:order-4 order-4 flex sm:w-full gap-5 px-3 py-1 items-center border-2 border-gray-400 rounded-lg">
                    <div className="flex items-center bg-gray-400 focus:border-red-300 rounded-lg">
                        <Star />
                    </div>
                    <select
                        className="w-full outline-none gap-8"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        {selectItem.map((key) => (
                            <option key={key.value} value={key.value}>
                                <key.icon />
                                {key.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="lg:order-4 lg:flex sm:hidden hidden">
                    <Button value="gridView" className="flex rounded-l-lg border p-3 items-center justify-center ml-3 cursor-pointer hover:bg-gray-300 focus:bg-gray-400" onClick={() => { setListView(false) }} icon={<MarketsIcon color="gray" size={24} />} />
                    <Button value="listView" className="flex rounded-r-lg border p-2 items-center justify-center cursor-pointer hover:bg-gray-300 focus:bg-gray-400" onClick={() => { setListView(false) }} icon={<List color="gray" size={30} />} />
                </div>
                <div className="lg:order-5 sm:order-2 order-2 px-3 border-2 justify-center items-center gap-2 rounded-md flex ">
                    <Star onClick={() => { setListView(false) }} color="gray" size={28} />
                </div>
            </div>
            {/* Filters */}
            <div className="flex overflow-x-scroll scrollbar-hide gap-2 px-4 py-3">
                <Button text="Top" value="top" className="flex text-md items-center text-xl gap-4 px-2 py-1 rounded-md bg-gray-200 border-2 border-gray-200 after:bg-red-500 hover:border-blue-600 focus:bg-blue-700 focus:text-white focus:border-blue-700" icon={<TrendingUp />} onClick={() => { }} />
                {
                    content.filterBtns.all.map((item, index) => <Button key={index} text={item.text} value={item.value} onClick={() => { }} className="flex px-2 py-1 rounded-md bg-gray-300 border-2 border-gray-300 hover:border-blue-600 focus:bg-blue-700 focus:text-white focus:border-blue-700" icon />)
                }
            </div>
            {/* Events */}
            {
                listView === true
                    ? <div className="flex justify-center text-green-500">true</div>
                    : <div className="flex justify-center text-red-600">false</div>
            }
        </div>
    )
}

export default Main;