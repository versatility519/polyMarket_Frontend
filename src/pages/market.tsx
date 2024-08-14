import React from "react";
import Select from 'react-select'
import { Button } from "@material-tailwind/react";
import { ListFilter, Star, TrendingUp, List, Search, ChevronUp, ChevronDown } from "lucide-react";
// import Button from "../components/Button";
import TopEventCard from "../components/cards/TopEventCard";
import TopNavbar from "../components/TopNavbar";
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

    const [selectedButton, setSelectedButton] = React.useState < string | null > ('top');
    const handleButtonClick = (value: string) => {
        setSelectedButton(value);
    };
    // handle onChange event of the dropdown
    // const handleChange = () => {
    //     setSelectedOption(selectedOption);
    // }

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
                    onChange={(selectedOption) => setSelectedOption(selectedOption)} // Update state with selected option
                    components={{
                        DropdownIndicator: () => (
                            <div className="flex items-center">
                                {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                            </div>
                        ),
                    }}
                    getOptionLabel={(option) => (
                        <div className="flex sm:w-full font-semibold border-none gap-3 items-center">
                            {option.icon && <option.icon className="flex bg-gray-200 p-1 rounded-md" />} {/* Ensure icon exists */}
                            <span className="flex text-nowrap">{option.text}</span>
                        </div>
                    )}
                />
                {/* <b>Selected Option:</b> {selectedOption.text} */}
                
                <div className="lg:order-4 lg:flex sm:hidden hidden border rounded-md">
                    <Button value="gridView" className="flex text-gray-500   p-4 outline-none items-center justify-center cursor-pointer hover:bg-gray-300 focus:bg-gray-400" onClick={() => { setListView(false) }}><MarketsIcon /></Button>
                    <Button value="listView" className="flex text-gray-500   p-3 outline-none items-center justify-center cursor-pointer hover:bg-gray-300 focus:bg-gray-400" onClick={() => { setListView(false) }} ><List /></Button>
                </div>
                <div className="lg:order-5 sm:order-2 order-2 p-2 border-2 justify-center items-center gap-2 rounded-md flex cursor-pointer hover:bg-slate-100" onClick={() => { }}>
                    <Star onClick={() => { setListView(false) }} color="gray" size={28} />
                </div>
            </div>
            {/* Filters */}
            <div className="flex overflow-x-scroll scrollbar-hide gap-2 px-4 py-3">
                <Button style={{ fontFamily: "initial", fontSize: "14px", textTransform: "none", color: "black" }} value="top"

                    className={`${selectedButton === 'top' ? 'bg-blue-600  focus:text-white' : 'bg-gray-300'} flex text-md outline-none  items-center text-xl gap-2 p-1 rounded-md border-2 border-gray-200 after:bg-red-500 hover:border-blue-600 focus:bg-blue-700 focus:text-white focus:border-blue-700`}
                    onClick={() => handleButtonClick('top')}>
                    <TrendingUp />Top
                </Button>
                {
                    content.filterBtns.all.map((item, index) =>
                        <Button style={{ fontFamily: "initial", fontSize: "14px", textTransform: "none", }} key={index} value={item.value} onClick={() => handleButtonClick(`${item.value}`)}
                            className={`${selectedButton === `${item.value}` ? 'bg-blue-600  focus:text-white' : 'bg-gray-300 text-black'} outline-none flex items-center px-2 py-1 rounded-md  border-2 border-gray-300 hover:border-blue-600 text-nowrap `}>{item.text}</Button>)
                }
            </div>
            {selectedButton}
            {/* Events */}
            {
                listView === true
                    ? <div className="flex justify-center text-green-500">true</div>
                    : <div className="flex justify-center text-red-600">false</div>
            }
            <Footer />
        </div >
    )
}

export default Main;