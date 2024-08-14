import { useNavigate } from "react-router";
import { content } from "../contents/landing";
import Button from "./Button";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className=" lg:hidden md:visible border-2 sm:justify-between justify-center flex">
            {content.footerBtns.map((item, index) =>
                <Button key={index} text={item.text} value={item.value} icon={<item.icon />} onClick={() => { navigate(`/${item.link}`) }} className="flex flex-col items-center text-gray-600 hover:text-black hover:bg-gray-300  rounded-sm size-1/3" />)}
        </div>
    )
}
export default Footer;