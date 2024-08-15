import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import TopNavbar from "../components/TopNavbar";
import RankItem from "../components/items/RankItem";
import {
  ChartNoAxesColumnIncreasing,
  Banknote,
  Clock3Icon,
} from "lucide-react";
import { getUsersData } from "../store/reducers/users";
import { dispatch, useSelector } from "../store";

const Leaderboard = () => {
  const navigate = useNavigate();
  //
  // Getting Data
  const firstName = useSelector((state) => state.userInfo.user.firstName);

  const url = new URL(window.location.href);
  const pathname = url.pathname.replace(/^\/+/, "");

  const [activeButton, setActiveButton] = React.useState < string | null > ('month');
  const handleButtonClick = (value: string) => {
    setActiveButton(value);
  };
  const convertTo = (pathname: string) => {
    if (!pathname) return pathname;
    const firstLetter = pathname.charAt(0).toUpperCase();
    const restOfString = pathname.slice(1).toLowerCase();
    return firstLetter + restOfString;
  };

  React.useEffect(() => {
    dispatch(getUsersData());
  }, []);
  return (
    <div className="">
      <TopNavbar />
      <div className="flex justify-center pt-8">
        <div className="sm:w-full flex md:w-full xl:w-[70vw] flex-col gap-5">
          <p className="flex items-center text-4xl font-medium text-black justify-center">
            {convertTo(pathname)}
          </p>
          <div className="flex justify-center gap-2">
            <Button
              style={{ textTransform: "none" }}
              value="day"
              className={`${activeButton === 'day' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'} px-3 py-1 rounded-full`}
              onClick={() => handleButtonClick('day')}
            >Day</Button>
            <Button
              style={{ textTransform: "none" }}
              value="week"
              className={`${activeButton === 'week' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'} px-3 py-1 rounded-full`}
              onClick={() => handleButtonClick('week')}
            >Week</Button>
            <Button
              style={{ textTransform: "none" }}
              value="month"
              className={`${activeButton === 'month' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'} px-3 py-1 rounded-full`}
              onClick={() => handleButtonClick('month')}
            >Month</Button>
            <Button
              style={{ textTransform: "none" }}
              value="all"
              className={`${activeButton === 'all' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'} px-3 py-1 rounded-full`}
              onClick={() => handleButtonClick('all')}
            >All</Button>
          </div>
          <div className="flex justify-center gap-2">
            <Clock3Icon />
            <p className="text-gray-400">Resets in 21d 17h 12s</p>
          </div>

          {/* <div className="grid sm:grid-cols-2 md:grid-cols-4 md:px-12 pt-8 items-center gap-8"> */}
          <div className="flex justify-between px-6 gap-4">
            {/* Volume Side */}
            <div className="md:px-2 sm:px-4 lg:px-6 flex flex-col w-full font-bold border-x-2 border-gray-200">
              <div className="  pb-4 gap-2 items-center ">
                <div className="flex gap-2">

                  <ChartNoAxesColumnIncreasing color="blue" strokeWidth={2} size={28} />
                  <p className="text-2xl">Volume</p>
                </div>
                <RankItem
                  rank={1}
                  avatar="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0="
                  onClick={() => { }}
                  price={200000}
                  username={firstName}
                />
              </div>
            </div>

            {/* profit Side */}
            <div className="md:px-2 sm:px-4 lg:px-6 flex flex-col w-full font-bold border-x-2 border-gray-200">
              <div className="flex items-center pb-4 gap-4">
                <Banknote color="red" strokeWidth={2} size={32} />
                <p className="text-2xl">Position</p>
              </div>
              <RankItem
                rank={1}
                avatar="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0="
                onClick={() => { }}
                price={200000}
                username="stefan"
              />
              <RankItem
                rank={1}
                avatar="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0="
                onClick={() => { }}
                price={200000}
                username="stefan"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
