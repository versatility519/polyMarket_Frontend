import React from "react";
import HolderCard from "../cards/HolderCard";

const RankListItem = () => {
    return (
        <div className="flex w-full justify-between gap-4">
            <HolderCard yesHolder="Voume" />
            <HolderCard noHolder="Profit" />
        </div>
    );
};

export default RankListItem;
