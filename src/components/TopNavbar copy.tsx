import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton, Menu, MenuHandler, ListItem, List,
  Input, MenuList, MenuItem
} from "@material-tailwind/react";
import { AlignJustify, ChevronDownIcon, Star, Search, School, Option } from "lucide-react";
import { content } from "../contents/landing";

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: School,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: Option,
  },

];

export default function TopNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  const renderItems = (
    navListMenuItems.map(({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ))
  )
  const navList = (
    <ul className="text-black mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {content.menuBtns.map((item, index) =>
        <Button key={index} text={item.text} value={item.value} icon={<item.icon />} onClick={() => { navigate(`/${item.link}`) }} className="flex flex-col items-center text-gray-600 hover:text-black  hover:bg-gray-300  rounded-sm px-3 py-1" >{item.text}</Button>
      )}
    </ul>
  );

  return (
    <div className="flex justify-center items-center px-5 py-2">
      <Navbar className=" px-4 py-2 lg:px-2 lg:py-4 w-full text-black">
        <div className="flex justify-between">
          <div className="flex w-full gap-4 flex-wrap items-center border-2   text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="  cursor-pointer py-1.5 font-medium"
            >
              Poly Market
            </Typography>
            <div className="border-2 border-blue-800 hidden items-center gap-x-2 lg:flex">
              <Search color="black" />
              <input type="text" className="  w-full outline-none" placeholder="Search markets" />
            </div>
          </div>


          <div className="flex border-2 gap-2 items-center">
            <div className="flex justify-center items-center ">
              <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">

                <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>


                <ListItem className="flex items-center gap-2 py-2 pr-4">
                  <Menu
                    open={isMenuOpen}
                    handler={setIsMenuOpen}
                    offset={{ mainAxis: 20 }}
                    placement="bottom"
                    allowHover={true}
                  >
                    <MenuHandler>
                      <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                          className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                          selected={isMenuOpen || isMobileMenuOpen}
                          onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                          Resources
                        </ListItem>
                      </Typography>
                    </MenuHandler>
                    <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                      <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                      </ul>
                    </MenuList>
                  </Menu>
                </ListItem>

                <ListItem className="flex items-center gap-2 py-2 pr-4">
                  Contact Us
                </ListItem>
              </List>
            </div>

            <div className="hidden gap-2 lg:flex">
              <Button variant="text" size="sm" className="bg-red-500">
                Log In
              </Button>
              <Button variant="text" size="sm" className="bg-red-500">
                Sign Up
              </Button>
            </div>

            <hr className="mb-3 mt-6 hidden w-full lg:block" />
            <IconButton
              variant="text"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <Star className="h-6 w-6" strokeWidth={2} />
              ) : (
                <AlignJustify className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>






        <div className="hidden lg:block">{navList}</div>
      </Navbar >
    </div >
  );
}