import React from "react";
import { useNavigate } from "react-router-dom";
import { content } from "../contents/landing";
import { Button } from "@material-tailwind/react";

const MobileFooter = () => {
    const navigate = useNavigate();
    const [isHidden, setIsHidden] = React.useState(false);
    const [prevScrollPos, setPrevScrollPos] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsHidden(prevScrollPos > currentScrollPos && currentScrollPos > 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <div className={`fixed bottom-0 left-0 lg:hidden sm:w-full w-full border-2 bg-gray-100 text-white px-12 py-3 rounded-md transition-transform duration-300 ${isHidden ? 'transform translate-y-full' : ''}`}>
            <div className="flex justify-between">
                {content.footerBtns.map((item, index) => (
                    <Button
                        style={{ textTransform: 'none' }}
                        key={index}
                        value={item.value}
                        onClick={() => navigate(`/${item.link}`)}
                        className="flex flex-col shadow-none p-1 outline-none items-center text-gray-600 hover:text-black hover:bg-gray-300 rounded-sm"
                    >
                        <item.icon size={18} />
                        <p className="text-sm">{item.text}</p>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default MobileFooter;