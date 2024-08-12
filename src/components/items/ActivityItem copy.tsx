import { ActivityListProps } from "../../types/rank"

const ActivityItem: React.FC<ActivityListProps> = ({ avatar, toAvatar, isBet, isSold, eventName, onClick, price, time, username }) => {
    return (
        <div className="md:px-2 sm:px-4 lg:px-6 flex gap-4 border-b-2 border-gray-100">
            <div className="flex items-center cursor-pointer" onClick={onClick}>
                <img className="w-14 rounded-md" src={avatar} alt="User Avatar" />
            </div>
            <div className="flex w-full items-center justify-between">
                <div className="flex flex-col cursor-pointer"  >
                    <div className="flex font-semibold text-gray-600" onClick={onClick}>
                        {eventName}
                    </div>
                    <div className="flex text-base items-center gap-2">
                        <img className="w-8 rounded-full" src={toAvatar} alt="User Avatar" onClick={onClick} />
                        <p className=" font-medium ">{username}</p>
                        <p className="">{isSold === true ? 'sold' : 'bought'}</p>
                        
                        {isBet === true ? <p className="font-bold text-green-600">Yes</p> : <p className="font-bold text-orange-600">No</p>}
                        <p className="">at</p>
                        <p className="font-medium">{price}¢ ($72.78)</p>
                    </div>
                </div>
                <div className="flex text-gray-400">{time}m ago</div>
            </div>

        </div>
    )
}
export default ActivityItem;