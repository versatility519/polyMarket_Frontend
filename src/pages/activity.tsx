import React from "react";
import TopNavbar from "../components/TopNavbar";
import ActivityListItem from "../components/items/ActivityListItem";
import { getUsersData } from "../store/reducers/users";
import { dispatch } from "../store";

const Acticity = () => {
     
    React.useEffect(() => {
        dispatch(getUsersData())
    }, [])
    return (
        <div className="">
            <TopNavbar />
            <div className="flex justify-center pt-8">
                <div className=" xl:px-[22vw] md:px-[18vw] sm:w-full px-4 gap-2 justify-center">
                    <ActivityListItem />
                </div>
            </div>
        </div >
    )
}

export default Acticity;