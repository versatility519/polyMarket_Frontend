import React from "react";
import { dispatch, useSelector } from "../../store";
import { getUserData } from "../../store/reducers/userInfo";
import useAuth from "../../hooks/useAuth";
import SignInModal from "../SignInModal";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { AlignJustify, ChartLine, Grid3X3, House, Radio, Search, Settings, X } from "lucide-react";
import SocialLink from "./SocialLink";

const MobileFooter = () => {
    const navigate = useNavigate();
    const username = useSelector((state) => state.userInfo.user.username);
    const email = useSelector((state) => state.userInfo.user.email);
    const { isLoggedIn, logout } = useAuth();

    const [isHidden, setIsHidden] = React.useState(false);
    const [prevScrollPos, setPrevScrollPos] = React.useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [inOpen, setInOpen] = React.useState(false);
    const [upOpen, setUpOpen] = React.useState(false);
    const ref = React.useRef < HTMLDivElement | null > (null);

    // Fetch user data on component mount
    React.useEffect(() => {
        dispatch(getUserData());
    }, []);

    // Handle click outside to close sidebar
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Handle scroll to show/hide footer
    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsHidden(prevScrollPos > currentScrollPos && currentScrollPos > 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    // Handle modal open/close
    const handleInClick = () => {
        setInOpen(!inOpen);
        setIsSidebarOpen(false);
    };
    const handleUpClick = () => {
        setUpOpen(!upOpen);
        setIsSidebarOpen(false);
    };

    // Handle logout
    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className={`fixed z-50 bottom-0 left-0 lg:hidden sm:w-full w-full border-t bg-bgColor text-gray-500 justify-center py-3 transition-transform duration-300 ${isHidden ? 'transform translate-y-full' : ''}`}>
            {/* Sidebar */}
            <SignInModal isOpen={inOpen} onClose={handleInClick} title="Sign In" />
            <SignInModal isOpen={upOpen} onClose={handleUpClick} title="Sign Up" />

            <div className={`fixed top-0 left-0 h-full bg-cardBg text-textColor transition-all duration-300 ${isSidebarOpen ? 'w-[80vw]' : 'w-0 overflow-x-hidden'}`} ref={ref}>
                <div className="px-4 mt-4">
                    {isLoggedIn && (
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="flex w-full items-center gap-2 px-2 py-2">
                                    <img width={48} className="rounded-full" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="" />
                                    <div>
                                        <p onClick={() => navigate('/profile')}>{username}</p>
                                        <p>{email}</p>
                                    </div>
                                </div>
                                <div className="border p-2 rounded-full">
                                    <Settings className="text-textColor" onClick={() => navigate('/setting')} />
                                </div>
                            </div>
                            <Button text="Profile" onClick={() => navigate(`/profile`)} className="flex font-medium text-xl p-1 items-center" />
                            <Button text="Add funds" onClick={() => { }} className="flex font-medium text-xl p-1 items-center" />
                        </div>
                    )}
                    <Button text="Election" onClick={() => navigate(`/elections`)} className="flex font-medium text-xl p-1 items-center" />
                    <Button text="Leaderboard" onClick={() => navigate(`/leaderboard`)} className="flex font-medium text-xl p-1 items-center" />
                    <Button text="Activity" onClick={() => navigate(`/activity`)} className="flex font-medium text-xl p-1 items-center" />
                    <Button text="Resources" onClick={() => navigate(`/`)} className="flex font-medium text-xl p-1 items-center" />
                    <Button text="Rewards" onClick={() => navigate(`/`)} className="flex font-medium text-xl p-1 items-center" />

                    <div className="flex w-full py-4">
                        <SocialLink border={true} />
                    </div>
                </div>
                {!isLoggedIn ? (
                    <div className="flex flex-col px-4 gap-2">
                        <Button text="Log In" onClick={handleInClick} className="flex w-full justify-center p-3 rounded-lg font-medium text-lgborder-gray-300 border hover:bg-gray-500" />
                        <Button text="Sign Up" onClick={handleUpClick} className="flex w-full justify-center p-3 rounded-lg font-medium text-lg text-white bg-btnColor" />
                    </div>
                ) : (
                    <div className="flex flex-col mx-4 mt-4 gap-2">
                        <Button text="Log Out" onClick={handleLogout} className="flex w-full justify-center p-3 rounded-lg font-medium text-lgborder-gray-300 border hover:bg-gray-500" />
                    </div>
                )}
            </div>

            {/* Main Footer Buttons */}
            <div className="flex justify-around w-full">
                <Button icon={<House size={18} />} text="Home" onClick={() => navigate(`/`)} className="flex flex-col p-2 hover:text-textWhiteColor items-center text-gray-500" />
                <Button icon={<Grid3X3 size={18} />} text="Markets" onClick={() => navigate(`/markets`)} className="flex flex-col p-2 hover:text-textWhiteColor items-center text-gray-500" />
                <Button icon={<Search size={18} />} text="Search" onClick={() => navigate(`/`)} className="flex flex-col p-2 hover:text-textWhiteColor items-center text-gray-500" />

                <Button onClick={() => navigate(`/activity`)} className="flex flex-col p-2 hover:text-textWhiteColor items-center text-gray-500"
                    text={isLoggedIn ? '$0.0' : 'Activity'}
                    icon={isLoggedIn ? <ChartLine size={20} /> : <Radio size={18} />}
                />
                <Button onClick={toggleSidebar} className="flex flex-col text-sm p-2 hover:text-textWhiteColor items-center text-gray-500"
                    text={isSidebarOpen ? "Close" : "More"}
                    icon={isSidebarOpen ? <X size={18} /> : <AlignJustify size={18} />}
                />
            </div>
        </div>
    );
};

export default MobileFooter;