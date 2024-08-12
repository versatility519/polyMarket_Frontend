import { Button, Tooltip } from "@material-tailwind/react";
import { School } from "lucide-react";
const Election = () => {
    return (
        <div className="flex space-x-4">
            <Tooltip interactive={true} content="Subtract 10">
                <Button className="bg-gray-300 rounded-md">Subtract</Button>
            </Tooltip>
            <Tooltip content="Add 10">
                <Button className="bg-gray-300 rounded-md">Add</Button>
            </Tooltip>
        </div>
    )
}

export default Election;