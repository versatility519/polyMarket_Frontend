import React from "react";
import TopNavbar from "../components/TopNavbar";
import ActivityListItem from "../components/items/ActivityListItem";
import { useNavigate, } from "react-router-dom";
import { getUsersData } from "../store/reducers/users";
import { dispatch, useSelector } from "../store";

const Acticity = () => {
    const navigate = useNavigate();
    // 
    // Getting Data
    const firstName = useSelector((state) => state.userInfo.user.firstName)


    React.useEffect(() => {
        dispatch(getUsersData())
    }, [])
    return (
        <div className="">
            <TopNavbar />
            <div className="flex justify-center pt-8">
                <div className=" xl:px-[26vw] md:px-[18vw] sm:w-full px-4 gap-2 justify-center">
                    <ActivityListItem />

                </div>
            </div>
        </div >
    )
}

export default Acticity;