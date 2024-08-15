import React from "react";
import Content from "./Content";
import { Card, Tooltip, Typography, Button } from "@material-tailwind/react";
import { Upload } from "lucide-react";
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

  const TABLE_HEAD = ["market", "avg", "current", "value"];

  return (
    <Card className=" ">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-3"
              >
                <Typography
                  color="blue-gray"
                  className="text-sm font-normal leading-none opacity-70 uppercase"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr></thead>
        <tbody>
          {customers.map(({ avatar, eventName, isBet, value, avgPrice, curPrice, totalPrice, rate }, index) => {
            const isLast = index === customers.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <Content avatar={avatar} eventName={eventName} isBet={isBet} value={value} />
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {avgPrice} $
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {curPrice} $
                  </Typography>
                </td>
                <td className={classes}>
                  <div className="flex items-center gap-2">
                    <div className="">
                      <Typography className="text-end font-normal">
                        <div className="">${totalPrice}</div>
                        <div className="text-nowrap font-normal text-green-600">{rate} (686.59%)</div>
                      </Typography>
                    </div>

                    <Tooltip content="Share">
                      <Button variant="text" onClick={() => alert('Share button clicked!')}>
                        <Upload size={20} />
                      </Button>
                    </Tooltip>
                    
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default PositionListItem;
