import React from "react";
import {
  Tooltip, Typography, Button, Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel, Card, Avatar, StarIcon
} from "@material-tailwind/react";
import Select from "react-select";
import EventInfoList from "../components/event/EventInfoList";
import EventInfoCard from "../components/event/EventInfoCard";
// import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { customStyles } from "../contents/selectStyle";
import { sortItem } from "../contents/selectItem";

import PositionListItem from "../components/items/PositionListItem";
// import { Tabs, TabContent } from "../components/TabsComponet";
import { useNavigate } from "react-router-dom";
import {
  Landmark,
  Trophy,
  Clock4,
  Star,
  Link, ChevronUp, ChevronDown,
  ChevronsLeftRight,
  Goal,
} from "lucide-react";
import { getUsersData } from "../store/reducers/users";
import { dispatch, useSelector } from "../store";
import ActivityListItem from "../components/items/ActivityListItem";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState("html");

  // Getting Data
  const [isVisible, setIsVisible] = React.useState < boolean > (false);
  const [convertBgColor, setConvertBgColor] = React.useState < boolean > (false);

  const [isDropdownOpen, setIsDropdownOpen] = React.useState < boolean > (false);
  const [selectedOption, setSelectedOption] = React.useState < Option | null > (sortItem[0]);

  const [number, setNumber] = React.useState(0); // Initialize the number state
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === '' || /^[0-9]*$/.test(inputValue)) {
      // setNumber(inputValue ); // Update state
      setNumber(inputValue === '' ? 0 : parseInt(inputValue, 10)); // Update state
    }
  }
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const convertColor = () => {
    setConvertBgColor(!convertBgColor);
  };
  React.useEffect(() => {
    dispatch(getUsersData());
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="flex mt-8 px-2  justify-center   gap-4">
        <div>
          <div className="lg:px-18 md:px-1 sm:px-8 w-full border-2 py-4">
            <div className="flex items-center gap-8 px-8 text-black-700">
              <img className="w-24 rounded-full" src="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" alt="" />

              <div className=" ">
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <Trophy size={20} /> <p>$4000 Bet</p>
                    <Clock4 /><p>Nov 5, 2024</p>
                  </div>
                  <div className="flex scale-75   gap-2 cursor-pointer">
                    <Tooltip className="bg-gray-700 text-white px-2 py-1 rounded shadow" content="Add to watchlist">
                      <Star />
                    </Tooltip>
                    <Tooltip className="bg-gray-700 text-white px-2 py-1 rounded shadow" content="Embed" >
                      <ChevronsLeftRight className="lg:flex sm:hidden" />
                    </Tooltip>
                    <Tooltip placement="bottom" className="bg-white gap-1 text-gray-800   py-1 rounded shadow" content={
                      <div className="w-[8vw]">
                        <Typography className="gap-2 font-medium">
                          Copy Link<hr />
                          <div>&gt 16</div>
                          <div>16-20</div>
                          <div>21-25</div>
                          <div>&gt 25</div>
                        </Typography>

                      </div>} >
                      <Link onClick={() => { alert("where to go") }} />
                    </Tooltip>

                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="sm:w-full flex text-2xl font-bold">How many named storms during Atlantic Hurricane Season?</div>
                  <Button style={{textTransform:"none"}} value="editProfile"
                    className="lg:flex sm:hidden text-black items-center font-semibold rounded-lg gap-2 px-4 py-1"
                  ><Landmark />PloyMarket</Button>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-xl border-b-2 font-bold">Rules</h2>
              <div className="p-4">
                <div className={`${isVisible ? 'max-w-2xl' : 'line-clamp-1  max-w-2xl'}`}>This is the initial content that is always visible.This is the initial content that is always visiblehis is the initial content that is always visible.This is the initial content that is always visibl. ehis is the initial content that is always visible.This is the initial content that is always visiblehis is the initial content that is always visible.This is the initial content that is always visiblehis is the initial content that is always visible.This is the initial content that is always visible
                </div>
                {isVisible &&
                  <div className=" ">
                    <div className="flex items-center border-2 px-4 py-1 mb-3  rounded-md">
                      <Goal size={32} className="bg-gray-300 p-1 rounded-full" />
                      <div className="flex font-semibold flex-col ">
                        <p className="px-4">Resolver</p>
                        <p className="px-4">0x11111111111111</p>

                      </div>
                    </div>

                    <Button style={{ textTransform: "none" }} onClick={toggleVisibility}
                      className="flex outline-none gap-2 border border-black text-black px-2 py-2 rounded-full "
                    >Propose resolution</Button>
                  </div>
                }
              </div>

              <Button style={{ textTransform: "none" }} onClick={toggleVisibility}
                className="flex gap-2 outline-none text-black px-3 py-2 rounded-full border bg-grary-400 hover:bg-gray-300 transition duration-200"
              >
                {isVisible ? "Show Less" : "Show More"}
                {isVisible ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </div>

            
            <EventInfoList />


            {/* <Tabs>
              <TabContent label="Comments">
                <div className="flex flex-col px-2 ">
                  <div className="flex border-2 gap-2 rounded-full py-3">
                    <input />
                  </div>
                  <div className="flex border-2 gap-2 rounded-full py-3 justify-center">
                    <Shield />
                    <p className="">Beware of external links, they may be phishing attacks.</p>
                  </div>

                  <div className="flex items-center gap-2 border-red-800 border-2">
                    <p className="text-gray-400 font-semibold text-base">Sort by</p>
                    <Select 
                      className="flex w-36 border-2 border-gray-400 focus-within:border-black rounded-lg "
                      value={selectedOption}
                      styles={customStyles}
                      options={sortItem}
                      onMenuOpen={() => setIsDropdownOpen(true)}
                      onMenuClose={() => setIsDropdownOpen(false)}
                      onChange={handleChange}
                      components={{
                        DropdownIndicator: () => (
                          <div className="  ">
                            {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                          </div>
                        ),
                      }}
                      getOptionLabel={(option) => (
                        <div className="flex font-semibold  border-none gap-2 items-center">
                          <option.icon cx />
                          <span className="text-lg text-nowrap">{option.text}</span>
                        </div>
                      )}
                    />
                  </div>
                </div>
                <PositionListItem
                  avatar="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0="
                  eventName="Will Kamala Harris win the 2024 US Presidential Election?"
                  isBet={true}
                  value={124120}
                  avgPrice={6}
                  curPrice={10}
                  totalPrice={123123.61}
                  rate={123321.26}
                />
              </TabContent>

              <TabContent label="Activity">
                <div className="flex justify-between px-2 text-gray-400 uppercase">
                  <div className="flex w-[8vw] ">
                    type
                  </div>
                  <div className="flex w-[60vw] ">
                    market
                  </div>
                  <div className="flex w-[8vw] justify-end px-12">
                    amount
                  </div>
                </div>
                <ActivityListItem
                  avatar="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0="
                  eventName="Will Kamala Harris win the 2024 US Presidential Election?"
                  isBet={true}
                  value={124120}
                />
              </TabContent>
            </Tabs> */}
          </div>
        </div>

        <div>
          <div className="md:block hidden border-2 py-4 rounded-lg">
            <EventInfoCard />
          </div>
        </div>

      </div >
    </div >
  );
};

export default Profile; 