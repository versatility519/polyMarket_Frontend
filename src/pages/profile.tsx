import React from "react";
import Button from "../components/Button/Button";
import ProfileInfoList from "../components/profile/ProfileInfoList";
import MyProperty from "../components/cards/MyProperty";
import Logo from "../components/layouts/Logo";
import MobileFooter from "../components/layouts/MobileFooter";
import TopNavbar from "../components/layouts/TopNavbar";
import { useNavigate } from "react-router-dom";
import { Edit2, TrendingUp, ChartNoAxesColumnIncreasing, Activity, CheckCheck, } from "lucide-react";
import { getUsersData } from "../store/reducers/users";
import { dispatch, useSelector } from "../store";
import { Tooltip } from "@material-tailwind/react";

const Profile = () => {
  const navigate = useNavigate();

  // Getting Data
  const userInfo = useSelector((state) => state.userInfo.user); 

  React.useEffect(() => {
    dispatch(getUsersData());
  }, []);
  return (
    <div className="h-screen bg-bgColor  overflow-hidden-scrollbar overflow-y-auto">
      <TopNavbar />

      <div className="flex mt-36 justify-center">
        <div className="flex sm:w-[60rem] w-full flex-col gap-4 ">
          <div className="flex px-4 justify-between  " >

            <div className="lg:flex flex-col gap-4">
              <img className="md:w-24 w-14 rounded-full" src="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" alt="" />
              <div className=" ">
                <div className="md:text-3xl text-xl pb-4 font-semibold text-textColor">{userInfo.username}</div>
                <div className="flex gap-4 items-center text-nowrap">
                  <Tooltip content="Copy email">
                    <div className="bg-gray-300 px-2 rounded-md cursor-pointer" onClick={() => navigator.clipboard.writeText(userInfo.email as string)}>{userInfo.email}</div>
                  </Tooltip>
                  <div className="font-light text-gray-400">Joined Aug 2024</div>
                </div>
              </div>
            </div>

            <div className="lg:flex sm:hidden flex-col hidden">
              <Button
                text="Edit Profile"
                icon={<Edit2 size={18} />}
                value="editProfile"
                className="flex items-center text-nowrap border rounded-md border-gray-400 gap-2 px-2 py-1 text-black"
                onClick={() => navigate("/setting")}
              />
              <div className="opacity-60">
                <Logo />
              </div>
            </div>
            
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 px-4 items-center gap-3">
            <MyProperty value={35} text={"Positions value"} className={"bg-blue-200"} icon={<Activity />} />
            <MyProperty value={53} text={"Profit/loss"} className={"bg-green-200"} icon={<TrendingUp />} />
            <MyProperty value={90} text={"Volume traded"} className={"bg-purple-200"} icon={<ChartNoAxesColumnIncreasing />} />
            <MyProperty value={53} text={"Markets traded"} className={"bg-yellow-200"} icon={<CheckCheck />} />
          </div>

          <div className="flex w-full px-4">
            <ProfileInfoList />
          </div>
          {/* </div> */}

        </div>
        <MobileFooter />
      </div>
    </div>
  );
};

export default Profile;
