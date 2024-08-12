import React from "react";
import BuySell from "./BuySell";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
const EventInfoCard = () => {
    const [activeTab, setActiveTab] = React.useState < string > ('buy');
    const data = [
        {
            label: "Buy",
            value: "buy",
            desc: <BuySell />,
        },
        {
            label: "Sell",
            value: "sell",
            desc: `dsdfa`
        },

    ];
    return (
        <div>
            <Tabs value={activeTab}>
                <TabsHeader
                    className="justify-start rounded-none border-b border-gray-300 bg-transparent p-0"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    }}
                >
                    {data.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "border-b border-blue-700 text-gray-900" : ""}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    )
}

export default EventInfoCard;