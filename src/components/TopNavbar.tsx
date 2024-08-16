import React from "react";
import { Button, Switch, Menu, MenuHandler, MenuList, Typography } from '@material-tailwind/react';
import { Activity, Bell, AlignJustify, Flag, Trophy, User } from "lucide-react";

import { content } from "../contents/landing";
import { SearchIcon } from "./icons";
import SignInModal from "./SignInModal";
import { dispatch, useSelector } from "../store";
import { getUserData } from "../store/reducers/userInfo";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import MarketNavbar from "./MarketNavbar";

const TopNavbar = () => {

  const [isMarketOpen, setIsMarketOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Variables
  const [inOpen, setInOpen] = React.useState(false);
  const [upOpen, setUpOpen] = React.useState(false);

  // Getting Data
  const username = useSelector((state) => state.userInfo.user.username)
  const userrole = useSelector((state) => state.userInfo.user.role)

  // Use hooks
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate()



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
        <div className="flex items-center">
          <div className="lg:visible lg:flex sm:hidden hidden">
            <Menu
              open={isMarketOpen}
              handler={setIsMarketOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
            >
              <MenuHandler>
                <Button style={{ textTransform: "none" }} className="shadow-none p-2 rounded-md items-center bg-white text-gray-400 hover:text-black  hover:bg-gray-300">
                  <p onClick={() => { navigate('/') }} className="justify-center flex">
                    <Trophy className="text-center" size={20} />
                  </p>
                  <p className="text-sm font-bold">Markets</p>
                </Button>
              </MenuHandler>
              <MenuList className="z-10 hidden max-w-screen-xl rounded-xl lg:block">
                <MarketNavbar />
              </MenuList>
            </Menu>

            <Button style={{ textTransform: "none" }} className="shadow-none p-1 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/election') }}>
              <p className="justify-center flex">
                <Flag className="text-center" size={20} />
              </p>
              <p className="text-sm font-bold">Election</p>
            </Button>
            <Button style={{ textTransform: "none" }} className="shadow-none p-1 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/activity') }}>
              <p className="justify-center flex">
                <Activity className="text-center" size={18} />
              </p>
              <p className="text-sm font-bold">Activity</p>
            </Button>
            <Button style={{ textTransform: "none" }} className="shadow-none p-2 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
              <p className="justify-center flex">
                <Trophy className="text-center" size={20} />
              </p>
              <p className="text-sm font-bold">Ranks</p>
            </Button>
          </div>
          <div className="w-full">

            {isLoggedIn ?
              <div className="flex gap-1 ">
                <div className="flex ">
                  <Button style={{ textTransform: "none" }} className="outline-none  w-full shadow-none p-1 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
                    <p className="text-green-500 text-sm">$0.00</p>
                    <p className="text-sm font-bold">Portfolio</p>
                  </Button>
                </div>
                <div className="flex ">
                  <Button style={{ textTransform: "none" }} className="outline-none w-full shadow-none px-3 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
                    <p className="text-green-500 text-sm">$0.00</p>
                    <p className="text-sm font-bold">Cash</p>
                  </Button>
                </div>
                <div className="flex ">
                  <Button style={{ textTransform: "none" }} className="outline-none px-2 w-full shadow-none  rounded-md items-center bg-blue-700 hover:text-black  hover:bg-gray-300" onClick={() => { }}>
                    <p className="">Deposit</p>
                  </Button>
                </div>
                <div className="flex ">
                  <Button style={{ textTransform: "none" }} className="shadow-none w-full p-2 rounded-md items-center text-gray-400 hover:text-black hover:bg-gray-300 " onClick={() => { navigate('/leaderboard') }}>
                    <Bell />
                  </Button>
                </div>

                <Menu
                  open={isMenuOpen}
                  handler={setIsMenuOpen}
                  offset={{ mainAxis: 20 }}
                  placement="bottom"
                  allowHover={true}
                >
                  <MenuHandler>
                    <Button style={{ textTransform: "none" }} className="flex outline-none border-2 border-gray-300 p-2 rounded-md  items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
                      <User />{username}
                    </Button>
                  </MenuHandler>
                  <MenuList className="-w-14 hidden max-w-screen-xl rounded-xl lg:block outline-none">
                    {userrole === "admin" ? (
                      <>
                        <Button onClick={() => navigate("/admin")} style={{ textTransform: "none" }} className="w-full text-md flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">User Management</Button>
                        <Button onClick={() => navigate("/admin/addevent")} style={{ textTransform: "none" }} className="w-full text-md flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Event Management</Button>
                      </>
                    ) : (
                      <>
                        <Button onClick={() => navigate("/")} style={{ textTransform: "none" }} className="w-full text-md flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Main</Button>
                        <Button onClick={() => navigate("/setting")} style={{ textTransform: "none" }} className="w-full text-md flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Setting</Button>
                        <Button onClick={() => navigate("/profile")} style={{ textTransform: "none" }} className="w-full text-md flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Profile</Button>
                      </>
                    )}
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
                    <Button onClick={() => handleLogout()} style={{ textTransform: "none" }} className="w-full text-md flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Logout</Button>
                  </MenuList>
                </Menu>
              </div >
              :
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <Button onClick={handleInClick} style={{ textTransform: "none", color: "blue" }} className="w-full text-md flex gap-3 px-2 items-center outline-none  bg-gray-50 text-nowrap">Log In</Button>
                  <Button onClick={handleUpClick} style={{ textTransform: "none", color: "white" }} className="w-full text-md flex gap-3 px-2 items-center outline-none bg-blue-700 text-nowrap">Sign Up</Button>
                </div>

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
                      <Switch className="outline-none"
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

          </div >
        </div >
      </div >
      {/* Navigates */}
      < div className="flex overflow-x-scroll scrollbar-hide" >
        {
          content.menuBtns.map((item, index) => <Button style={{ fontFamily: "initial", fontSize: "14px", textTransform: "none", color: "black" }} key={index} value={item.value} onClick={() => { }} className="flex border-b-2 p-1 px-3 border-white hover:border-b-gray-500 focus:border-b-black rounded-md font-bold text-lg text-black text-nowrap" >{item.text}</Button>)
        }
      </div >
      <hr />
    </div >
  )
}

export default TopNavbar;