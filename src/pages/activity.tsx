import React from "react";
import Navbar from "../components/Navbar";
import ActivityListItem from "../components/items/ActivityListItem";
import { useNavigate, } from "react-router-dom";
import { getUsersData } from "../store/reducers/users";
import { dispatch, useSelector } from "../store";

const Acticity = () => {
    const navigate = useNavigate();
    // 
    // Getting Data
    const firstName = useSelector((state) => state.userInfo.user.firstName)

    const url = new URL(window.location.href);
    const pathname = url.pathname.replace(/^\/+/, '');

    // Convert the pathname
    const convertTo = (pathname: string) => {
        if (!pathname) return pathname;
        const firstLetter = pathname.charAt(0).toUpperCase();
        const restOfString = pathname.slice(1).toLowerCase();
        return firstLetter + restOfString;
    };

    React.useEffect(() => {
        dispatch(getUsersData())
    }, [])
    return (
        <div className="">
            <Navbar />
            <div className="flex justify-center pt-8">
                <div className="sm:w-full md:w-full xl:w-[50vw] flex flex-col gap-2 justify-center">
                    <p className="flex items-center px-6 text-3xl font-medium text-black"> {convertTo(pathname)} </p>

                    <ActivityListItem  />

                </div>
            </div>
        </div >
    )
}

export default Acticity;