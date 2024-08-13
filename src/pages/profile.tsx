import React from "react";
import { Avatar } from "@material-tailwind/react";
import Button from "../components/Button";
import ProfileInfoList from "../components/profile/ProfileInfoList";
import MyProperty from "../components/cards/MyProperty";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  Landmark,
  Edit2,
  Activity,
  TrendingUp,
  ChartNoAxesColumnIncreasing,
  CheckCheck,
} from "lucide-react";
import { getUsersData } from "../store/reducers/users";
import { dispatch, useSelector } from "../store";

const Profile = () => {
  const navigate = useNavigate();
  // Getting Data
  const firstName = useSelector((state) => state.userInfo.user.firstName);

  React.useEffect(() => {
    dispatch(getUsersData());
  }, []);
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center py-4">
        <div className="flex flex-col xl:px-[18vw] lg:px-[10vw] sm:px-4 px-4 gap-4">
          <div className="flex  justify-between items-center text-black-700 border-2" >
            <div className="flex gap-4">
              <Avatar className="rounded-full" src="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" alt="" />
              <div className=" ">
                <div className="text-2xl font-bold">{firstName}</div>
                <div className="text-sm">Joined Aug 2024</div>
              </div>
            </div>

            <div className=" ">
              <Button
                text="Edit Profile"
                value="editProfile"
                className="flex items-center font-semibold border-2 rounded-lg border-gray-400 gap-2 px-2 py-1"
                onClick={() => navigate("/setting")}
                icon={<Edit2 />}
              />
              <Button
                text="PloyMarket"
                value="editProfile"
                className="flex items-center font-semibold rounded-lg gap-2 px-4 py-1"
                icon={<Landmark />}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 pt-8 items-center gap-8">
            <MyProperty value={35} text={"Positions value"} className={"bg-blue-200"} icon={<Activity />} />
            <MyProperty value={53} text={"Profit/loss"} className={"bg-green-200"} icon={<TrendingUp />} />
            <MyProperty value={90} text={"Volume traded"} className={"bg-purple-200"} icon={<ChartNoAxesColumnIncreasing />} />
            <MyProperty value={53} text={"Markets traded"} className={"bg-yellow-200"} icon={<CheckCheck />} />
          </div>
           
            <ProfileInfoList />
        
          {/* <Tabs>
          <TabContent label="Positions">
            <div className="flex justify-between px-2 py-2 text-gray-400  uppercase">
              <div className="flex w-[30vw] bg-red-400 border-2 text-right ">market</div>
              <div className="flex w-[15vw]">avg</div>
              <div className="flex w-[4vw]">current</div>
              <div className="flex justify-end w-[8vw]">value</div>
            </div>
            <PositionListItem
              avatar="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0="
              eventName="Will Kamala Harris win the 2024 US Presidential Election?"
              isBet={true}
              value={124120}
              avgPrice={6}
              curPrice={10}
              totalPrice={123123.61}
              rate={123321.26}
            />
          </TabContent>

          <TabContent label="Activity">
            <div className="flex justify-between px-2 text-gray-400 uppercase">
              <div className="flex w-[8vw] ">
                type
              </div>
              <div className="flex w-[60vw] ">
                market
              </div>
              <div className="flex w-[8vw] justify-end px-12">
                amount
              </div>
            </div>
            <ActivityListItem
              avatar="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0="
              eventName="Will Kamala Harris win the 2024 US Presidential Election?"
              isBet={true}
              value={124120}
              onClick={() => navigate("/event")}
            />
          </TabContent>
        </Tabs> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
