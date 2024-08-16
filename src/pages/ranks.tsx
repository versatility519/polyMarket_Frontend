import React from "react";
// import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import TopNavbar from "../components/TopNavbar";
import { Clock3Icon } from "lucide-react";
import { getUsersData } from "../store/reducers/users";
import { dispatch } from "../store";
import RankListItem from "../components/items/RankListItem";

const Leaderboard = () => {
  // const navigate = useNavigate();
  //
  // Getting Data
  // const username = useSelector((state) => state.userInfo.user.username);

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

          <div className="flex px-40">
            <RankListItem />
          </div>

        </div>
      </div>
    </div >
  );
};

export default Leaderboard;
