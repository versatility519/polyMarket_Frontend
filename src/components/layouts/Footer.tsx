import Logo from "./Logo";
import SocialLink from "./SocialLink";

const Footer = () => {
    return (
        <div className="bg-footerBg flex w-full flex-col mt-16 border-t px-2  text-white">
            <div className=" border-b mt-4 px-4 py-5  justify-between lg:flex flex-none "  >
                <div className="flex flex-col gap-3 ">
                    <Logo />
                    <h1>The world's largest prediction market.</h1>
                </div>

                <div className=" lg:flex sm:flex gap-12 sm:py-8 py-8">
                    <div className="flex space-x-16 pb-8">
                        <div className="flex flex-col gap-2 ">
                            <p className="text-xl font-bold">Markets</p>
                            <p>Politics </p>
                            <p>Crypto </p>
                            <p>Sports </p>
                            <p>Middle East </p>
                            <p>Pop Culture </p>
                            <p>Business </p>
                            <p>Science </p>
                            <p>All </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl font-bold">Resources</p>
                            <p>Contact </p>
                            <p>Learn </p>
                            <p>Developers </p>
                            <p>Blog </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <p className="text-xl font-bold">Join the community</p>
                        <SocialLink border={false} />
                    </div>
                </div>
            </div>

            <div className="sm:flex items-center  py-6 justify-between px-4">
                <div className="">
                    <h1>© 2024 Oráculo. All rights reserved</h1>
                </div>
                <div className="flex gap-4">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;