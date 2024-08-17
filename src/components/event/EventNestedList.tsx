import { Button } from "@material-tailwind/react"
interface CardProps {
    range: string,
    percentage: string,
}
const EventNestedList: React.FC<CardProps> = ({ range, percentage }) => {
    return (
        <>
            <div className="flex flex-row items-center justify-between py-1">
                <div className="flex"> {range} </div>
                <div className="flex items-center justify-between gap-2">
                    {percentage}
                    <div className="flex gap-1 items-center">
                        <Button style={{ textTransform: 'none' }} className="text-nowrap items-cent items-centerer px-2 py-1 text-xs bg-green-300 text-green-600">Yes</Button>
                        <Button style={{ textTransform: 'none' }} className="text-nowrap text-xs items-center px-2 py-1 bg-red-300 text-red-600">No</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventNestedList;