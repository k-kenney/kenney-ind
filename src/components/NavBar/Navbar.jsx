// import React, { useState } from "react";
// import Logo from "../../assets/img/kenneyLogo.svg";
// import { Link } from "react-router-dom";
// import NavLinks from "./NavLinks";
// import { links } from "./MyLinks";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <nav className="bg-white">
//       <div className="flex items-center font-medium justify-around">
//         <div className="z-50 p-5 md:w-auto w-full flex justify-between">
//           <a href="/" className="">
//             {" "}
//             <img
//               className="w-40 md:w-40 lg:w-56 transform transition ease duration-300 hover:scale-110"
//               src={Logo}
//               alt="Kenney logo"
//             />
//           </a>
//           <div
//             className="text-3xl md:hidden text-black"
//             onClick={() => setOpen(!open)}
//           >
//             <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
//           </div>
//         </div>
//         <ul className="md:flex w-full hidden uppercase items-center gap-8 font[Poppins] text-black">
//           <li className="flex">
//             <Link to="/" className="py-7 px-3 block w-24 text-center">
//               Home
//             </Link>
//             <Link to="/services" className="py-7 px-3 block w-24 text-center">
//               Services
//             </Link>
//             <Link to="/quote" className="py-7 px-3 inline-block w-24 text-center">
//               Quote
//             </Link>
//           </li>
//           <NavLinks links={links} />
//         </ul>
//         <div className="md:block hidden"></div>
//         {/* mobile */}
//         <ul
//           className={`
//         md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
//           open ? "right-0" : "right-[100%]"
//         }
//         `}
//         >
//           <li>
//             <Link to="/about" className="py-7 px-3 inline-block">
//               Home
//             </Link>
//           </li>
//           <NavLinks />
//           <div className="py-5"></div>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import kenneyLogo from "../.././assets/img/kenneyLogo.svg";
import AboutDropDown from "./AboutDropDown";
import CareerDropDown from "./CareerDropDown";

// Import your page components

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: <AboutDropDown />,
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
    title: <CareerDropDown />,
    link: "/careers",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

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
              <img
                className="w-40 md:w-40 lg:w-56 transform transition ease duration-300 hover:scale-110"
                src={kenneyLogo}
                alt="Kenney logo"
              />
            </a>
          </div>
          {/* navlinks */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline lg:space-x-4 md:space-x-2">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-gray-300 hover:bg-red hover:text-white block px-7 py-4 rounded-md text-base font-medium transform transition ease duration-300 hover:scale-110 "
                >
                  <Link
                    to={link.link}
                    // className={`${
                    //   location.pathname === link.link
                    //     ? "border-b-1 pb-2 border-blue-500"
                    //     : ""
                    // }`}
                  >
                    {link.title}
                  </Link>
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
              <span className="sr-only ">Open Main Menu</span>

              {open === true ? (
                <FaTimes className="w-9 h-9 absolute z-40 top-14 right-0 left-0 m-auto transform transition ease duration-300 hover:scale-110" />
              ) : (
                <FaBars className="w-9 h-9 transform transition ease duration-300 hover:scale-110 z-40" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* mobile-menu */}
      {open ? (
        <div className="md:hidden">
          <ul
            className={`
        md:hidden bg-blue absolute w-full h-full bottom-0 py-32 duration-500 ${
          open ? "right-0" : "right-[100%]"
        }
        `}
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="text-base flex justify-center font-medium transform transition ease text-gray-300 hover:bg-red px-7 py-4 ease duration-300 hover:scale-110"
              >
                <Link className="" to={link.link}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
