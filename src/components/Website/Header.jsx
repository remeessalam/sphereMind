import React from "react";
import logo from "../../assets/images/logo/logo1.png";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { websitePagesLinks } from "../../data/constant";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  return (
    <div className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-sm text-primary ">
      <div className="flex wrapper items-center gap-8 justify-between overflow-hidden">
        <Link to="/" className="cursor-pointer ">
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            width="auto"
            height="auto"
            className="h-[5rem] md:h-[6.5rem] scale-125  object-contain overflow-hidden"
          />
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {websitePagesLinks.map((item) => (
            <Link
              className={`${
                pathname === item.link && "active-item"
              } text-sm cursor-pointer text-gray-200 transition-all duration-300`}
              key={item.id}
              to={item.link}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div
          className="block lg:hidden justify-self-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger
            color="#ffffff"
            size="26"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="z-10 p-2"
      >
        <div className="mb-6 flex items-center justify-between pr-[.7rem] py-[.4rem]">
          <img
            src={logo}
            width="auto"
            height="auto"
            alt="logo"
            className="h-[2.5rem] object-contain"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="py-4 px-7 flex flex-col gap-4">
          {websitePagesLinks.map(({ label, link, id }) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={id}
              className="text-2xl font-mediumduration-300 link text-black"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              {label}
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
