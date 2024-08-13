import React from "react";
import HolderCard from "../cards/HolderCard";

const TopHolderListItem = () => {
    return (
        <div className="flex w-full justify-between gap-4">
            <HolderCard yesHolder="Yes Holders" />
            <HolderCard noHolder="No Holders" />
        </div>
    );
};

export default TopHolderListItem;
