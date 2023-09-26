import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import kenneyLogo from ".././assets/img/kenneyLogo.svg";

// Import your page components

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Quote",
    link: "/quote",
  },
  {
    title: "Careers",
    link: "/careers",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
  return (
    <div>
      <div className="mx-auto py-14 px-5 lg:px-8 w-5/6 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="">
              <img className="w-40 md:w-40 lg:w-56 transition duration-300 ease-in hover:opacity-70" src={kenneyLogo} alt="Kenney logo" />
            </a>
          </div>
          {/* navlinks */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline lg:space-x-4 md:space-x-1">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-gray-300 transition-all duration-500 hover:bg-gray-600 px-3 py-2 rounded-md lg:text-lg md:text-sm"
                >
                  <Link to={link.link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/*  hamburger button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex item-center justify-center p-2 rounded-md transition duration-300 ease-in text-gray-400 hover:text-white"
            >
              <span className="sr-only">Open Main Menu</span>
              
              {open === true ? <FaTimes className="w-9 h-9 absolute z-50 top-14 right-0 left-0 m-auto" /> : <FaBars className="w-9 h-9" />}
            </button>
          </div>
        </div>
      </div>
      {/* mobile-menu */}
      {open ? (
        <div className="md:hidden">
          <ul className="absolute z-20 top-0 w-full text-center bg-blue h-auto ox-2 space-y-2 pt-36 pb-14 sm:px-3">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-7 py-2 rounded-md text-base font-medium"
              >
                <Link to={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
