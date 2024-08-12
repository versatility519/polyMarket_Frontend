import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { CameraIcon, Megaphone, Save, UserCog } from "lucide-react";

import { getUsersData } from "../store/reducers/users";
import { dispatch, useSelector } from "../store";

const Setting = () => {
  // Getting Data
  // const email = useSelector((state) => state.userInfo.user.email)
  const lastName = useSelector((state) => state.userInfo.user.lastName);

  const [updateEmail, setUpdateEmail] = React.useState("AA");

  const [isProfile, setIsProfile] = React.useState<boolean>(true);

  React.useEffect(() => {
    dispatch(getUsersData());
  }, []);

  const ProfileSetting = () => {
    return (
      <div className="flex w-full flex-col justify-center">
        <h1 className="text-2xl font-semibold pb-2">Profile Settings</h1>
        <div className="flex px-4 py-4 gap-4 items-end">
          <img
            className="flex w-[4vw] rounded-full"
            src="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0="
            alt=""
          />
          <Button
            text="Upload"
            value="saveChange"
            onClick={() => {}}
            className="flex font-semibold items-center gap-2 p-1 text-white bg-blue-600 hover:bg-blue-400 rounded-lg"
            icon={<CameraIcon />}
          />
        </div>
        <label className="flex py-2 text-base font-semibold text-gray-900 ">
          Email
        </label>
        <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            id="email"
            name="title"
            value={updateEmail}
            type="text"
            // onChange={onTitleChanged}
            onChange={(e) => setUpdateEmail(e.target.value)}
            className="flex w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-md"
          />
        </div>
        <label className="flex py-2 text-base font-semibold text-gray-900 ">
          Last Name
        </label>

        <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            id="lastName"
            value={lastName}
            name="title"
            type="text"
            onChange={() => {}}
            className="flex border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-md"
          />
        </div>
        <label className="flex py-2 text-base font-semibold text-gray-900 ">
          Bio
        </label>
        <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <textarea
            id="comments"
            name="comments"
            rows={5}
            cols={55}
            onChange={() => {}}
            className="flex w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-md"
          />
        </div>
        <div className="flex pl-8 pt-4">
          <Button
            text="Save Change"
            value="saveChange"
            onClick={() => {}}
            className="flex font-semibold items-center gap-2 px-2 py-2 text-white bg-blue-600 hover:bg-blue-400 rounded-lg"
            icon={<Save />}
          />
        </div>
      </div>
    );
  };
  const SetNotification = () => {
    return (
      <div className="flex w-full flex-col justify-center font-semibold">
        <h1 className="text-2xl font-semibold pb-2">Notification Settings</h1>
        <div className="flex flex-col">
          <label className="flex py-2 font-semibold text-gray-900 ">
            Email
          </label>
          <div className="flex justify-between items-center">
            <div className="text-sm">Market Updates</div>
            <div className="">
              <Button
                text="Set"
                value="saveChange"
                onClick={() => {}}
                className="flex font-semibold items-center gap-2 px-2 py-2 text-white bg-blue-600 hover:bg-blue-400 rounded-lg"
                icon={<Save />}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className=" ">
      <Navbar />
      <div className="flex justify-center">
        <div className="flex sm:w-full sm:px-4 md:w-full lg:w-full xl:w-[56vw] w-full py-8 border-2 border-red-600">
          <div className="">
            <Button
              text="Profile"
              value="profile"
              onClick={() => setIsProfile(true)}
              className="flex w-full text-2xl items-center font-semibold gap-4 px-4 py-2 focus:bg-gray-400 rounded-lg"
              icon={<UserCog />}
            />
            <Button
              text="Notifications"
              value="profile"
              onClick={() => {
                setIsProfile(false);
              }}
              className="flex w-full text-2xl font-semibold items-center gap-4 px-4 py-2 focus:bg-gray-400 rounded-lg"
              icon={<Megaphone />}
            />
          </div>
          <div className=" flex sm:w-full sm:px-8">
            {isProfile ? <ProfileSetting /> : <SetNotification />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
