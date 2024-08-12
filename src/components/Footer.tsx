import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Ensure you have the correct import for useNavigate
import { content } from "../contents/landing"; // Import your content
import Button from "./Button"; // Import your Button component

const Footer = () => {
    const navigate = useNavigate();
    const [isHidden, setIsHidden] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
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
                        key={index}
                        text={item.text}
                        value={item.value}
                        icon={<item.icon />}
                        onClick={() => navigate(`/${item.link}`)}
                        className="flex flex-col items-center text-gray-600 hover:text-black hover:bg-gray-300 rounded-sm"
                    />
                ))}
            </div>
        </div>
    );
};

export default Footer;