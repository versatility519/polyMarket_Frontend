import React from "react";
import { Button, Switch, Menu, MenuHandler, MenuList, Typography } from '@material-tailwind/react';

import { content } from "../contents/landing";
// import Button from "./Button";
import { SearchIcon } from "./icons";
import SignInModal from "./SignInModal";
import { dispatch, useSelector } from "../store";
import { getUserData } from "../store/reducers/userInfo";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Activity, AlignJustify, ChevronDown, ChevronUp, Flag, Grid3X3, Trophy } from "lucide-react";
import MarketNavbar from "./MarketNavbar";

const TopNavbar = () => {


  const [isMarketOpen, setIsMarketOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Variables
  const [inOpen, setInOpen] = React.useState(false);
  const [upOpen, setUpOpen] = React.useState(false);

  // Getting Data
  const firstName = useSelector((state) => state.userInfo.user.firstName)
  const lastName = useSelector((state) => state.userInfo.user.lastName)
  const userrole = useSelector((state) => state.userInfo.user.role)

  // Use hooks
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate()

  // Dropdown menu
  const [open, setOpen] = React.useState < boolean > (false);
  const ref = React.useRef < HTMLDivElement | null > (null);

  const handleClickOutside = (event: MouseEvent) => {
    // Check if the click was outside the dropdown
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };
  const [isChecked, setIsChecked] = React.useState(false);

  const toggleStyle = () => {
    setIsChecked(!isChecked);
  };
  React.useEffect(() => {
    // Add event listener for mouse down events
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Open SignInModal, Logout
  const handleInClick = () => {
    setInOpen(!inOpen);
  };
  const handleUpClick = () => {
    setUpOpen(!upOpen);
  };
  const handleLogout = () => {
    navigate('/');
    logout()
    setOpen(false)
  }

  React.useEffect(() => {
    dispatch(getUserData())
  }, [])

  return (
    <div className="">
      <div className="flex justify-between  gap-4 items-center px-5 py-2">
        <SignInModal isOpen={inOpen} onClose={handleInClick} title="Sign In" />
        <SignInModal isOpen={upOpen} onClose={handleUpClick} title="Sign Up" />

        <div className="lg:visible lg:flex lg:w-full sm:hidden hidden gap-5 px-5 py-1 items-center border border-gray-700 rounded-lg">
          <SearchIcon color="black" />
          <input type="text" className="w-full outline-none" placeholder="Search markets" />
        </div>
        <div className="flex gap-2 items-center">
          <div className=" gap-2 lg:visible lg:flex sm:hidden hidden">
            <Menu
              open={isMarketOpen}
              handler={setIsMarketOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
            >
              <MenuHandler>
                <Button style={{ textTransform: "none" }} className="shadow-none p-2 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
                  <p className="justify-center flex">
                    <Trophy className="text-center" size={20} />
                  </p>
                  <p>Markets</p>
                </Button>
              </MenuHandler>
              <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                <MarketNavbar />
              </MenuList>
            </Menu>

            <Button style={{ textTransform: "none" }} className="shadow-none p-1 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/election') }}>
              <p className="justify-center flex">
                <Flag className="text-center" size={20} />
              </p>
              <p>Election</p>
            </Button>
            <Button style={{ textTransform: "none" }} className="shadow-none p-1 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/activity') }}>
              <p className="justify-center flex">
                <Activity className="text-center" size={18} />
              </p>
              <p>Activity</p>
            </Button>
            <Button style={{ textTransform: "none" }} className="shadow-none p-2 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
              <p className="justify-center flex">
                <Trophy className="text-center" size={20} />
              </p>
              <p>Ranks</p>
            </Button>
          </div>

          {isLoggedIn ?
            <div className="flex w-full gap-3">
              <div className="text-center text-sm">
                <p className="text-green-500">$0.00</p>
                <p>Portfolio</p>
              </div>
              <div className="text-center text-sm">
                <p className="text-green-500">$0.00</p>
                <p>Cash</p>
              </div>
              <div ref={ref}>
                <Menu
                  open={isMenuOpen}
                  handler={setIsMenuOpen}
                  offset={{ mainAxis: 20 }}
                  placement="bottom"
                  allowHover={true}
                >
                  <MenuHandler>
                    <Button style={{ textTransform: "none" }} className="shadow-none p-2 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
                      <p className="justify-center flex">
                        <Trophy className="text-center" size={20} />
                      </p>
                      <p>Markets</p>
                    </Button>
                  </MenuHandler>
                  <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <MarketNavbar />
                  </MenuList>
                </Menu>
                <div className="flex items-center" onClick={() => {
                  setOpen(((prev) => !prev));
                }} >
                  <img src="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" alt="avatar" className="w-7 rounded-full" />
                  {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                {open &&
                  <div className="bg-white absolute top-16 right-[1vw] rounded-md border-2 border-gray-200 shadow-md">
                    <div className="flex items-center gap-2 px-6 py-3">
                      <img src="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" alt="avatar" className="w-8 rounded-full" />
                      <p className="font-bold">{firstName}{lastName}</p>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-2 px-1 py-3 text-start">
                      {userrole === "admin"
                        ? <div>
                          <div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer" onClick={() => navigate("/admin")}>
                            Admin Page
                          </div>
                          <div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer" onClick={() => navigate("/admin/addevent")}>Add Event</div>
                          <div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer" onClick={() => navigate("/admin/profile")}>My Profile</div>
                        </div>
                        :
                        <div>
                          <div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer" onClick={() => navigate("/")}>Main</div>
                          <div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer" onClick={() => navigate("/profile")}>Profile</div>
                          <div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer">Learn</div>
                          <div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer">Documentation</div>
                          <div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer">Dark Mode
                            <input type="checkbox" checked={isChecked} onChange={toggleStyle} />
                            {isChecked ? (
                              <p style={{ color: 'blue' }}>
                                On
                              </p>
                            ) : (
                              <p style={{ color: 'red' }}>
                                Off
                              </p>
                            )}
                          </div>
                        </div>
                      }
                      <div className="hover:bg-gray-200 w-full px-2 rounded-md cursor-pointer">Settings</div>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-2 px-1 py-3 text-start">
                      <div className="hover:bg-gray-200 w-full p-2 rounded-md cursor-pointer" onClick={() => handleLogout()}>Logout</div>
                    </div>
                  </div>
                }
              </div>
            </div>
            :

            <div className="flex gap-2">

              <div className="flex gap-1">
                <Button onClick={handleInClick} style={{ textTransform: "none", color: "blue" }} className="w-full text-md flex gap-3 px-2 items-center outline-none  bg-gray-50 text-nowrap">Log In</Button>
                <Button onClick={handleUpClick} style={{ textTransform: "none", color: "white" }} className="w-full text-md flex gap-3 px-2 items-center outline-none bg-blue-700 text-nowrap">Sign Up</Button>
              </div>

              {/* <div ref={ref}> */}
              <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
              >
                <MenuHandler>
                  <Button style={{ textTransform: "none" }} className=" outline-none border-2 border-gray-300 shadow-none p-2 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
                    <AlignJustify />
                  </Button>
                </MenuHandler>
                <MenuList className="-w-14 hidden max-w-screen-xl rounded-xl lg:block outline-none">
                  <Button onClick={handleInClick} style={{ textTransform: "none" }} className="w-full text-md flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Log In</Button>
                  <Button onClick={handleUpClick} style={{ textTransform: "none" }} className="w-full text-sm flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Sign Up</Button>
                  <hr />

                  <Button onClick={() => navigate("/elections")} style={{ textTransform: "none" }} className="w-full text-md flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Election</Button>
                  <Button onClick={() => navigate("/rewards")} style={{ textTransform: "none" }} className="w-full text-md flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Rewards</Button>
                  <Button onClick={() => navigate("/learn")} style={{ textTransform: "none" }} className="w-full text-md flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Learn</Button>
                  <Button onClick={() => navigate("/docs")} style={{ textTransform: "none" }} className="w-full text-md flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Documentation</Button>

                  <div className="flex items-center">
                    <Switch
                      containerProps={{ className: "mr-2" }}
                    />
                    <div>
                      <Typography color="blue-gray" className="font-medium text-nowrap text-sm">
                        Dark Mode
                      </Typography>

                    </div>
                  </div>
                </MenuList>
              </Menu>

            </div>
          }

        </div>
      </div >
      {/* Navigates */}
      < div className="flex overflow-x-scroll scrollbar-hide" >
        {
          content.menuBtns.map((item, index) => <Button key={index} text={item.text} value={item.value} onClick={() => { }} className="flex px-2 pb-2 border-b-2 text-md border-white hover:border-b-gray-500 focus:border-b-black rounded-sm" icon />)
        }
      </div >
      <hr />
    </div >
  )
}

export default TopNavbar;