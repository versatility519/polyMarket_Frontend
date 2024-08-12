import React from "react";
import Button from "../components/Button";
import MyProperty from "../components/cards/MyProperty";
import Navbar from "../components/Navbar";
import PositionListItem from "../components/items/PositionListItem";
import { Tabs, TabContent } from "../components/TabsComponet";
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
import ActivityListItem from "../components/items/ActivityListItem";

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
      <div className="flex justify-center pt-8">
        <div className="xl:w-[50vw] lg:w-full md:w-full sm:w-full w-full flex flex-col border-2 py-4">
          <div className="flex items-center gap-8 px-8 text-black-700">
            <img className="w-24 rounded-full" src="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" alt="" />

            <div className="flex flex-grow justify-between items-center ">
              <div className="flex flex-col">
                <div className="text-2xl font-bold">{firstName}</div>
                <div className="text-sm">Joined Aug 2024</div>
              </div>
              <div className="flex md:flex-col sm:flex-row">
                <div className="flex text-start text-lg">
                  <Button
                    text="Edit Profile"
                    value="editProfile"
                    className="flex items-center font-semibold border-2 rounded-lg border-gray-400 gap-2 px-2 py-1"
                    onClick={() => navigate("/setting")}
                    icon={<Edit2 />}
                  />
                </div>
                <div className="flex ">
                  <Button
                    text="PloyMarket"
                    value="editProfile"
                    className="flex items-center font-semibold rounded-lg gap-2 px-4 py-1"
                    icon={<Landmark />}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 md:px-8 pt-8 items-center gap-8">
            <MyProperty
              value="$0.00"
              text="Position Value"
              className="p-2 rounded-full cursor-pointer text-black bg-blue-200"
              onClick={() => { }}
              icon={<Activity />}
            />
            <MyProperty
              value="$0.00"
              text="Profit/loss"
              className="p-2 rounded-full cursor-pointer bg-green-200"
              onClick={() => { }}
              icon={<TrendingUp />}
            />
            <MyProperty
              value="$0.00"
              text="Volume traded"
              className="p-2 rounded-full cursor-pointer bg-purple-300"
              onClick={() => { }}
              icon={<ChartNoAxesColumnIncreasing />}
            />
            <MyProperty
              value="0"
              text="Markets traded"
              className="p-2 rounded-full cursor-pointer bg-yellow-200"
              onClick={() => { }}
              icon={<CheckCheck />}
            />
          </div>
          <Tabs>
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
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
