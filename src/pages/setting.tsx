import React from "react";
import Button from "../components/Button/Button";
import TopNavbar from "../components/layouts/TopNavbar";
import { CameraIcon, Save, } from "lucide-react";

import { getUsersData } from "../store/reducers/users";
import { dispatch, useSelector } from "../store";
import MobileFooter from "../components/layouts/MobileFooter";

const Setting = () => {
  // Getting Data
  const email = useSelector((state) => state.userInfo.user.email)
  const username = useSelector((state) => state.userInfo.user.username)

  const [isProfile, setIsProfile] = React.useState < boolean > (true);

  const [isChecked, setIsChecked] = React.useState(true);

  const handleChange = () => {
    console.log("dddd")
    setIsChecked(!isChecked);
  };


  React.useEffect(() => {
    dispatch(getUsersData());
  }, []);

  const ProfileSetting = () => {
    return (
      <div className="flex w-full flex-col justify-center">
        <h1 className="text-2xl font-semibold pb-2">Profile Settings</h1>
        <div className="flex  py-4 gap-4 items-end">
          <img
            className="flex w-16 rounded-full"
            src="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0="
            alt=""
          />

          {/* <div
            className={` flex items-center justify-center w-20 h-20 bg-cover rounded-md border  border-green-300  ${!backgroundImage ? 'bg-green-200' : ''}`}
            style={{
              backgroundImage: `url(${backgroundImage || ''})`,
            }}
          > */}
          <Button
            text="Upload"
            icon={<CameraIcon size={18} />}
            value="saveChange"
            onClick={() => { }}
            className="flex font-semibold items-center gap-1 px-2 py-1 text-white bg-gray-200 rounded-full"
          />

        </div>
        <label className="   py-2 text-base font-semibold text-gray-900 ">
          <p>Email</p>
          <p className="text-gray-400">{email}</p>
        </label>
        <label className="flex py-2 text-base font-semibold text-gray-900 ">
          Last Name
        </label>

        <input type="text" value={username} onChange={() => { }} className="border p-2 rounded-lg focus:border-black text-base" />

        <label className="flex py-2 text-base font-semibold text-gray-900 ">
          Desc
        </label>
        <textarea placeholder="Bio" className="border rounded-lg px-3 py-2 text-base"></textarea>

        <div className="flex pl-8 pt-4">
          <Button
            text="Save"
            icon={<Save size={20} />}
            value="saveChange"
            onClick={() => { alert('save') }}
            className="flex font-semibold items-center gap-1 px-2 py-1 bg-blue-500 text-white cursor-pointer  hover:bg-gray-400 rounded-lg"
          />
        </div>
      </div >
    );
  };
  const SetNotification = () => {
    return (
      <div className="flex w-full flex-col justify-center font-semibold">
        <h1 className="text-2xl font-semibold pb-2">Notification Settings</h1>
        <div className="flex flex-col border rounded-md p-4">
          <p className="text-xl">
            Email
          </p>
          <div className="flex justify-between items-center py-3">
            <div className="text-sm text-gray-400">Market Updates</div>
            <div className="flex p-2 cursor-pointer font-medium  items-center justify-between hover:bg-selBtnHoverColor"  >
              <div className="relative">
                <input type="checkbox" onClick={handleChange} className="sr-only" />
                <div
                  className={`box block h-6 w-10 rounded-full bg-darkMode `} />
                <div
                  className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${isChecked ? 'translate-x-full' : ''}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="h-screen overflow-hidden-scrollbar overflow-y-auto">
      <TopNavbar />
      <div className="flex mt-36  justify-center">
        <div className="md:flex  flex flex-col w-[60rem] gap-4 ">
          {/* <div className="flex sm:w-full sm:px-4 md:w-full lg:w-full xl:w-[48vw] w-full py-8"> */}
          <div className=" text-lg">
            <Button
              text="Profile"
              value="profile"
              onClick={() => setIsProfile(true)}
              className="flex w-full text-xl items-center font-semibold  hover:bg-gray-300 gap-4 px-4 py-2 focus:bg-gray-400 rounded-lg" />
            <Button
              text="Notifications"
              value="profile"
              onClick={() => {
                setIsProfile(false);
              }}
              className="flex w-full text-xl items-center font-semibold  hover:bg-gray-300 gap-4 px-4 py-2 focus:bg-gray-400 rounded-lg" />
          </div>
          <div className=" flex sm:w-full px-4">
            {isProfile ? <ProfileSetting /> : <SetNotification />}
          </div>
        </div>
        <MobileFooter />
      </div>
    </div>
  );
};

export default Setting;
