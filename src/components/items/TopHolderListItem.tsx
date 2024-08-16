import HolderCard from "../cards/HolderCard";

const TopHolderListItem = () => {
    return (
        <div className="flex" >
            <HolderCard first="Yes Holders" />
            <HolderCard second="No Holders" />
        </div>
    );
};

export default TopHolderListItem;
