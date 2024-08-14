import React from "react";
import Select from 'react-select'
import Button from "../components/Button";
import TopEventCard from "../components/cards/TopEventCard";
import TopNavbar from "../components/TopNavbar";
import { ListFilter, Star, TrendingUp, List, Search, ChevronUp, ChevronDown } from "lucide-react";
import { MarketsIcon } from "../components/icons";
import { content } from "../contents/landing";
import { customStyles } from "../contents/selectStyle";
import { categoryItem } from "../contents/selectItem";
import { getUsersData } from "../store/reducers/users";
import { dispatch } from "../store";
import { getAllEvents } from "../store/reducers/events";
import Footer from "../components/Footer";

const Main = () => {
    const [listView, setListView] = React.useState < boolean > (false);

    const [isDropdownOpen, setIsDropdownOpen] = React.useState < boolean > (false);
    const [selectedOption, setSelectedOption] = React.useState < Option | null > (categoryItem[0]);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }

    React.useEffect(() => {
        dispatch(getUsersData())
        dispatch(getAllEvents())
    }, [])
    return (
        <div className=" ">
            <TopNavbar />
            <div className="lg:flex flex-row overflow-x-scroll scrollbar-hide gap-5 justify-center px-6 my-10">
                <TopEventCard text="Science Beta" btn_text="Bet now" onClick={() => { }} className="bg-gradient-to-r from-blue-600 to-blue-200" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                <TopEventCard text="Science Beta" btn_text="Bet now" onClick={() => { }} className="bg-gradient-to-r from-red-600 to-red-400" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                <TopEventCard text="Science Beta" btn_text="Bet now" onClick={() => { }} className="bg-gradient-to-r from-indigo-600 to-indigo-300" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                <TopEventCard text="Science Beta" btn_text="Bet now" onClick={() => { }} className="bg-gradient-to-r from-orange-500 to-orange-400" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
            </div>
            {/* SubBar */}
            <div className="lg:flex sm:grid-cols-2 grid-cols-2 grid lg:items-center px-4 gap-2">
                <div className="lg:order-1 sm:order-3 order-3 p-2 border-2 justify-center items-center gap-2 rounded-md flex cursor-pointer hover:bg-slate-100" onClick={() => { }}>
                    <ListFilter size={24} />
                    <p className="sm:visible lg:hidden">Filters</p>
                </div>

                <div className="lg:order-2 sm:order-1 order-1 flex lg:w-full gap-5 px-4 py-1 items-center border-2 border-gray-400 focus-within:border-black rounded-lg">
                    <Search color="black" />
                    <input type="text" className="w-full py-1 outline-none" placeholder="Search by markets" />
                </div>

                <Select
                    className="border-2 lg:order-3 lg:w-[16vw] sm:w-full sm:order-4 order-4 justify-between flex items-center rounded-lg"
                    value={selectedOption}
                    styles={customStyles}
                    options={categoryItem}
                    onMenuOpen={() => setIsDropdownOpen(true)}
                    onMenuClose={() => setIsDropdownOpen(false)}
                    onChange={handleChange}
                    components={{
                        DropdownIndicator: () => (
                            <div className="flex items-center">
                                {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                            </div>
                        ),
                    }}
                    getOptionLabel={(option) => (
                        <div className="flex font-semibold  border-none gap-3 items-center">
                            <option.icon className="flex bg-gray-200 p-1 rounded-md" />
                            <span className="flex text-nowrap">{option.text}</span>
                        </div>
                    )}
                />
                {/* 
                    {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                        <b>Selected Option:</b> {selectedOption.text}
                    </div>} */}

                <div className="lg:order-4 lg:flex sm:hidden hidden">
                    <Button value="gridView" className="flex rounded-l-lg border p-3 items-center justify-center ml-3 cursor-pointer hover:bg-gray-300 focus:bg-gray-400" onClick={() => { setListView(false) }} icon={<MarketsIcon color="gray" size={24} />} />
                    <Button value="listView" className="flex rounded-r-lg border p-2 items-center justify-center cursor-pointer hover:bg-gray-300 focus:bg-gray-400" onClick={() => { setListView(false) }} icon={<List color="gray" size={30} />} />
                </div>
                <div className="lg:order-5 sm:order-2 order-2 p-2 border-2 justify-center items-center gap-2 rounded-md flex cursor-pointer hover:bg-slate-100" onClick={() => { }}>
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
            <Footer />
        </div>
    )
}

export default Main;