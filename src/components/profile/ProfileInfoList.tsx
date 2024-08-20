import React from "react";
import Button from "../Button/Button";
import PositionListItem from "../items/PositionListItem"
import AcitiveListItem from "../items/ProfileAcitiveListItem";

export default function ProfileInfoList() {

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
    const [selectPanel, setSelectPanel] = React.useState('position')
    return (
        <div className="w-full">
            <div className="flex ">
                {data.map((item, index) => (
                    <Button
                        key={index}
                        text={item.label}
                        value={item.value}
                        onClick={() => { setSelectPanel(item.value); }}
                        className=" flex flex-col border-b-2 rounded-none font-medium cursor-pointer p-2 border-white hover:border-b-gray-500 focus:border-b-black text-black text-nowrap"
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

