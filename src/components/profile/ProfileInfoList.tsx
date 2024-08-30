import React from "react";
import Button from "../Button/Button";
import PositionListItem from "../items/PositionListItem"
import AcitiveListItem from "../items/ProfileAcitiveListItem";

export default function ProfileInfoList() {

    const [selectPanel, setSelectPanel] = React.useState < string > ('position')
    const handleTabs = (value: string) => {
        setSelectPanel(value);
    };
    const data = [
    {
            label: "Positions",
            value: "position",
            desc: <PositionListItem />
        },
        {
            label: "Activity",
            value: "activity",
            desc: <AcitiveListItem />,
        },

    ];
    return (
        <div className="w-full">
            <div className="flex gap-4">
                {data.map((item, index) => (
                    <Button
                        key={index}
                        text={item.label}
                        value={item.value}
                        onClick={() => { handleTabs(item.value); }}
                        className={`${selectPanel === `${item.value}` ? 'border-b-2 border-textWhiteColor text-textWhiteColor ' : 'border-b-2 border-gray-500 text-gray-500'}   flex flex-col  font-medium cursor-pointer py-2  hover:border-b-gray-500   text-nowrap`}
                    />
                ))}
               
            </div>

            <div className="w-full">
                {data.map((item) => (
                    selectPanel === item.value && (
                        <div key={item.value} className="w-full">
                            {item.desc}
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

