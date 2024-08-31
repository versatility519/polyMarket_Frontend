import React from "react";
import Button from "../Button/Button";
// import { ActivityListItemProps } from "../../types/rank"; // Make sure this path is correct
import { customers } from "../database";

const RelatedListItem: React.FC = () => {
    const [convertBgColor, setConvertBgColor] = React.useState < boolean > (false);
    const convertColor = () => {
        setConvertBgColor(!convertBgColor);
    }
    return (
        <div className="md:px-2 flex gap-4 border-b-2 w-full border-gray-100">
            <div className="w-full">
                <div className="divide-y divide-gray-200">
                    {customers.map(({ eventName, avatar, yes, no }, index) => (
                        <div
                            key={index}
                            className="flex hover:bg-selBtnHoverColor items-center w-full justify-between pb-3 pt-3 last:pb-0"
                        >
                            <div className="w-full">
                                <div className="flex items-start gap-1 ">
                                    <img width={44} className="rounded-md" src={avatar} alt={eventName} />
                                    <div className=" flex w-full justify-between">
                                        <div className="flex text-textColor  text-start">
                                            <p className=""> {eventName}</p>
                                            <p className="lg:flex hidden text-sm font-semibold text-textColor ">$124,937 Bet</p>
                                        </div>
                                        <div className="lg:flex gap-3 hidden">
                                            <Button
                                                onClick={() => convertColor()}
                                                className="rounded-lg bg-yesBg text-yesBtnText text-nowrap px-2 py-1"
                                                text={`Yes: 78 ${yes}`}
                                            />
                                            <Button
                                                onClick={() => convertColor()}
                                                className="rounded-lg bg-noBg text-noBtnText text-nowrap px-2 py-1"
                                                text={`No: ${no}`}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex pt-3 items-center gap-2">
                                    <Button
                                        onClick={() => convertColor()}
                                        className="rounded-lg bg-yesBg text-yesBtnText text-nowrap px-2 py-1"
                                        text={`Yes: 78 ${yes}`}
                                    />
                                    <Button
                                        onClick={() => convertColor()}
                                        className="rounded-lg bg-noBg text-noBtnText text-nowrap px-2 py-1"
                                        text={`No: ${no}`}
                                    />
                                    <p className="lg:hidden flex text-sm font-semibold text-textColor ">$124,937 Bet</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedListItem;
