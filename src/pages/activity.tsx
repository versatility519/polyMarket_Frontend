import React from "react";
import Navbar from "../components/Navbar";
import ActivityItem from "../components/items/ActivityItem";
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

                    <ActivityItem avatar="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" toAvatar="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" isBet={true} isSold={true} eventName="Will the USA win gold in the Women’s 4x100m Relay?" onClick={() => navigate("/event")} price={111} time={20} username="japensony " />

                    <ActivityItem avatar="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" toAvatar="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" isBet={false} isSold={true} eventName="Will the USA win gold in the Women’s 4x100m Relay?" onClick={() => navigate("/event")}  price={111} time={20} username="japensony " />

                </div>
            </div>
        </div >
    )
}

export default Acticity;