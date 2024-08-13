import React from "react";

import { Upload } from "lucide-react";
import Content from "./Content";
import { Card, CardBody, } from "@material-tailwind/react";
import { ProfileProps } from "../../types/profile";
import { customers } from "../database";
const PositionListItem: React.FC<ProfileProps> = ({
  eventName,
  isBet,
  value,
  avgPrice,
  curPrice,
  totalPrice,
  rate,
}) => {
  return (
    <Card className="md:px-2 sm:px-4 lg:px-6 flex gap-2 border-gray-100">
      <CardBody>
        <div className="divide-y divide-gray-200">
          {customers.map(({ eventName, avatar}, index) => (
            <div
              key={index}
              className="flex hover:bg-gray-200 hover:rounded-md items-center justify-between py-1 last:pb-2"
            >
              <div className="flex justify-between items-center">
                {/* <div className="flex w-full"> */}
                  <Content avatar={avatar} eventName={eventName} isBet={isBet} value={value} />
                {/* </div> */}
                <div className="flex w-[8vw]">{avgPrice}$</div>
                <div className="flex w-[17vw]">{curPrice}$</div>
                <div className="flex w-[8vw] justify-end items-center gap-4">
                  <div className="flex flex-col items-end">
                    <div className="font-medium">${totalPrice}</div>
                    <div className="text-nowrap font-normal text-green-600">{rate} (686.59%)</div>
                  </div>
                  <div className="relative inline-block group">
                    <Upload
                      className="cursor-pointer"
                      size={20}
                      onClick={() => alert("Share")}
                    />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-2 text-sm text-white bg-gray-800 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Share
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardBody >
    </Card >
  );
};

export default PositionListItem;
