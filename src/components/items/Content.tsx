import { ContentProps } from "../../types/profile";

const Content: React.FC<ContentProps> = ({
  avatar,
  isBet,
  eventName,
  value
  
}) => {
  return (
    <div className="flex gap-4">
      <img src={avatar} alt="avatar" className="w-12 rounded-md" />
      <div className="flex flex-col">
        <div className="font-semibold">{eventName}</div>
        <div className="flex gap-4">
        { isBet == true ? 
          <div className="text-green-600 bg-green-200 font-bold px-1 rounded-md">Yes</div>
             : 
          <div className="text-red-600 bg-gray-200 font-bold px-1 rounded-md">No</div>
        } 
          <div> {value} shares</div>
        </div>

      </div>
    </div>
  );
};
export default Content;
