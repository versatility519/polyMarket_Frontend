// ActivityListItem.tsx
import React from 'react';
import Content from './Content';
import { ContentProps } from '../../types/profile';
import { SquareArrowOutUpRight } from 'lucide-react';

const ActivityListItem: React.FC<ContentProps> = ({
    avatar,
    eventName,
    isBet,
    value,
}) => {
    return (
        <div className="flex justify-between px-4 pb-4 items-center">
            <div className="flex w-[4vw]">Seld</div>
            <div className="flex w-full">
                <Content avatar={avatar} eventName={eventName} isBet={isBet} value={value} />
            </div>
            <div className="flex w-[8vw] items-end flex-col ">
                <div className="flex font-normal text-blue-600">$250.25</div>
                <div className="flex text-nowrap text-right gap-2 items-center ">
                    <p className="flex font-normal text-red-600">minute ago</p>
                    <SquareArrowOutUpRight onClick={() => { }} color='gray' size={18} />
                </div>
            </div>
        </div>
    );
};

export default ActivityListItem;
