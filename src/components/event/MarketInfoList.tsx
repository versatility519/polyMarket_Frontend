import React from "react";
import OrderBook from "../marketInfo/OrderBook";
import Resolution from "../marketInfo/Resolution";
import Button from "../Button/Button";

const MarketInfoList = () => {
    const [selectPanel, setSelectPanel] = React.useState < string > ('orderbook')
    const handleTabs = (value: string) => {
        setSelectPanel(value);
    };

    const data = [
        {
            label: "Order Book",
            value: "orderbook",
            desc: <OrderBook />
        },
        {
            label: "Graph",
            value: "graph",
            desc: <OrderBook />
        },
        {
            label: "Resolution",
            value: "resolution",
            desc: <Resolution />
        },
    ];
    return (
        <div className="w-full">
            <div className="flex gap-4 border-b">
                {data.map((item, index) => (
                    <Button
                        key={index}
                        text={item.label}
                        value={item.value}
                        onClick={() => { handleTabs(item.value); }}
                        className={`${selectPanel === `${item.value}` ? 'border-b-2 text-textWhiteColor border-textWhiteColor' : 'text-gray-400'}  flex flex-col text-lg  font-medium cursor-pointer py-2 hover:border-b-2 hover:border-b-gray-500 text-nowrap`}
                    />
                ))}
            </div>

            {data.map((item) => (
                selectPanel === item.value && (
                    <div key={item.value} className="w-full mt-3">
                        {item.desc}
                    </div>
                )
            ))}
        </div>
    )
}

export default MarketInfoList;