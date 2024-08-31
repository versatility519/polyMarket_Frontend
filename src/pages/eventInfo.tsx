import React from "react";
import Button from "../components/Button/Button";
import { Tooltip } from "@material-tailwind/react";
import EventInfoList from "../components/event/EventInfoList";
import EventInfoCard from "../components/event/EventInfoCard";
import TopNavbar from "../components/layouts/TopNavbar";

import { Trophy, Clock4, Star, Link, ChevronUp, ChevronDown, ChevronsLeftRight, Goal, Check, Gift, RefreshCw, Ellipsis } from "lucide-react";
import { getUsersData } from "../store/reducers/users";
import { getEventInfo } from "../store/reducers/events";

import { dispatch, useSelector } from "../store";
import YesNoBtn from "../components/YesNoBtn";
import Logo from "../components/layouts/Logo";
import MobileFooter from "../components/layouts/MobileFooter";
import MarketInfoList from "../components/event/MarketInfoList";

const EventInfo = () => {
  const eventInfo = useSelector((state) => state.events.event)
  const [isVisibleRule, setIsVisibleRule] = React.useState < boolean > (false);
  const [isVisibleInfo, setIsVisibleInfo] = React.useState < boolean > (false);

  const toggleInfo = (id: number) => {
    setSelectedId(id);
    setIsVisibleInfo(!isVisibleInfo);
  };
  const [moreOpen, setMoreOpen] = React.useState < boolean > (false)
  const toggleFooterMore = () => {
    setMoreOpen((prev) => !prev);
  };
  const toggleRule = () => {
    setIsVisibleRule(!isVisibleRule);
  };

  const [selectedYesNo, setSelectedYesNo] = React.useState < 'yes' | 'no' | null > ('yes');
  const [selectedId, setSelectedId] = React.useState < number | null > (null);

  const handleYesNo = (selection: 'yes' | 'no', id: number) => {
    setSelectedId(id);
    setSelectedYesNo(selection);
    // Additional logic can go here
  };
  const ref = React.useRef < HTMLDivElement | null > (null)
  const [pageId, setPageId] = React.useState < string | null > (null)
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setMoreOpen(false);
    }
  };

  React.useEffect(() => {
    // Add event listener for mouse down events
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  React.useEffect(() => {
    const regex = /[?&]tid=([^&#]*)/;
    const match = (window.location.search).match(regex);
    const tidValue = match ? match[1] : null;

    setPageId(tidValue);
    if (pageId !== null) {
      dispatch(getUsersData());
      dispatch(getEventInfo(pageId));
    }
  }, [pageId]);

  return (
    <div className="bg-bgColor h-screen overflow-hidden-scrollbar overflow-y-auto">
      <TopNavbar />
      <div className="flex mt-36 justify-center px-4">
        {/* <div className="md:flex  flex flex-col w-[60rem] gap-4 "> */}
        <div className=" flex lg:w-[80rem] w-full gap-4">
          <div className=" lg:w-2/3 w-full ">
            <div className="flex flex-col">
              <div className="flex gap-4 text-black-700">
                <div className="items-center">
                  <img className=" w-16 h-16 rounded-md" src={eventInfo?.image} alt="userAvatar" />
                </div>
                <div className="flex w-full flex-col">
                  <div className="flex w-full justify-between ">
                    <div className="gap-3 lg:flex">
                      <div className="flex gap-2">
                        <Tooltip placement="bottom" className="bg-bgColor border border-gray-300"
                          content={
                            <div className="bg-bgColor text-textColor w-[16rem] px-2  ">
                              <p className="text-lg  font-normal  indent-4 pb-1">
                                Winner take all
                              </p>
                              <div className=" py-1">
                                <ul className="flex flex-col">
                                  <li className="flex items-center gap-2">
                                    <span className="rounded-full bg-bgColor p-1">
                                      <Check className="text-blue-500" />
                                    </span>
                                    <p className="font-normal text-sm"> Only 1 winner</p>
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <span className="rounded-full bg-bgColor p-1">
                                      <Check className="text-blue-500" />
                                    </span>
                                    <p className="font-normal text-sm">Supports negative-risk (convert No shares to Yes of the other options)</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          }>
                          <Trophy className="text-gray-500 p-1 rounded-md" />
                        </Tooltip>
                        <p className="text-gray-500 text-nowrap">$4000 Bet</p>

                      </div>
                      <div className="flex gap-2">
                        <Tooltip className="z-50 w-64" content="This is estimated end date. See rules below for specific resolution details.">
                          <Clock4 className="text-gray-500 p-1 rounded-md" />
                        </Tooltip>
                        <p className="text-gray-500 text-nowrap">Nov 5, 2024</p>
                      </div>
                    </div>
                    <div className="flex scale-75 gap-2 text-textColor cursor-pointer">
                      <Tooltip className="px-2 py-1 rounded shadow" content="Add to watchlist">
                        <Star />
                      </Tooltip>
                      <Tooltip className="px-2 py-1 rounded shadow" content="Embed" >
                        <ChevronsLeftRight className="lg:flex hidden" />
                      </Tooltip>

                      <Tooltip placement="bottom" className="bg-white border border-gray-300" content={
                        <>
                          <p className="text-lg text-textColor font-normal indent-4">Copy Link</p>

                          <div className=" text-textColor py-1">
                            <ul className="flex flex-col gap-2">
                              <li className="flex items-center gap-4">
                                <p className="font-normal text-sm"> Q3</p>
                              </li>
                              <li className="flex items-center gap-4">
                                <p className="font-normal text-sm"> Q4</p>
                              </li>
                              <li className="flex items-center gap-4">
                                <p className="font-normal text-sm"> 2025 or Later</p>
                              </li>
                              <li className="flex items-center gap-4">
                                <p className="font-normal text-sm">Others</p>
                              </li>

                            </ul>
                          </div>
                        </>
                      }>
                        <Link onClick={() => { alert("where to go") }} />
                      </Tooltip>
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-between">
                    <div className="lg:flex hidden text-2xl text-textWhiteColor font-bold">
                      {eventInfo?.title}
                    </div>

                    <div className=" lg:flex  hidden opacity-30">
                      <Logo />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:hidden flex text-2xl text-textWhiteColor font-bold">
                {eventInfo?.title}
              </div>
            </div>

            {eventInfo?.market.length === 1 ?
              <p className="text-3xl"> </p>
              :
              <div className="text-textColor ">
                <div className="flex w-full border-t border-b py-2 justify-between uppercase text-xs">
                  <p className="w-1/4">outcome</p>
                  <div className="flex gap-1 items-center w-1/2 ">
                    <p>% Result</p>
                    <Tooltip content="Refresh">
                      <RefreshCw size={16} />
                    </Tooltip>
                  </div>
                </div>
                {eventInfo?.market.map((item) =>
                  <div className="flex flex-col">

                    <div key={item.id} onClick={() => toggleInfo(item.id as number)} className="  lg:flex  justify-between gap-8 py-2 items-center hover:bg-selBtnHoverColor hover:rounded-md cursor-pointer">
                      <div className="flex items-center justify-between w-full ">

                        <div className="flex  items-center gap-4">
                          <img className="w-16 h-16 rounded-md " src={item.image} alt="userAvatar" />
                          <div className="text-nowrap">
                            <p className="hover:underline">{item.groupItemTitle}</p>
                            <div className="flex items-center gap-1">
                              <p className="text-gray-400">{(item.volume)?.toPrecision(5)} Bet</p>
                              <Gift size={14} />
                            </div>
                          </div>
                        </div>
                        <div className=" ">
                          <p className="text-2xl text-textWhiteColor">{item.id}%</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-4 ">
                        <Button
                          key={`yes-${item.id}`} // Assuming item has a unique 'id' property
                          text={` Yes ${100 - Number(item.outcomePrice?.[0])}%`}
                          // text={`Yes`}
                          onClick={() => handleYesNo('yes', item.id as number)}
                          className={`${selectedId === item.id && selectedYesNo === 'yes' ? 'text-white bg-green-600' : 'bg-yesBg text-yesBtnText'} w-full text-center px-8 py-4  font-semibold text-nowrap rounded-md text-lg`}
                        />
                        <Button
                          key={`no-${item.id}`} // Assuming item has a unique 'id' property
                          text={`No ${100 - Number(item.outcomePrice)}%`}
                          // text={`No ${100 - Number(item.outcomePrice)}%`}
                          // text={`No`}
                          onClick={() => handleYesNo('no', item.id as number)}
                          className={`${selectedId === item.id && selectedYesNo === 'no' ? 'text-white bg-orange-600' : 'bg-noBg text-noBtnText'} w-full  text-center px-8 py-4 font-semibold text-nowrap rounded-md text-lg`}
                        />
                      </div>
                    </div>

                    <div className="px-2">
                      {isVisibleInfo && selectedId == item.id as number && (
                        <MarketInfoList />
                      )}
                    </div>
                  </div>
                )}
              </div>
            }

            <div className="py-4">
              <h2 className="text-xl border-b font-medium text-textColor">Rules</h2>
              <div className="flex flex-col mt-3 gap-4">
                <div className={`${!isVisibleRule ? 'line-clamp-1' : ''} indent-3 text-textColor font-normal`}>
                  {eventInfo?.description}
                </div>

                {isVisibleRule &&
                  <div className=" py-2">
                    <div className="flex items-center border  px-4 py-1 mb-3  rounded-lg">
                      <Goal size={32} className="bg-gray-300 p-1 rounded-full" />
                      <div className="flex font-semibold flex-col text-textColor ">
                        <p className="px-4">Resolver</p>
                        <p className="px-4">0x11111111111111</p>
                      </div>
                    </div>

                    <Button text="Propose resolution"
                      className="flex w-40 gap-2 border text-textColor border-gray-500 px-2 py-1 text-center rounded-full "
                    />
                  </div>
                }
              </div>

              <div onClick={toggleRule} className={`flex w-32 gap-1 text-nowrap text-sm items-center px-2 py-1 bg-cardBg text-textColor rounded-full cursor-pointer`}>
                <p className="px-2">{isVisibleRule ? "Show Less" : "Show More"}</p>
                {isVisibleRule ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>
            <EventInfoList />
          </div>

          <div className="lg:w-1/3 lg:flex w-full hidden ">
            {/* <div className=" bg-blue-500  "> */}
            <EventInfoCard />
          </div>
        </div >
      </div >

      <div className="px-4 flex sm:flex lg:hidden visible fixed z-50 w-full bottom-[78px]">
        <YesNoBtn />
        <div className='md:flex lg:hidden flex w-10'>
          <Button onClick={() => { toggleFooterMore() }} className={`lg:hidden sm:flex w-12 text-md font-semibold text-nowrap rounded-md  py-3 bg-gray-200 p-4  `} icon={<Ellipsis />}></Button>
          {moreOpen === true && (
            <div className='absolute right-0 border bottom-12 flex flex-col text-start w-44 bg-white z-20 mb-2 rounded-md px-2' ref={ref}>
              <Button className={`w-full text-sm font-semibold text-nowrap rounded-md  py-2 `} text='Merge Shares'></Button>
              <Button className={`w-full text-sm font-semibold text-nowrap rounded-md  py-2 `} text='Split Shares'></Button>
              <Button className={`w-full text-sm font-semibold text-nowrap rounded-md  py-2 `} text='Remove Liquidity(AMM)'></Button>
              <Button className={`w-full text-sm font-semibold text-nowrap rounded-md  py-2 `} text='Buy Shares'></Button>
              <Button className={`w-full text-sm font-semibold text-nowrap rounded-md  py-2 `} text='Sell Shares'></Button>
            </div>
          )}
        </div>
      </div>

      <MobileFooter />
    </div >
  );
};

export default EventInfo; 