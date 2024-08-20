import React from "react";
import Button from "./Button/Button";
import { Menu, MenuHandler, MenuList } from '@material-tailwind/react';
import { Activity, Bell, AlignJustify, Flag, Trophy, Grid3X3 } from "lucide-react";
import { content } from "../contents/landing";
import { SearchIcon } from "./icons";
import SignInModal from "./SignInModal";
import { dispatch, useSelector } from "../store";
import { getUserData } from "../store/reducers/userInfo";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import MarketNavbar from "./MarketNavbar";
import Logo from "./Logo";

const TopNavbar = () => {

  const [isMarketOpen, setIsMarketOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Variables
  const [inOpen, setInOpen] = React.useState(false);
  const [upOpen, setUpOpen] = React.useState(false);

  // Getting Data
  const username = useSelector((state) => state.userInfo.user.username)
  const email = useSelector((state) => state.userInfo.user.email)
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
    <div className="fixed w-full z-30  bg-white top-0">
      <div className=" flex justify-between gap-2 items-center px-2 py-2">
        <SignInModal isOpen={inOpen} onClose={handleInClick} title="Sign In" />
        <SignInModal isOpen={upOpen} onClose={handleUpClick} title="Sign Up" />

        <div className="flex md:gap-20 w-full justify-between items-center ">
          <div className="cursor-pointer" onClick={() => navigate('/')}>
            <Logo color="text-fuchsia-900" />
          </div>

          <div className="lg:visible lg:flex lg:w-full md:w-72 sm:hidden hidden px-4 py-2 gap-2 items-center hover:border-black border border-gray-700 rounded-lg">
            <SearchIcon color="black" size={18} />
            <input type="text" className="w-full outline-none" placeholder="Search markets" />
          </div>
        </div>

        <div className="flex items-center">
          <div className="lg:visible lg:flex sm:hidden items-center hidden  ">
            <Menu
              open={isMarketOpen}
              handler={setIsMarketOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
            >
              <MenuHandler>
                <Button onClick={() => { navigate('/markets') }} text="Markets" className="justify-center flex flex-col cursor-pointer px-2 py-1 rounded-md items-center bg-white text-gray-400 hover:text-black  hover:bg-gray-300" icon={<Grid3X3 className="text-center" size={20} />} />
              </MenuHandler>
              
              <MenuList className="z-40 hidden max-w-screen-xl rounded-xl lg:block">
                <MarketNavbar />
              </MenuList>
              
            </Menu>
            <Button text="Election" className="p-1 flex flex-col cursor-pointer  rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/elections') }} icon={<Flag className="text-center" size={20} />} />
            <Button text="Activity" className="p-1 flex flex-col cursor-pointer rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/activity') }} icon={<Activity className="text-center" size={18} />} />
            <Button text="Ranks" className="px-2 py-1 flex flex-col cursor-pointer rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }} icon={<Trophy className="text-center" size={20} />} />
          </div>

          <div className="w-full px-5">
            {isLoggedIn ?
              <div className="flex items-center gap-1 ">
                <div className="lg:flex hidden  w-full p-1 rounded-md flex-col cursor-pointer items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
                  <p className="text-green-500 text-sm">$0.00</p>
                  <p className="text-sm font-medium">Portfolio</p>
                </div>
                <div className="lg:flex hidden w-full px-4 py-1 rounded-md   flex-col cursor-pointer items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
                  <p className="text-green-500 text-sm">$0.00</p>
                  <p className="text-sm font-medium">Cash</p>
                </div>
                {/* <div className="lg:flex hidden "> */}
                <Button text="Deposit" className="p-2 w-full lg:flex hidden flex-col cursor-pointer  rounded-md items-center bg-blue-700 hover:bg-blue-500 text-white" onClick={() => { }} />

                {/* </div> */}
                <div className="flex lg:border-r-2 border-gray-400 px-2">
                  <Button icon={<Bell />} className="w-full p-2 rounded-md flex flex-col cursor-pointer items-center text-gray-400 hover:text-black hover:bg-gray-300 " onClick={() => { }} />
                </div>

                <Menu
                  open={isMenuOpen}
                  handler={setIsMenuOpen}
                  offset={{ mainAxis: 20 }}
                  placement="bottom"
                  allowHover={true}
                >
                  <MenuHandler>
                    <Button className="w-14 hidden lg:flex border-gray-300 p-2 rounded-full  items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
                      <img className=" rounded-full" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="" />
                    </Button>
                  </MenuHandler>
                  <MenuList className="z-40 w-[14rem] hidden max-w-screen-xl rounded-xl lg:block outline-none">
                    {userrole === "admin" ? (
                      <>
                        <Button onClick={() => navigate("/admin")} className="w-full font-medium cursor-pointer flex gap-3 px-2 text-base items-center text-nowrap" text="User Management" />
                        <Button onClick={() => navigate("/admin/addevent")} className="w-full font-medium cursor-pointer flex gap-3 text-base px-2 items-center text-nowrap" text="Event Management" />
                      </>
                    ) : (
                      <>
                        <div className="flex w-full gap-2  ">
                          <img className=" w-10 rounded-full" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="" />
                          <div className=" ">
                            <p className="" onClick={() => { navigate('/profile') }}>{username}</p>
                            <p className="">{email}</p>
                          </div>
                        </div>
                        <hr />
                        <Button onClick={() => navigate("/profile")} className="w-full font-medium cursor-pointer flex gap-3 text-base px-2 items-center text-nowrap" text="Profile" />
                        <Button onClick={() => navigate("/setting")} className="w-full font-medium cursor-pointer flex gap-3 text-base px-2 items-center text-nowrap" text="Setting" />
                        <Button onClick={() => navigate("/watchlist")} className="w-full font-medium cursor-pointer flex gap-3 text-base px-2 items-center text-nowrap" text="Watchlist" />
                        <Button onClick={() => navigate("/election")} className="w-full font-medium cursor-pointer flex gap-3 text-base px-2 items-center text-nowrap" text="Elections" />
                      </>
                    )}
                    <Button onClick={() => navigate("/learn")} className="w-full font-medium cursor-pointer flex gap-3 text-base px-2 items-center text-nowrap" text="Learn" />
                    <Button onClick={() => navigate("/docs")} className="w-full font-medium cursor-pointer flex gap-3 text-base px-2 items-center text-nowrap" text="Documentation" />
                    <div className="flex  items-center">
                      <div>
                        <p color="blue-gray" className="font-medium cursor-pointer text-nowrap text-sm">
                          Dark Mode
                        </p>
                      </div>
                    </div>
                    <Button onClick={() => handleLogout()} className="w-full font-medium cursor-pointer border-none flex gap-3 text-base px-2 items-center text-nowrap" text="Logout" />
                  </MenuList>
                </Menu>
              </div >
              :
              <div className="flex   gap-1 items-center">
                <Button onClick={handleInClick} className="w-full font-medium cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200 flex tems-centertext-base  bg-gray-50 text-nowrap" text="Log In" />
                <Button onClick={handleUpClick} className="w-full font-medium cursor-pointer rounded-md px-4 py-2 items-centers text-base bg-blue-700 text-nowrap text-white" text="Sign Up" />

                <div className="w-[20px] md:flex hidden ">
                  <Menu
                    open={isMenuOpen}
                    handler={setIsMenuOpen}
                    // offset={{ mainAxis: 20 }}
                    placement="bottom"
                    allowHover={true}
                  >
                    <MenuHandler>
                      <Button icon={<AlignJustify />} className=" p-2 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }} />
                    </MenuHandler>

                    <MenuList className=" w-[14rem] z-40  hidden max-w-screen-xl rounded-xl lg:block ">
                      <Button onClick={handleInClick} className="w-full font-medium cursor-pointer flex gap-3 text-base px-2 items-center text-nowrap" text="Log In" />
                      <Button onClick={handleUpClick} className="w-full font-medium cursor-pointer flex gap-3 text-base px-2 items-center text-nowrap" text="Sign Up" />
                      <hr />
                      <Button onClick={() => navigate("/elections")} className="w-full font-medium cursor-pointer flex gap-3 text-base px-2 items-center text-nowrap" text="Election" />
                      <Button onClick={() => navigate("/rewards")} className="w-full font-medium cursor-pointer flex gap-3 text-base px-2 items-center text-nowrap" text="Rewards" />
                      <Button onClick={() => navigate("/learn")} className="w-full font-medium cursor-pointer flex gap-3 text-base px-2 items-center text-nowrap" text="Learn" />
                      <Button onClick={() => navigate("/docs")} className="w-full font-medium cursor-pointer flex gap-3 text-base px-2 items-center text-nowrap" text="Documentation" />

                      <div className="flex items-center">
                        <div className="font-medium cursor-pointer text-nowrap text-sm">
                          Dark Mode
                        </div>
                      </div>
                    </MenuList>
                  </Menu>

                </div>
              </div>
            }
          </div >
        </div >

      </div >
      {/* Navigates */}
      < div style={{ scrollbarWidth: 'none' }} className="flex gap-2 px-2 overflow-x-scroll " >
        {
          content.menuBtns.map((item, index) =>
            <div className=" ">
              <Button text={item.text} key={index} value={item.value} onClick={() => { }} className="  border-b-2 rounded-none font-medium cursor-pointer p-2 border-white hover:border-b-gray-500 focus:border-b-black  text-black text-nowrap" ></Button>
            </div>
          )
        }
      </div >
      <hr />
    </div >
  )
}

export default TopNavbar;