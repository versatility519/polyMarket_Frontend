import React from "react";
import { Tooltip, Typography, Button } from "@material-tailwind/react";
import Select from "react-select";
// import Button from "../components/Button";
import TopNavbar from "../components/TopNavbar";
import { customStyles } from "../contents/selectStyle";
import { sortItem } from "../contents/selectItem";

import PositionListItem from "../components/items/PositionListItem";
import { Tabs, TabContent } from "../components/TabsComponet";
import { useNavigate } from "react-router-dom";
import {
  Landmark,
  Trophy,
  Clock4,
  Star,
  Link, ChevronUp, ChevronDown,
  ChevronsLeftRight,
  Goal,
  Shield, Settings,
  Info,
  RefreshCcw,
  Plus,
  Minus,
} from "lucide-react";
import { getUsersData } from "../store/reducers/users";
import { dispatch, useSelector } from "../store";
import ActivityListItem from "../components/items/ActivityListItem";

const Profile = () => {
  const navigate = useNavigate();


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
      <TopNavbar />
      <div className="flex mx-8 justify-center gap-4">
        <div className="flex justify-center pt-8">
          <div className="xl:w-[50vw] lg:w-full md:w-full sm:w-full w-full flex flex-col border-2 py-4">
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
                    <Tooltip placement="bottom" className="bg-white text-gray-800   py-1 rounded shadow" content={
                      <div className="w-[8vw]">
                        <Typography className="gap-2 font-medium">
                          Copy Link<hr />
                          <div>&gt16</div>
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
                  <Button
                    text="PloyMarket"
                    value="editProfile"
                    className="lg:flex sm:hidden items-center font-semibold rounded-lg gap-2 px-4 py-1"
                    icon={<Landmark />}
                  />
                </div>
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-xl border-b-2 font-bold">Rules</h2>

              {!isVisible ? (
                <p className="mt-4">This is the additional content that is revealed when you click "Show More".</p>
              ) : (
                <div className="gap-2">

                  <p className="m-4">This is the initial content that is always visible.This is the initial content that is always visiblehis is the initial content that is always visible.This is the initial content that is always visibl. ehis is the initial content that is always visible.This is the initial content that is always visiblehis is the initial content that is always visible.This is the initial content that is always visiblehis is the initial content that is always visible.This is the initial content that is always visible</p>

                  <div className="flex items-center gap-3 border-2 px-2 py-2 rounded-md">
                    <Goal className="rounded-full" />
                    <div className="">
                      <p>Resolvers</p>
                      <Button text="0x2343234234234" className="text-blue-600" onClick={() => { alert("Go to https://explorer-mainnet.maticvigil.com/address/") }} />
                    </div>
                  </div>
                  <Button text="Propose resolution" value="propose" onClick={() => { alert("Go to https://oracle.uma.xyz/propose?") }} className="border-2 border-gray-800 rounded-full px-2 py-1 font-semibold my-4" />
                </div>
              )}

              <button
                onClick={toggleVisibility}
                className="flex gap-2 text-black px-2 py-1 rounded bg-grary-400 hover:bg-gray-300 transition duration-200"
              >
                {isVisible ? "View Less" : "View More"}
                {isVisible ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>

            <Tabs>
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
            </Tabs>
          </div>
        </div>

        {/* /////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////// */}

        <div className="px-2 w-[16vw] pt-8">
          <div className="flex-col border-2 py-4 rounded-lg">

            <Tabs>
              <TabContent label="Buy">
                <div className="px-3 gap-4">
                  <div className="flex justify-between ">
                    <div className="flex items-center gap-2">
                      Outcome <Info size={14} />
                    </div>
                    <div className="flex items-center gap-2">
                      <RefreshCcw onClick={() => { }} size={14} />
                      <Settings onClick={() => { }} size={20} />
                    </div>
                  </div>


                  <div className="flex gap-2 justify-between">
                    <Button onClick={() => {
                      convertColor();
                    }} className={`w-full font-semibold rounded-md py-3 ${!convertBgColor ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`} text="Yes" price={20} />
                    <Button onClick={() => { convertColor() }} className={`w-full font-semibold rounded-md py-3 ${convertBgColor ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'}`} text="No" price={20} />
                  </div>

                  <div className="border-red-500 border-2 justify-between ">
                    <p>Shares</p>
                    <div className="flex  gap-2 justify-between px-2 py-2 rounded-md border-2">
                      <Button className="bg-gray-300 rounded-md" icon={<Minus />} onClick={() => { setNumber(prevNumber => Math.max(prevNumber - 10, 0)) }} />
                      <input className="w-full text-center" type="text" value={number} onChange={handleInputChange} />
                      <Button className="bg-gray-300 rounded-md" icon={<Plus />} onClick={() => { setNumber(prevNumber => prevNumber + 10) }} />
                    </div>
                    <Button text="Log In" onClick={() => { }} className="w-full bg-blue-600  text-white px-4 py-2 text-lg font-semibold rounded-md " />
                  </div>


                  <div className="flex justify-between px-3 ">
                    <p>Avg price</p>
                    <p className="border-dotted border-b-2 border-indigo-600 ">{number} ¢</p>
                  </div>

                  <div className="flex justify-between px-3 ">
                    <p>Shares</p>
                    <p className="border-dotted border-b-2 border-indigo-600 ">{number} ¢</p>
                  </div>

                  <div className="flex justify-between px-3 ">
                    <p>Avg price</p>
                    <p className="border-dotted border-b-2 border-indigo-600 ">{number} ¢</p>
                  </div>



                </div>


              </TabContent>

              <TabContent label="Sell">
                aaaaaaaaaaaaa

              </TabContent>

            </Tabs>
            <div className="flex border-2 ">
              flex
            </div>
          </div>
        </div>

      </div >
    </div >
  );
};

export default Profile; 