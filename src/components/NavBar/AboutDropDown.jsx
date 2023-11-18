import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import {  useLocation } from "react-router-dom";

import qualityPDF from "../../../src/assets/img/quality.png";

const AboutDropDown = () => {
  const location = useLocation();
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [hoveringOverAbout, setHoveringOverAbout] = useState(false);

  const showDropDownHandle = () => {
    setShowAboutDropdown(true);
    setHoveringOverAbout(true);
  };

  const hideDropDownHandle = () => {
    setShowAboutDropdown(false);
    setHoveringOverAbout(false);
  };

  return (
    <div className="flex items-center hover:mb-10 md:hover:mb-0">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onMouseEnter={showDropDownHandle}
        onMouseLeave={hideDropDownHandle}
      >
        
          About
        {hoveringOverAbout ? <FaAngleDown /> : <FaAngleRight />}
      

      {/* Drop Down Code for About Us */}
      {showAboutDropdown && (
        <div
        className="absolute top-0 pt-10 mt-4 pl-1 md:mt-0 w-full md:top-10 md:left-0 md:w-[126px] md:hover:bg-red/70 md:px-7 md:pt-8 md:pb-4 rounded-md text-base font-medium transform transition ease duration-500"
          // onMouseLeave={hideDropDownHandle}
        >
          <a href={qualityPDF} className="block text-gray-300 hover:text-white">
            Quality
          </a>
        </div>
      )}
      </div>
    </div>
  );
};

export default AboutDropDown;
